"use client"
import { verificarValidadeDoServico } from "@/controlles/verificarValidadeDoServico"
import { useEffect,useState } from "react"

export default function Dashbord() {
    const [loja,setLoja] = useState()
    useEffect(() => {
        const res = localStorage.getItem("loja")
        if(res === null){
            document.location = "/"
        }else {
        const resLoja = JSON.parse(`${res}`)
        const dataDeTermino = `${resLoja.dataDeIncerramentoDoServico}`
    
        const isValidade = verificarValidadeDoServico(dataDeTermino)
            if(isValidade === false) {
                localStorage.clear()
                document.location = "/pagamento"
            }
        }
   })
    return (
        <h1>
            oi
        </h1>
    )
}