"use client"
import { useState } from "react"
type InputType = {
    typeInput: string,
    text: string,
    setEmail: (p:string) => void
}

export function Input({ typeInput,text,setEmail}: InputType) {
    const [value,setValue] = useState<string>("")
    return (
        <div className="max-w-[300px]">
            <input type={typeInput} placeholder={text} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 outline-none border-b border-black"/>
        </div>
    )
}