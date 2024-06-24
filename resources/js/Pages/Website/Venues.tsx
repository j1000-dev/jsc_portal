import { ReactNode, useState, useEffect } from "react"
import axios from "axios";
import Layout from "@/Layouts/Layout"

interface ConfigData {
    [key: string]: string[]; 
}
export default function Venues() {
    const [venues, setVenues] = useState<ConfigData | null>(null);
    useEffect(() => {
        axios.get('/api/config-data', {
            params: {
                'configFile': 'venues'
            }
        }).then((resp) => {
            setVenues(resp.data.config)
        })
    }, []);
    return (
        <div className="flex flex-col items-center">
            <img className="py-10" src="/img/venues-cover.jpg" width={1000} />
            <article className="max-w-3xl w-full px-4">
                <div className="text-left mb-4">
                    <h1 className="text-3xl font-bold">Venues</h1>
                </div>
                <div className="container mx-auto">
                    <h1 className="heading">Sports Saves Lives</h1>
                    <h2 className="text-center font-bold py-5">INNER CITY COMMUNITY OUTREACH PROGRAM</h2>
                    {
                        venues && Object.keys(venues).map((type) => (
                            <div key={type}>
                                <h1 className="font-bold py-2">{type}</h1>
                                {venues[type].map((venue: string, idx: number) => (
                                    <p className="font-light" key={idx}>{venue}</p>
                                ))}
                                <br />
                            </div>
                        ))
                    }
                </div>
            </article>
        </div>
    )
}

Venues.layout = (page: ReactNode) => <Layout children={<Venues />} />