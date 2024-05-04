import { ReactNode } from "react"
import Layout from "../../Layouts/Layout"

export default function Directors() {
    return (
        <div>Directors</div>
    )
}

Directors.layout = (page: ReactNode) => <Layout children={<Directors />} />