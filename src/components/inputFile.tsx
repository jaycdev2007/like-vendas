"use client"
import { FileArrowUp,Spinner,Check } from "phosphor-react"
import { useState } from "react"

type InputType = {
    setFile: (p:any) => void
}

export function InputFile({ setFile }: InputType) {
    const [load,setLoad] = useState<boolean>(false)
    const [check,setCheck] = useState(false)
    return (
        <div className="w-[243px] flex flex-col justify-center items-start">
            <p className="mb-2">Logo da loja</p>
            <div className="flex items-end gap-3">
            <label htmlFor="ar" className="hover:text-blue-500">
                <FileArrowUp width={64} height={64} />
            </label>
            { load === true ? <Spinner size={32} className="animate-spin" /> : check === true && <Check size={32} className="text-green-500" />}
            </div>
            <input type="file" name="ar" id="ar" className="hidden" onChange={async(e) => {
                if(e.target.files !== null) {
                    setLoad(true)
                    const form = new FormData();

                   form.set('fileUpload', (e.target.files[0]));

                    const res = await fetch(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}/upload`, {
                        method: 'POST',
                        headers: {
                          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_ASSET_TOKEN}`,
                        },
                        body: form,
                      })
                      const data = await res.json()

                      setFile(data.id)
                      setLoad(false)
                      setCheck(true)
                }
            }} />
        </div>
    )
}