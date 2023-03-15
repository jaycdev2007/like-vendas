import Link from "next/link";
import foto from "../assests/logoDoSite.png";


export function Logo() {
    return (
        <Link href="/">
            <img src={foto.src} width="150px" height="50px" />
        </Link>
    )
}