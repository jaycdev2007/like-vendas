"use client"
import './globals.css'
import { ContextLoja } from "../contexts/contextLoja"
import { useState } from "react"
import { ILoja } from '@/entities/loja'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loja,setLoja] = useState({})
 
  return (
    <html lang="pt">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8601341061910635"
     crossOrigin="anonymous"></script>
     <link rel="icon" type="image/x-icon" href="https://media.graphassets.com/output=format:jpg/00kwLz9HR6qzC4G7ojl9" />
      </head>
      <ContextLoja.Provider value={{loja,setLoja}}>
       <body className='flex flex-col justify-center items-center'>{children}</body>
      </ContextLoja.Provider>
    </html>
  )
}
