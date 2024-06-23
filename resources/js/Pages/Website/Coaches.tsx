import { ReactNode, useState, useEffect } from "react"
import axios from "axios";
import Layout from "@/Layouts/Layout"
import { Link } from '@inertiajs/inertia-react';
import { Coach } from "@/types/Coach";

type Coaches = Coach[]

export default function Coaches() {
    const [coaches, setCoaches] = useState<Coaches | null>(null);
    
    useEffect(() => {
        axios.get('/api/coaches').then((resp) => setCoaches(resp.data.coaches))
    }, []);

    return (
        <div className="flex flex-col items-center p-5">
            <img className="py-10" src="/img/coaches-cover.jpg" width={750} />
            <article className="max-w-3xl w-full px-4">
                <div className="text-left mb-4">
                    <h1 className="text-3xl font-bold pb-3">Coaches</h1>
                    <h2 className="font-bold">(click on the coach's name for a bio)</h2>
                </div>
                <div className="mx-auto">
                    {
                        coaches && coaches.map((c, index) => (
                            <div key={index}>
                                <Link href={`/coaches/${c.id}`} className="grid grid-cols-2 font-semi-bold hover:underline decoration-sky-600">
                                    <div className="text-sky-600 font-bold">{c.formattedName}</div>
                                    <div className="text-sky-600">{c.user_info.one_line_bio}</div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </article>
        </div>
                
    )
}

Coaches.layout = (page: ReactNode) => <Layout children={<Coaches />} />