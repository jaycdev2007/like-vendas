import Link from "next/link"

type ButtonType = {
    text: string,
    url: string
}

export function ButtonSecond({ text, url}: ButtonType) {
    return (
       <Link href={url} className="py-2 px-6 border border-t-0 border-l-0 border-r-0 border-b-1 rounded-lg boder-blue-500 hover:bg-blue-500 hover:text-white transition-all">
         {text} 
       </Link>
    )
}