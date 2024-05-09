import { ReactNode } from "react"
import Layout from "@/Layouts/Layout"

export default function News() {
    return (
        <div>News</div>
    )
}

News.layout = (page: ReactNode) => <Layout children={<News />} />