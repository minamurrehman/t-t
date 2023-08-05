import React from 'react';
import Image from "next/image";
import styles from "../../pages/clients/clients.module.scss";
import Link from "next/link";

const ClientCard = ({item}) => {
    return (
        <div className="px-6">
            <div className="relative mx-auto" style={{
                width:item.width,
                height:item.height
            }}>
                <Image
                    src={item?.image}
                    alt="Image"
                    fill
                    className="max-h-[300px] absolute object-contain"
                />
            </div>
            <p className="mt-4 text-justify p-6">{item?.desc}</p>

                <Link className={`block bg-secondary px-4 py-2 rounded-md text-black w-full max-w-max mx-auto text-center`} href={item?.url}>
                    {item?.buttonText}
                </Link>

        </div>
    );
};

export default ClientCard;