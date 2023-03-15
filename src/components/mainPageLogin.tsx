"use client"
import Link from "next/link"
import { Button } from "./button"
import { ButtonSecond } from "./buttonSecond"
import { Input } from "./input"
import { InputPassword } from "./inputPassword"
import { useState } from "react"

type MainPageLoginType = {
    heading: string,
    paragrh: string,
    url: string,
    isLogin: boolean
}

    export function MainPageLogin({ heading,paragrh,url,isLogin}: MainPageLoginType) {
        const [email,setEmail] = useState<string>("")
        const [ password,setPassword] = useState<string>("")

        function SendLogin() {
        }
    return (
        <main className="w-full p-3 flex justify-center items-center md:h-[60vh]">
            { isLogin === true ? (
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl mb-10 self-start">{heading}</h1>

                    <div className="flex flex-col gap-20 mb-16">
                        <Input typeInput="email" text="Email" setEmail={setEmail}/>
                        <InputPassword text="Senha" isLogin={true} setPassword={setPassword} />
                    </div>

                    <div className="w-[200px] flex items-center justify-center">
                        <Button text="Entrar" url="#"/>
                    </div>
                   
                </div>
            ) : (
                <>
                    <h1>{heading}</h1>

                    <p>{paragrh}</p>
                </>
            ) }
        </main>
    )
}