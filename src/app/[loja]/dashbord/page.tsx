"use client"
import { HeaderPageDashbord } from "@/components/headerPageDashbord"
import { MainPageDashbord } from "@/components/mainPageDashbord"
import { VerificarPage } from "@/components/verificarPage"

export default function Dashbord() {
    VerificarPage()
    return (
        <>
            <HeaderPageDashbord />
            <MainPageDashbord />
        </>
    )
}