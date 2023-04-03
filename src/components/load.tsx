import { Spinner} from "phosphor-react"

export function Load() {
    return (
        <div className="min-h-[70vh] min-w-full flex items-center justify-center gap-2">
            <Spinner size={32} className="animate-spin" />
            <div>
                Carregando...
            </div>
        </div>
    )
}