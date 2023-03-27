"use client"
import { Input } from "./input";
import { useState } from "react"
import { Spinner} from "phosphor-react"
import { verificarEmail } from "@/controlles/verificarEmail";
import { decryptoPassword } from "@/controlles/decryptoPassword";
import { ButtonSecond } from "./buttonSecond";


export function MainPageEsqueSenha() {
    const [email,setEmail] = useState("")
    const [load,setLoad] = useState(false)
    const [senha,setSenha] = useState("")
    const [err,setErr] = useState<boolean | string>(false)

    async function sendEmail() {
        setLoad(true)
        const res = await verificarEmail(email)
        if(res === undefined){
            setErr(true)
            setErr("Não exite nenhuma loja cadastrada com este email")
        }else {
            setErr(false)
            const password = decryptoPassword(res.senha)
            setSenha(password)
        }
        setLoad(false)
    }

    return (
        <main className="p-6 md:w-[50vw] h-[60vh] flex flex-col justify-center items-center">
            <h1 className="text-2xl pb-8 font-bold">Esqueceu a sua senha</h1>
            <p className="p-3 text-center pb-12">
                Digite o email que criou com ele a conta e a sua senha vai aparecer em baixo do compo de email
            </p>
            <Input typeInput="email" text="email" setValue={setEmail} />
            <div className="my-6 flex gap-2">
                <button className="py-2 px-6 rounded-lg bg-blue-500 text-white hover:text-black hover:bg-white transition-all" onClick={sendEmail}>Entar</button>
                { load && <Spinner size={32} className="animate-spin" />}
            </div>
            <p className="p-3 text-center pb-12">
                A sua senha é: {senha}
            </p>
           { 
            err && <p className="mb-4 p-3 text-xs text-center pb-12">{err}</p>
           }

            <ButtonSecond text="Volta para página de login" url="/login" sizeText="text-xs"  />
        </main>
    )
}