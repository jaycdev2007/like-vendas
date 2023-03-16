import { Header1 } from "@/components/header1"
import { MainPageLogin } from "@/components/mainPageLogin"

export default function Cadastro() {
    return (
        <>
            <Header1 />
            <MainPageLogin heading="Cadastro" paragrh="Fazer login" url="/login" isLogin={false} />
        </>
    )
}