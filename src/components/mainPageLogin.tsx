"use client"
import Link from "next/link"
import { Button } from "./button"
import { Input } from "./input"
import { InputPassword } from "./inputPassword"
import { useState } from "react"
import { InputFile } from "./inputFile"
import { CreateLoja } from "../controlles/createLoja"
import { Spinner } from "phosphor-react"

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
                        <Button text="Entrar" url="#" />
                    </div>
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
                            <button className="py-2 px-6 rounded-lg bg-blue-500 text-white hover:text-black hover:bg-white transition-all" onClick={async() => {
                                setLoad(true)
                                 await CreateLoja({name,email,password,idLogo:file})
                                setLoad(false)
                            }}>Entar</button>
                            { load && <Spinner size={32} className="animate-spin" />}
                        </div>
                     </div>
                     <Link href={url} className="text-blue-500 text-xs hover:text-black transition-all my-10 self-start">{paragrh}</Link>
                   </div>
                </>
            ) }
        </main>
    )
}