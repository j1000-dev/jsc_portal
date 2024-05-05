import { ReactNode } from "react"
import Layout from "../../Layouts/Layout"
import Login from "../Auth/Login"

export default function Registry() {
    return (
        <div className="flex flex-col items-center h-full">
            <article className="max-w-3xl w-full px-4">
                <h1 className="text-3xl font-bold text-left p-5">Coach Registry</h1>
                <div className="section">
                    <Login />
                </div>
            </article>
        </div>
    )
}

Registry.layout = (page: ReactNode) => <Layout children={<Registry />} />