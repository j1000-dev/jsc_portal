import { ReactNode, useState, useEffect } from "react"
import Layout from "@/Layouts/Layout"
import { Image } from "antd";

export default function Photos() {
    const [images, setImages] = useState<string[]>([]);


    useEffect(() => {
        const imageImports = import.meta.glob('/public/img/photos/*.{png,jpg,jpeg,svg}');
        const images = Object.values(imageImports).map((val: any) => {
        return val.name.replace("/public", "")
        })
        setImages(images)
      }, []);

      return (
        <div className="flex flex-col items-center">
            <article className="max-w-3xl w-full pt-10">
            <div className="text-left mb-4">
                <h1 className="text-3xl font-bold">Photos</h1>
            </div>
            <div className="grid grid-cols-3 gap-4"> {/* Adjust grid columns and gap as needed */}
                <Image.PreviewGroup>
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            width="100%" // Ensure images fill the width of their container
                            style={{ objectFit: 'cover', aspectRatio: '1/1' }} // Ensure images maintain aspect ratio and cover the container
                        />
                    ))}               
                </Image.PreviewGroup>
            </div>
            </article>
        </div>
    );
}

Photos.layout = (page: ReactNode) => <Layout children={page} />