import { ReactNode } from "react"
import { BackwardOutlined } from "@ant-design/icons";
import { Image, Card } from "antd";
import Layout from "@/Layouts/Layout"
import { Link } from "@inertiajs/inertia-react";
import { Coach } from "@/types/Coach";

export default function CoachesDetail({coach}: Coach) {
    return (
        <div className="flex flex-col items-center">
                <Link href="/coaches" className="text-xl font-bold p-3">
                    <span className="text-xl text-red-700 pr-2"><BackwardOutlined /></span>Back
                </Link>
                <div className="bg-slate-200 rounded-md p-5 mb-5">
                    <div className="grid grid-cols-1 gap-5">
                        <div className="text-3xl font-bold text-center">{coach.name}</div>
                        <div className="flex justify-center">
                            <Image
                                className="w-50 rounded-md"
                                width={300}
                                src={coach.image_path}
                            />
                        </div>
                        <div className="container mx-auto text-center pb-5">
                            <span className="font-semibold">School: </span>{coach.school_name}<br />
                            {coach.program && (
                                <><span className="font-semibold">Program: </span>{coach.program}<br /></>
                            )}
                            {coach.faculty && (
                                <><span className="font-semibold">Faculty: </span>{coach.faculty}<br /></>
                            )}
                            {coach.university_bio_link && (
                                <>
                                    <span className="font-semibold">University Biography: </span>
                                        <a className="text-blue-900 hover:underline" href={coach.university_bio_link} target="_blank">{
                                            coach.university_bio_link}
                                        </a>
                                    <br />
                                </>
                            )}
                            {coach.biography && (
                                <div className="mx-auto p-2" style={{ maxWidth: 700 }}>
                                    <Card className="bg-slate-100">
                                        <div className="p-3">
                                            <p>{coach.biography}</p>
                                        </div>
                                    </Card>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
        </div>
    
    )
}

CoachesDetail.layout = (page: ReactNode) => <Layout children={page} />