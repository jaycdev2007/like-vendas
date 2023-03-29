"use client"
import { Button } from "./button";
import { TabelaDeProdutos } from "./tabelaDeProdutos";
import { getDataLoja } from "./getDataLoja"
import { useState, useEffect } from "react";
import { getProdutos } from "@/controlles/getProdutos";

export function MainPageDashbord() {
    const loja = getDataLoja()
    const [produtos,setProdutos] = useState<any>()
     
    useEffect(() => {
        console.log(loja.emailDaLoja)
        getProdutos(loja.emailDaLoja).then(res => {
            setProdutos(res)
        })
    },[])

    return (
        <main className="w-full p-6 flex flex-col md:w-[80%] md:py-4">
            <h1 className="text-2xl pb-8 font-bold">Visão Geral</h1>
            <div className="p-6">
                <TabelaDeProdutos produtos={produtos} />
            </div>

            <div className="p-6 flex flex-col gap-10 text-xs items-end">
                <div>
                <Button text="Lista de Produtos" url="/protudos" />
                </div>
                <div>
                <Button text="Novo Produtos" url="/create-produto" />
                </div>
                <div>
                <Button text="Tirar Relátorio dos ultimos 30 dias" url="#" />
                </div>
            </div>

        </main>
    )
}