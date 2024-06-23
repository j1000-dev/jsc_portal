import { ReactNode } from "react"
import Layout from "@/Layouts/Layout"

export default function Contact() {
    return (
        <div className="flex flex-col items-center">
            <article className="max-w-3xl w-full px-4 pt-10 h-screen">
                <div className="text-left mb-4">
                    <h1 className="text-3xl font-bold pb-10">Contact</h1>
                    <div className="font-bold">Contact</div>
                    <div className="grid grid-cols-2">
                        <div>Mark Tourigny, President</div>
                        <div>Mark.Tourigny@gmail.com</div>
                    </div>
                    <div className="font-bold pt-5">Mailing Address</div>
                    <div>
                        <div>Jerome Outreach Society</div>
                        <div>495 West Georgia Street, #4756</div>
                        <div>Vancouver, B.C.</div>
                        <div>V6B 4A4</div>
                    </div>
                    <div className="font-bold pt-5">Phone</div>
                    <div>604-684-2139</div>
                </div>
            </article>
        </div>
    )
}

Contact.layout = (page: ReactNode) => <Layout children={<Contact />} />