import { Category } from '@/types/category';
import Image from 'next/image';
import React from 'react';


const data = [
    {
        title: "Televisions",
        id: 1,
        img: "/images/categories/categories-01.png",
    },
    {
        title: "Laptop & PC",
        id: 2,
        img: "/images/categories/categories-02.png",
    },
    {
        title: "Mobile & Tablets",
        id: 3,
        img: "/images/categories/categories-03.png",
    },
    {
        title: "Games & Videos",
        id: 4,
        img: "/images/categories/categories-04.png",
    },
    {
        title: "Home Appliances",
        id: 5,
        img: "/images/categories/categories-05.png",
    },
    {
        title: "Health & Sports",
        id: 6,
        img: "/images/categories/categories-06.png",
    },
    {
        title: "Watches",
        id: 7,
        img: "/images/categories/categories-07.png",
    },
    {
        title: "Televisions",
        id: 8,
        img: "/images/categories/categories-04.png",
    },
    {
        title: "Televisions",
        id: 9,
        img: "/images/categories/categories-01.png",
    },
    {
        title: "Laptop & PC",
        id: 10,
        img: "/images/categories/categories-02.png",
    },
    {
        title: "Mobile & Tablets",
        id: 11,
        img: "/images/categories/categories-03.png",
    },
    {
        title: "Games & Videos",
        id: 12,
        img: "/images/categories/categories-04.png",
    },
    {
        title: "Home Appliances",
        id: 13,
        img: "/images/categories/categories-05.png",
    },
    {
        title: "Health & Sports",
        id: 14,
        img: "/images/categories/categories-06.png",
    },
    {
        title: "Watches",
        id: 15,
        img: "/images/categories/categories-07.png",
    },
    {
        title: "Televisions",
        id: 16,
        img: "/images/categories/categories-04.png",
    },
];

const index = () => {

    const SingleItem = ({ item }: { item: Category; }) => {

        return (
            <a href="#" className="group flex flex-col items-center">
                <div className="max-w-[130px] w-full h-32.5 rounded-full flex items-center justify-center mb-4">
                    <Image src={item.img} alt="Category" width={82} height={62} />
                </div>

                <div className="flex justify-center">
                    <h3 className="inline-block font-medium text-center text-dark bg-gradient-to-r from-blue to-blue bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_3px] group-hover:text-blue">
                        {item.title}
                    </h3>
                </div>
            </a>
        );
    };

    return (
        <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5">
            <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                <div className={`flex flex-row gap-20 flex-wrap`}>

                    {data.map((item) => (
                        <SingleItem key={item.id} item={item} />
                    ))}

                </div>
            </div>
        </section>
    );
};

export default index;