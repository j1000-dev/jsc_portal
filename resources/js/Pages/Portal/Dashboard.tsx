import { ReactNode } from "react"
import PortalNavbar from "@/Layouts/PortalNavbar";

export default function Dashboard() {
    return (
        <div>Dashboard</div>
    )
}


Dashboard.layout = (page: ReactNode) => <PortalNavbar children={<Dashboard />} type="Admin Dashboard" />