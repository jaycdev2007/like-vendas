import { Button } from "./button"
import { Svg1 } from "./svg1"

export function Main1() {
    return (
        <main className="h-[90vh] w-[90vw] flex p-3 flex-col items-center gap-4 py-12 ">
            <div className="flex justify-center flex-col items-center md:flex-row md:gap-20 md:pb-32">
                <div className="flex flex-col items-center gap-8">
                    <h1 className="text-2xl text-center">O melhor site de controlo <br /> de estoque para a sua loja</h1>
                    <p className="hidden text-xl pb-20 md:block">Experimente 30 dias grátis</p>
                </div>
                <Svg1 />
            </div>
            <p className="text-xl pb-20 md:hidden">Experimente 30 dias grátis</p>
            <Button text="Experimente já" url="/login" />
        </main>
    )
}