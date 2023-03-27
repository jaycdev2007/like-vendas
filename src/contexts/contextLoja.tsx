"use client"
import { createContext } from "react"
//import { ILoja } from "@/entities/ILoja"

interface IContextLoja  {
    loja: {};
    setLoja: (loja:any) => void
}



export const ContextLoja = createContext<IContextLoja>({loja:{},setLoja(loja) {
    
},})