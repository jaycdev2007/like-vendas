import { Header1 } from "@/components/header1"
import { MainPageListLojas } from "@/components/mainPageListLojas"
import { ListLojasAPI } from "@/controlles/listLojas"

async function getData() {
    const res = await ListLojasAPI()
    return res
}
export default async function ListLojas() {
    const data = await getData()
    return (
        <>
                <Header1 />
                <MainPageListLojas data={data} />
        </>
    )
}