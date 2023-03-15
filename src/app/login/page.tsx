import { Header1 } from "@/components/header1"
import { MainPageLogin } from "@/components/mainPageLogin"

export default function Login() {
    return (
        <>
            <Header1 />
            <MainPageLogin heading="Login" paragrh="Criar conta" url="/cadastro" isLogin={true} />
        </>
    )
}