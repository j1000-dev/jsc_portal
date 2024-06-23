import React from "react"
import { ReactNode } from "react"
import Layout from "@/Layouts/Layout"

export default function Directors() {
    const directors = [
        {name: "Dennis Drummond", title: "Secretary"},
        {name: "Brittany Parker", title: "Program Coordinator", bio: "/storage/pdf/fraser-brittany.pdf"},
        {name: "Valerie Jerome", title: "Olympian, Founding Director"},
        {name: "Harp Sohi", title: "VSB District Athletic Coordinator"},
        {name: "Mark Tourigny", title: "Founding and Current President, Treasurer", bio: "/storage/pdf/mark-tourigny.pdf"},
        {name: "Brit Townsend", title: "Olympian, SFU Head Coach", bio: "/storage/pdf/brit-townsend.pdf"},
        {name: "Tammy Wirick", title: "Healthy Schools Program Consultant, Burnaby School Board"}
    ];
    const honoraryDirectors = [
        {name: "Diane Clement", title: "Olympian, Queen Jubilee medal, Author", bio: "/storage/pdf/diane-clement.pdf"},
        {name: "Dr. Douglas Clement", title: "Olympian, Order of Canada, Heart & Stroke Chairman", bio: "/storage/pdf/douglas-clement.pdf"}
    ];
    return (
        <div className="flex flex-col items-center h-full">
            <article className="max-w-3xl w-full px-4">
                <div className="text-left mb-4">
                    <h1 className="text-3xl font-bold pt-10 pb-5">Directors</h1>
                    <h3 className="font-bold py-2">2018 Volunteer Board Directors</h3>
                    <div className="grid grid-cols-3 pb-5">
                        {Object.values(directors).map((dir, index) => (
                            <React.Fragment key={index}>
                                <div className="font-medium col-span-1">{dir.name}</div>
                                <div className="col-span-2">
                                    {dir.title} 
                                    {dir.bio && 
                                        <a href={dir.bio} target="_blank" className="underline text-blue-900 px-2">Bio</a>}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                    <h3 className="font-bold py-2">Honorary Founding Directors</h3>
                    <div className="grid grid-cols-3">
                        {Object.values(honoraryDirectors).map((dir, index) => (
                            <React.Fragment key={index}>
                                <div className="font-medium col-span-1">{dir.name}</div>
                                <div className="col-span-2">
                                    {dir.title}
                                    {dir.bio && 
                                        <a href={dir.bio} target="_blank" className="underline text-blue-900 px-2">Bio</a>}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    )
}

Directors.layout = (page: ReactNode) => <Layout children={<Directors />} />