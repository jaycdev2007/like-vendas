export async function getProdutos(email:string) {
    const form = JSON.stringify({
        query: `
            query MyQuery {
                produtos {
                idProduto
                nomeDoProduto
                quantidadeRestante
                quantidadeVendida
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
      
      const produtos = data.data.produtos.filter((produto:any) => {
        return produto.emailDaLoja === email
      })
      return produtos
}