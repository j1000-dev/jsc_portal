import { ReactNode } from "react"
import Layout from "@/Layouts/Layout"

export default function Venues() {
    return (
        <div>Venues</div>
    )
}

Venues.layout = (page: ReactNode) => <Layout children={<Venues />} />