import { ReactNode } from "react"
import Layout from "@/Layouts/Layout"

export default function Praise() {
    return (
        <div>Praise</div>
    )
}

Praise.layout = (page: ReactNode) => <Layout children={<Praise />} />