import { ReactNode } from "react"
import Layout from "../../Layouts/Layout"

export default function HarryJerome() {
    return (
        <div className="flex flex-col items-center">
            <img className="py-10" src="/img/harry-jerome.jpeg" width={750} />
            <article className="max-w-3xl w-full px-4">
                <div className="text-left mb-4">
                    <h1 className="text-3xl font-bold">Harry Jerome</h1>
                </div>
                <div className="mx-auto">
                    <h1 className="heading">Sports Saves Lives</h1>
                    <div className="section leading-loose">
                        For a more detailed and intimate biography by Valerie Jerome, <a className="text-sky-600 hover:underline decoration-sky-600" href="/storage/valeries-bio-for-harry-jerome.pdf" target="_blank">click here</a>.
                    </div>
                    <div className="section leading-loose">
                        Harry Winston Jerome was born on September 30, 1940 in Prince Albert, Sask., and moved
                        with his family to British Columbia and the Vancouver area in 1951.
                    </div>
                    <div className="section leading-loose">
                        <img src="/img/harry-jerome-2.png" className="float-right px-2" width={300} />
                        <p className="flex-grow">
                            He was a talented athlete who excelled in a variety of sports,
                            including baseball and football. But exceptional speed was his
                            trademark and special gift, propelling him not only to success on the
                            gridiron and baseball diamond, but also to the pinnacle of international athletics
                            competition as one of the top sprinters of the day and one of the best to ever represent Canada.
                        </p>
                    </div>
                    <div className="section leading-loose">
                        <img src="/img/harry-jerome-3.png" width={250} className="float-left px-2" />
                        <p>
                            His accomplishments came despite his enduring considerable racism as a youngster and as a competitor —
                            testament to his courage and will to succeed despite barriers placed in his path.
                        </p>
                        <p>
                            At age 18 the North Vancouver sprinter broke the 31-year-old Canadian record for the 220-yard sprint – held by 1928
                            double Olympic gold medallist Percy Williams. A year later he emerged as an international sensation by
                            equaling the world record for 100 metres by clocking 10.0 seconds at the Canadian Olympic Trials in Saskatoon.
                            That effort marked the young Canadian as one of the sprinters to watch at the upcoming 1960 Summer Olympic Games in Rome.
                        </p>
                    </div>
                    <div className="section leading-loose">
                        <img src="/img/harry-jerome-4.png" width={250} className="float-right px-2" />
                        <p>
                            But what should have been a promising Olympic debut for Jerome became instead the first of many
                            difficult trials that served as a test of the athlete’s personal motto: Never Give Up. Jerome
                            pulled a muscle in the 100-metre semi-finals in Rome and was out of the competition. Two years later,
                            at the 1962 British Empire and Commonwealth Games in Perth, Australia, world record holder Jerome
                            pulled up lame and finished last in the 100-yard final. The media lambasted him as “a quitter” even
                            as tests confirmed he had suffered severely torn left thigh muscles that would keep him out of
                            competition for all of 1963, with a possible prognosis of never again being able to compete.
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="/img/harry-jerome-5.png" width={200} className="" />
                        <img src="/img/harry-jerome-6.png" width={425} className="" />
                    </div>
                    <div className="section leading-loose">
                        <p>
                            He returned, however, in 1964 and was finally able to reap the benefit of his work,
                            tenacity and considerable talent. At the Summer Olympics in Tokyo Jerome earned a bronze
                            medal in the 100-metre final, rightfully earning his spot on the Olympic podium and a
                            respected place among the ranks of the world’s fastest men. Two days later he finished fourth
                            in the 200 metres, confirming his place among the great sprinters of his day while finally
                            earning some grudging respect from Canadian media that seemed to relish in judging him harshly.
                        </p>
                        <img className="mx-auto pt-5" src="img/harry-jerome-7.png" width={500} />
                    </div>
                    <div className="section leading-loose">
                        <p>
                            Two years later Jerome won the 100 yards final at the 1966 British Commonwealth Games in
                            Jamaica, his first gold medal at a major international Games. That year he also set a world
                            record of 9.1 seconds over 100 yards. In 1967 he also took gold at the Pan-American Games.
                        </p>
                    </div>
                    <div className="section leading-loose">
                        <p>
                            In 1968 he represented Canada at his third Olympic Games – an extraordinary feat in itself
                            given that longevity in the sport was not what doctors were predicting when he suffered his
                            first major injury back in 1960. He finished seventh in the Olympic final at Mexico City,
                            confirming that despite the array of physical troubles and negative press that had plagued
                            him over the years, he never gave up.
                        </p>
                        <img src="/img/harry-jerome-8.png" className="mx-auto w-96 h-96" />
                    </div>
                    <div className="section leading-loose">
                        <p>
                            Harry Jerome retired from international competition at the end of the 1968 season, ending
                            a career that included stints as the world’s fastest man in tying the 100 yards world record
                            of 9.3 seconds in 1960. Two years later he lowered it to 9.2 in a memorable day at Vancouver’s
                            Empire Stadium. In 1966 he improved again upon that mark by running 9.1. During his career
                            he also held the world indoor mark for 60 yards and ran the anchor leg for his University
                            of Oregon relay team that set a world mark in the 4×110-yard relay.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img src="/img/harry-jerome-10.png" className="w-80 h-96" />
                        <img src="/img/harry-jerome-9.png" className="h-96" />
                    </div>
                    <div className="section leading-loose">
                        <p>
                            He remained a mentor and inspiration for Canadians, working in the Federal Ministry of Sport
                            and, later, developing the B.C. Premier’s Sport Awards Program to encourage young people to
                            become active and strive for their own athletic dreams. He received the Order of Canada in 1971
                            and was named British Columbia’s Athlete of the Century.  Harry Jerome died suddenly from a
                            brain aneurysm on December 7, 1982, at age 42.
                        </p>
                    </div>
                    <img className="mx-auto" src="img/harry-jerome-11.png" width={300} />
                    <div className="section leading-loose">
                        <p>
                            The Harry Jerome International Track Classic is held annually in honour of Harry Jerome,
                            whose talent and tenacity on and off the track inspired a generation of Canadians to
                            “never give up” in their own endeavours. His legacy of athletic excellence and commitment
                            to youth and sport remain pillars of motivation and inspiration today.
                        </p>
                    </div>
                </div>
            </article>
        </div>
    )
}

HarryJerome.layout = (page: ReactNode) => <Layout children={<HarryJerome />} />