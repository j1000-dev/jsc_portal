import { ReactNode } from "react"
import Banner from "./Banner"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({children}: {children: ReactNode}) {
    return (
        <div className="md:mx-auto overflow-auto py-10 h-screen">
            <div className="flex flex-col items-center py-3 justify-center border-t border-b border-gray-100">
                <Banner />
                <Navbar />
            </div>
            {children}
            <Footer />
        </div>
    )
}