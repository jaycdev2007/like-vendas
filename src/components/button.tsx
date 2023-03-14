import Link from "next/link"

type ButtonType = {
    text: string | "",
    url: string,
}

export function Button({ text,url}: ButtonType) {
    return (
      <Link href={url}  className="py-2 px-6 rounded-lg bg-blue-500 text-white hover:text-black hover:bg-white transition-all" >{text}</Link>
    )
}