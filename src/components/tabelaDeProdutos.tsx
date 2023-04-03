import Link from "next/link"

export function TabelaDeProdutos({ produtos }: any) {
    const data = produtos

    console.log(produtos)
     return (
        <div className="flex flex-col bg-slate-100 rounded-lg min-h-[40vh]">
            <div className="bg-slate-300 p-4 flex justify-between text-xs gap-3">
                <div className="w-1/3 text-center">Produtos</div>
                <div className="w-1/3 text-center">Restou</div>
                <div className="w-1/3 text-center">Vendeu-se</div>
            </div>
            {
                data === undefined ? <div className="min-w-full min-h-[30vh] flex justify-center items-center">Não tem nunhum produto cadastrado</div> :
                data.map((produto:any) => {
                    return <Link key={produto.id} href="#" className="bg-slate-200 p-4 flex justify-between text-xs gap-3 hover:text-white hover:bg-blue-500 transition-all">
                    <div className="w-1/3 text-center">{produto.nomeDoProduto}</div>
                    <div className="w-1/3 text-center">{produto.quantidadeRestante}</div>
                    <div className="w-1/3 text-center">{produto.quantidadeVendida}</div>
                </Link>
                })
            }
        </div>
     )
}
