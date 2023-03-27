interface ILoja {
  id: string;
  emailDaLoja: string;
}
export async function verificarEmail(email:string) {
   const form = JSON.stringify({
    query:`
        query MyQuery {
          lojas {
            id
            emailDaLoja
            senha
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
    const emailExiste = lojas.find((loja:ILoja) => {
      return loja.emailDaLoja === email
    })
 return emailExiste
}