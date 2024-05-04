import { ReactNode } from "react"
import Layout from "../../Layouts/Layout"
import { Link } from "@inertiajs/react"
import Login from "../Auth/Login"

export default function Register() {
    return (
        <div className="flex flex-col items-center h-full">
            <article className="max-w-3xl w-full px-4">
                <h1 className="text-3xl font-bold text-left p-5 text-green-700">Register</h1>
                <div className="section">
                    <div className="text-2xl font-bold tracking-wide py-2">Coach Registry</div>
                    <Login />
                </div>
            </article>
        </div>
    )
}

Register.layout = (page: ReactNode) => <Layout children={<Register />} />