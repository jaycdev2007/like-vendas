
export async function actualizarServico(id:string) {
    const date = new Date()
    const diasDeServico = 30
    date.setDate(date.getDate() + diasDeServico)

    const form = JSON.stringify({
        query:`            
            mutation MyMutation {
                updateLoja(data: {dataDeIncerramentoDoServico:"${date}"}, where: {id:"${id}"}){
                    id
                    emailDaLoja
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

}