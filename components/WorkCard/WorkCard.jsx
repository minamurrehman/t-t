import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {BsGlobe, BsInstagram, BsTiktok, BsYoutube} from "react-icons/bs";

const WorkCard = ({item}) => {
    return (
        <div className="px-6">
            <Image
                src={item?.image}
                alt="Image"
                width={600}
                height={400}
                className="max-h-[300px] object-contain"
            />
            <p className="mt-4 text-justify p-6">{item?.text}</p>
            <div className="flex gap-4 px-6 justify-center">
                {item?.social?.map((sc) => {
                    if (sc.type === "website") {
                        return (
                            <Link href={sc.url}>
                                <BsGlobe size={24} color="#03eeca" />
                            </Link>
                        );
                    }
                    if (sc.type === "youtube") {
                        return (
                            <Link href={sc.url}>
                                <BsYoutube size={24} color="#03eeca" />
                            </Link>
                        );
                    }
                    if (sc.type === "tiktok") {
                        return (
                            <Link href={sc.url}>
                                <BsTiktok size={24} color="#03eeca" />
                            </Link>
                        );
                    }
                    if (sc.type === "instagram") {
                        return (
                            <Link href={sc.url}>
                                <BsInstagram size={24} color="#03eeca" />
                            </Link>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default WorkCard;