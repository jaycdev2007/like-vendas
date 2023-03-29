import { Logo } from "./logo"
import { UserCircle } from "phosphor-react"
import Link from "next/link"

export function HeaderPageDashbord() {
    return (
        <header className="w-full p-3 flex items-center justify-between md:w-[80%] md:py-4">
            <Logo />
            <Link href="#" className="flex flex-col items-end gap-3 hover:text-blue-500">
                <UserCircle size={48}/>
            </Link>
        </header>
    )
}