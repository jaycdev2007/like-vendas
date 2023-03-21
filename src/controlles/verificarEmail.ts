
export async function verificarEmail(email:string) {
    const form = `query MyQuery {
        lojas(where: {emailDaLoja: "${email}"}) {
          id
        }
      }`

    const res = await fetch(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`, {
        method: 'POST',
        body: form,
    })
   const data = await res.json()
   console.log(data)
  return data 
}