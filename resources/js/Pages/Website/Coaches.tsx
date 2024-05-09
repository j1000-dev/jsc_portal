import { ReactNode } from "react"
import Layout from "@/Layouts/Layout"

export default function Coaches() {
    return (
        <div>Coaches TBD NEEDS TO FETCH FROM DB</div>
    )
}

Coaches.layout = (page: ReactNode) => <Layout children={<Coaches />} />