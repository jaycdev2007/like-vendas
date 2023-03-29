import { useEffect, useState} from "react"

export function getDataLoja() {
    const [data,setData] = useState<any>()
    useEffect(() => {
        const res = localStorage.getItem("loja")
        const loja = JSON.parse(`${res}`)
        //console.log(loja)
        setData(loja)
    },[])
    
    if(data == undefined) return false 

    return data
}