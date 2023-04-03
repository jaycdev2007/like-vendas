"use client"
import { Button } from "./button";
import { TabelaDeProdutos } from "./tabelaDeProdutos";
import { useState, useEffect } from "react";
import { getProdutos } from "@/controlles/getProdutos";
import { Load } from "./load";

export function MainPageDashbord() {
    const [produtos,setProdutos] = useState<any>()
    useEffect(() => {
        const res1 = localStorage.getItem("loja")
        const loja = JSON.parse(`${res1}`)
        getProdutos(loja.emailDaLoja).then(res => {
        setProdutos(res)
    })
  },[])
    if(produtos === undefined) {
        return <Load />
    }
    return (
        <main className="w-full p-6 flex flex-col md:w-[80%] md:py-4">
            <h1 className="text-2xl pb-8 font-bold">Visão Geral</h1>
            <div className="p-6">
                <TabelaDeProdutos produtos={produtos} />
            </div>

            <div className="p-6 flex flex-col gap-10 text-xs items-end">
                <div>
                <Button text="Lista de Produtos" url="#" />
                </div>
                <div>
                <Button text="Novo Produtos" url="#" />
                </div>
                <div className="text-xs">
                <Button text="Tirar Relátorio dos ultimos 30 dias" url="#" />
                </div>
            </div>

        </main>
    )
}