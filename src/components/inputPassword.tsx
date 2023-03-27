"use client"
import { ButtonSecond } from "./buttonSecond"
import { useState } from "react"
import { Eye, EyeClosed} from "phosphor-react"


type InputPasswordType = {
    isLogin: boolean,
    text: string,
    setPassword: (p:string) => void
}

export function InputPassword({ isLogin,text,setPassword }: InputPasswordType) {
    const [isEye,setIsEye] = useState<boolean>(false)
    const [value,setValue] = useState<string>("")
    const [typeInput,setTypeInput] = useState<string>("password")
    return (
        <div className="max-w-[300px] flex flex-col gap-4 items-end">
            
            <div className="w-full flex gap-2 border-b border-black">
                <input type={typeInput} value={value} placeholder={text} onChange={async(e) => {
                    setValue(e.target.value)
                    setPassword(e.target.value)
                }} className="p-3 outline-none w-[80%]" />
                <div className="w-[20%]">
                {
                    isEye === false ? <EyeClosed size={32} onClick={() => {
                        setIsEye(true)
                        setTypeInput("text")
                    }} /> : <Eye size={32} onClick={() => {
                        setIsEye(false)
                        setTypeInput("password")
                    }} />
                }
                </div>
            </div>
            {isLogin == true ? <ButtonSecond text="Esquece a minha senha" url="/esquece-senha" sizeText="text-xs"/> :
            <div className="text-xs font-light">
                Letra maiuscula no inicio e pelo menos um número
            </div>}
        </div>
    )
}