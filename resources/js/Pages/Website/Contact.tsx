import { ReactNode } from "react"
import Layout from "@/Layouts/Layout"

export default function Contact() {
    return (
        <div className="flex flex-col items-center">
            <img className="py-10" src={'img/contact-cover3.png'} width={1000} />
            <article className="max-w-3xl w-full px-4 pb-10 h-screen">
                <div className="text-left mb-4">
                    <h1 className="text-3xl font-bold pb-10">Contact</h1>
                    <div className="font-bold text-red-700">Contact</div>
                    <div className="grid grid-cols-2 font-medium">
                        <div>Mark Tourigny, President</div>
                        <a className="text-sky-600" href="mailto:Mark.Tourigny@gmail.com">mark.tourigny@gmail.com</a>
                    </div>
                    <div className="font-bold pt-5 text-red-700">Mailing Address</div>
                    <div className="font-medium">
                        <div>Jerome Outreach Society</div>
                        <div>495 West Georgia Street, #4756</div>
                        <div>Vancouver, B.C.</div>
                        <div>V6B 4A4</div>
                    </div>
                    <div className="font-bold pt-5 text-red-700">Phone</div>
                    <div className="font-medium">604-684-2139</div>
                </div>
            </article>
        </div>
    )
}

Contact.layout = (page: ReactNode) => <Layout children={<Contact />} />