import { ReactNode, useState, useEffect } from "react"
import Layout from "@/Layouts/Layout"
import axios from "axios";
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '450px',
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    background: '#364d79'
};

export default function Praise() {
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        axios.get('/api/config-data', {params: {'configFile': 'praise'}})
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
                    <h1 className="text-3xl font-bold">Commendations</h1>
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
                       Object.entries(cards).map(([key, value]) => (
                            <div key={key} style={contentStyle}>
                                <div style={contentStyle} className="flex flex-col justify-center rounded-md">
                                    <div className="text-2xl p-5 font-bold tracking-wider">{key}</div>
                                    <div className="m-10 text-xl font-semi-bold italic">{value}</div>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </article>
        </div>
    )
}

Praise.layout = (page: ReactNode) => <Layout children={page} />