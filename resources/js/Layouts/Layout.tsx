import { ReactNode } from "react"
import Banner from "../Components/Banner"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

export default function Layout({children}: {children: ReactNode}) {
    return (
        <div className="md:mx-auto overflow-auto pt-10 h-screen">
            <div className="flex flex-col items-center py-3 justify-center border-t border-b border-gray-100">
                <Banner />
                <Navbar />
            </div>
            {children}
            <Footer />
        </div>
    )
}