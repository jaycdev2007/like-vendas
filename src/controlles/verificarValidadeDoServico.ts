export function verificarValidadeDoServico(dataDeTermino:string) {
    const data = new Date()
    const newDataDeTermino = new Date(dataDeTermino)
    
    if(newDataDeTermino >= data) {
        return true
    }else {
        return false
    }
}