import Layout from "../../Layouts/Layout"
import { ReactNode } from 'react';
import { Link } from "@inertiajs/react";

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <img className="py-10" src="/img/banner.png" width={1100} />
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <article className="max-w-3xl w-full px-4">
                        <div className="text-left mb-4">
                            <h1 className="text-3xl font-bold">Home</h1>
                        </div>
                        <div className="mx-auto">
                            <h1 className="heading">Sports Saves Lives</h1>
                            <h1 className="heading">INNER CITY SPORTS OUTREACH PROGRAM</h1>
                            <div className="section leading-loose">
                                <strong>Jerome Outreach Society</strong> hires professional coaches, university varsity,
                                and senior high school athletes to coach at Greater Vancouver area low income schools:
                                basketball, track and field, soccer, cross country running, ultimate frisbee, hip-hop dance.
                                There is <strong>no cost</strong> to the schools and kids. Forty JOS coaches (some Olympians) will
                                conduct training sessions at thirty-five Vancouver, Burnaby, and Surrey locations in 2024.
                                <strong> Over 2000 kids</strong> will participate, most from socially and economically challenged
                                families.
                            </div>
                            <div className="section leading-loose">
                                <strong>Sports saves lives</strong> is our mantra; getting at-risk kids hooked on sports is our mission.
                                From sports comes discipline, health, mentorship, leadership, confidence….life skills
                                that help these kids navigate their way through the perils of the inner city.
                            </div>
                            <div className="section leading-loose">
                                Jerome Outreach is named in honour of <Link href="/harry-jerome" className="text-sky-600 font-bold hover:underline decoration-sky-600">Harry Winston Jerome </Link>
                                (1940 – 1982), a talented multi-sport athlete who overcame racial and economic hardships to become one of the top sprinters of his time and one of the best
                                athletes ever to represent Canada. Harry became a mentor to youth and an inspiration to all Canadians. He received the Order of
                                Canada and was named British Columbia’s Athlete of the Century.
                            </div>
                            <div className="section">
                                <div className="aspect-w-16 aspect-h-9">
                                    <iframe
                                        className="w-full"
                                        height={500}
                                        src="https://www.youtube.com/embed/-k6G3ROQq0M?si=-GgdyWwuzPBKzwoM"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                            </div>
                            <div className="section leading-loose">
                                Jerome Outreach programs are customized to meet any school’s requirements:
                            </div>
                            <div className="section leading-loose">
                                <ul className="list-disc mx-10">
                                    <li>Provide coaches where no program exists,</li>
                                    <li>Provide junior coaches to assist with existing programs, or</li>
                                    <li>Provide specific technical skills to fill in the gaps where expertise is lacking</li>
                                </ul>
                            </div>
                            <div className="section leading-loose">
                                Jerome Outreach Society has been providing its outreach athletic programs since 2007. JOS is indebted to founding directors
                                Dr. Doug and Diane Clement of the Achilles Society and to Dennis Drummond and Paul Wong of the Vancouver Chinatown Lions Club.
                                For information about Jerome Outreach Society, contact:
                            </div>
                            <div className="section leading-loose">
                                <p><strong>Mark Tourigny</strong></p>
                                <p>Founding Director and President, Jerome Outreach Society</p>
                                604-684-2139 | <a href="mailto:mark.tourigny@gmail.com" className="hover:underline text-sky-600 decoration-sky-600">mark.tourigny@gmail.com</a> | <Link href="/" className="hover:underline text-sky-600 decoration-sky-600">www.jeromeoutreach.com</Link><br></br>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-span-1">
                    <div className="flex flex-col items-center justify-center">
                        <p className="tracking-wide font-medium text-stone-500 py-2">SPONSORS</p>
                        <img className="py-4" src="img/gordon-nelson.png" width={150} />
                        <img className="py-4" src="img/bc.png" width={150} />
                        <img className="py-4" src="img/lions-club.png" width={150} />
                        <img className="py-4" src="img/peterson.png" width={150} />
                        <img className="py-4" src="img/telus.png" width={150} />
                        <img className="py-4" src="img/hamber.png" width={150} />
                        <img className="py-4" src="img/vancity.png" width={150} />
                        <img className="py-4" src="img/achilles-international.png" width={150} />
                    </div>
                </div>
            </div>
        </div>
    )
}

Home.layout = (page: ReactNode) => <Layout children={page} />