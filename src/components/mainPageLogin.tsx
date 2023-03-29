"use client"
import Link from "next/link"
import { Input } from "./input"
import { InputPassword } from "./inputPassword"
import { useState,useEffect } from "react"
import { InputFile } from "./inputFile"
import { createLoja } from "../controlles/createLoja"
import { Spinner } from "phosphor-react"
import { checkEmail } from "../utils/checkEmail"
import { checkPassword } from "../utils/checkPassword"
import { loginLoja } from "../controlles/loginLoja"
import { verificarEmail } from "@/controlles/verificarEmail"
import { encryptoPassword } from "../controlles/encryptoPassword"
import { ContextLoja } from "@/contexts/contextLoja"
import { useContext } from "react"


type MainPageLoginType = {
    heading: string,
    paragrh: string,
    url: string,
    isLogin: boolean
}

    export function MainPageLogin({ heading,paragrh,url,isLogin}: MainPageLoginType) {
        const [email,setEmail] = useState<string>("")
        const [password,setPassword] = useState<string>("")
        const [name,setName] = useState<string>("")
        const [file,setFile] = useState<string>("")
        const [load,setLoad] = useState<boolean>(false)
        const [err,setErr] = useState<boolean | string>(false)
        const {loja,setLoja} = useContext(ContextLoja)

        useEffect(() => {
            localStorage.setItem("loja", JSON.stringify(loja));
        },[loja])

        async function senLoja() {
            const checkemail = checkEmail(email)
            const checkpassword = checkPassword(password)
            if(checkemail == false || checkpassword == false || name.length == 0 || file.length == 0) {
                setErr(true)
                setErr("Para continuar o cadastro deves preencher todos os campos acima correctamente!")
            }else {
                setErr(false)
                setLoad(true)
                const verificaremail = await verificarEmail(email)
                if(verificaremail != undefined) {
                    setErr(true)
                    setErr("Já exite uma loja cadastrada com esse email")
                    setLoad(false)
                }else {
                    setErr(false)
                    const passwordEncrypto = encryptoPassword(password)
                    const res = await createLoja({
                        name,
                        email,
                        password: passwordEncrypto,
                        idLogo: file
                    })
                    setLoja(res)
                    document.location =`/${res.emailDaLoja}/dashbord`
                }
            setLoad(false)
        }
            
        }
        async function login() {
            const checkemail = checkEmail(email)
            const checkpassword = checkPassword(password)
            if(checkemail == false || checkpassword == false) {
                setErr(true)
                setErr("Para fazer o login deves preencher todos os campos acima correctamente!")
        } else {
            setLoad(true)
            setErr(false)
            const passwordEncrypto = encryptoPassword(password)
           const res =  await loginLoja(email,passwordEncrypto)
           if(res === undefined) {
            setErr(true)
            setErr("Não exite nenhuma loja cadastrada com este email e senha")
            setLoad(false)
           }else {
            setLoja(res)
            document.location = `/${res.emailDaLoja}/dashbord`
           }
          
           setLoad(false)
        }
     } 

    return (
        <main className="w-full p-3  md:flex md:justify-center md:items-center md:h-[60vh]">
            { isLogin === true ? (
                <div className="p-3">
                    <h1 className="text-3xl my-10">{heading}</h1>
                    <div className="flex flex-col items-center">
                    <div className="flex flex-col gap-20 mb-16">
                        <Input typeInput="email" text="Email" setValue={setEmail}/>
                        <InputPassword text="Senha" isLogin={true} setPassword={setPassword} />
                    </div>
                    <div className="w-[200px] flex items-center justify-center">
                    <button className="py-2 px-6 rounded-lg bg-blue-500 text-white hover:text-black hover:bg-white transition-all" onClick={login}>Entar</button>
                        { load && <Spinner size={32} className="animate-spin" />}
                    </div>
                    </div>
                    <div className="flex justify-center my-6">
                    {
                            err && <div className="w-[300px] text-xs text-center">
                             {err}
                            </div>
                        }
                    </div>
                   <Link href={url} className="text-blue-500 text-xs hover:text-black transition-all my-10 self-start">{paragrh}</Link>
                </div>
            ) : (
                <>
                   <div className="p-3">
                     <h1 className="text-3xl my-10">{heading}</h1>
                     <div className="flex flex-col justify-center items-center gap-10 md:flex-row">
                        <div className="flex flex-col gap-10">
                        <Input typeInput="email" text="Email" setValue={setEmail}/>
                        <InputPassword text="Senha" isLogin={false} setPassword={setPassword} />
                        </div>
                        <div className="flex flex-col gap-10">
                         <Input typeInput="text" text="Nome da Loja" setValue={setName}/>
                        <InputFile setFile={setFile} />
                        </div>
                     </div>
                     <div className="flex justify-center my-10">
                        <div className="w-[200px] flex items-center justify-center">
                            <button className="py-2 px-6 rounded-lg bg-blue-500 text-white hover:text-black hover:bg-white transition-all" onClick={senLoja}>Entar</button>
                            { load && <Spinner size={32} className="animate-spin" />}
                        </div>
                     </div>
                    <div className="flex justify-center my-6">
                    {
                            err && <div className="w-[300px] text-xs text-center">
                             {err}
                            </div>
                        }
                    </div>
                     <Link href={url} className="text-blue-500 text-xs hover:text-black transition-all my-10 self-start">{paragrh}</Link>
                   </div>
                </>
            ) }
        </main>
    )
}