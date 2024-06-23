import { ReactNode, useState, useEffect } from "react"
import Layout from "@/Layouts/Layout"
import axios from "axios";
import { Carousel, Image } from 'antd';
import { Card } from "@/types/Card";

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '450px',
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    background: '#364d79'
};

export default function News() {
    const [cards, setCards] = useState<Card[]>([]);
    
    useEffect(() => {
        axios.get('/api/config-data', {params: {'configFile': 'news'}})
            .then((resp) => setCards(resp.data.config))
    }, []);

    const SlickButtonFix = (
        props: {
          children?: JSX.Element;
          slideCount?: number;
          currentSlide?: number;
        }
      ) => {
        const { children, currentSlide, slideCount, ...others } = props;
        return (
          <span {...others}>
            {children}
          </span>
        );
      };

    return (
        <div className="flex flex-col items-center">
            <article className="max-w-3xl w-full px-4 pt-10">
                <div className="text-left mb-4">
                    <h1 className="text-3xl font-bold">News</h1>
                </div>
                <Carousel
                    arrows
                    nextArrow={
                        <SlickButtonFix>
                        </SlickButtonFix>
                    }
                    prevArrow={
                        <SlickButtonFix>
                        </SlickButtonFix>
                    }
                >
                    {
                       cards.map((value, key) => (
                            <div key={key} style={contentStyle}>
                                <div style={contentStyle} className="flex flex-col justify-center rounded-md">
                                    <div className="my-5 text-xl font-bold">{value.title}</div>
                                    <div className="text-sm">{value.date}</div>
                                    <div className="text-md font-semibold italic m-5 tracking-wide">{value.content}</div>
                                    {value.link && <a href={value.link} target="_blank" className="text-slate-200 underline">entire article</a>}
                                    {value.image && <Image width={100} src={value.image} />}
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </article>
        </div>
    )
}

News.layout = (page: ReactNode) => <Layout children={page} />