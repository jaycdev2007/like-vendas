import './globals.css'

export const metadata = {
  title: 'LIKE VENDAS',
  description: "O Like Vendas é um site de controle de estoque desenvolvido por Òscar Jeremias, um jovem angolano de 16 anos. A plataforma foi criada para ajudar empresas a gerenciar suas vendas e estoque de forma eficiente. site apresenta uma interface amigável e fácil de usar, com recursos que permitem aos usuários registrar produtos, gerenciar entradas e saídas, monitorar níveis de estoque em tempo real e gerar relatórios de vendas e estoque. Em resumo, o Like Vendas é um site de controle de estoque criado por um jovem talentoso e empreendedor que tem como objetivo ajudar empresas a gerenciar suas vendas e estoque de forma eficiente e eficaz.",
  
}  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col justify-center items-center'>{children}</body>
    </html>
  )
}
