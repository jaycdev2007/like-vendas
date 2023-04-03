import { verificarValidadeDoServico } from "@/controlles/verificarValidadeDoServico"
import { useEffect } from "react"

export function VerificarPage() {
    useEffect(() => {
        const res = localStorage.getItem("loja")
        if(res === null){
            document.location = "/login"
        }else {
        const resLoja = JSON.parse(`${res}`)
        const dataDeTermino = `${resLoja.dataDeIncerramentoDoServico}`
    
        const isValidade = verificarValidadeDoServico(dataDeTermino)
            if(isValidade === false) {
                localStorage.clear()
                document.location = "/pagamento"
            }
        }
   },[])
}