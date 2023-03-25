 export async function loginLoja(email:string,password:string) {
     const form = JSON.stringify({
      query:`
      query MyQuery {
        lojas {
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
  
      const lojas = data.data.lojas
      const loja = lojas.find((loja:any) => {
        return loja.emailDaLoja === email && loja.senha === password
      })
    return loja
  }