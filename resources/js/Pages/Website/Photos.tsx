import { ReactNode } from "react"
import Layout from "@/Layouts/Layout"

export default function Photos() {
    return (
        <div>Photos</div>
    )
}

Photos.layout = (page: ReactNode) => <Layout children={<Photos />} />