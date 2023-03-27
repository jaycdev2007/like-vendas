import { ILoja } from "@/entities/loja";

export async function  createLoja({ name,email,password,idLogo  }:ILoja ) {
    const dataDeEscricaoDoServico = new Date()
    const date = new Date()
    const diasDeServico = 30
    date.setDate(date.getDate() + diasDeServico)

    const form = JSON.stringify({
        query:`
            mutation MyMutation {
                createLoja(
                data: {senha: "${password}", nomeDaLoja: "${name}", emailDaLoja: "${email}", dataDeIncerramentoDoServico: "${date}", validadeDoServico: "true", dataDeEscricaoDoServico: "${dataDeEscricaoDoServico}", logoDaLoja: {connect: {id: "${idLogo}"}}}
                ){
                    id
                    senha
                    nomeDaLoja
                    logoDaLoja {
                        url
                    }
                    emailDaLoja
                    dataDeEscricaoDoServico
                    dataDeIncerramentoDoServico
                    validadeDoServico
                }
            }
        ` 
       })

    const res = await fetch(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`,{
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_ASSET_TOKEN}`,
        },
        body: form
      })
      const data = await res.json()
      return data.data
}