import { Logo } from "./logo"
import { ButtonSecond } from "./buttonSecond"

export function Header() {
    return (
        <header className="w-full p-3 flex items-center justify-between md:w-[80%] md:py-4">
            <Logo />
            <div className="flex flex-col items-end gap-3 text-xs md:text-xl">
              <ButtonSecond text="Volta para pagína inicial" url="/" />
            </div>
        </header>
    )
}