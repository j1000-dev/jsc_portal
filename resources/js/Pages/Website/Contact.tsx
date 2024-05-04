import { ReactNode } from "react"
import Layout from "../../Layouts/Layout"

export default function Contact() {
    return (
        <div>Contact</div>
    )
}

Contact.layout = (page: ReactNode) => <Layout children={<Contact />} />