"use client"
import { HeaderPageDashbord } from "@/components/headerPageDashbord"
import { MainPageDashbord } from "@/components/mainPageDashbord"
import { verificarPage } from "@/components/verificarPage"

export default function Dashbord() {
    verificarPage()
    return (
        <>
            <HeaderPageDashbord />
            <MainPageDashbord />
        </>
    )
}