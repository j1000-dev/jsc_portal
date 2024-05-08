import { ReactNode } from "react"
import Layout from "../../Layouts/Layout"
import Login from "../Auth/Login"

export default function Registry() {
    return (
        <div className="flex flex-col items-center h-full">
            <article className="max-w-3xl w-full px-4">
                <div className="section">
                    <Login />
                </div>
            </article>
        </div>
    )
}

Registry.layout = (page: ReactNode) => <Layout children={<Registry />} />