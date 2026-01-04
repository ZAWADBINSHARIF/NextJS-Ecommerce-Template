import { Category } from '@/types/category';
import Image from 'next/image';
import React from 'react';
import categoriesData from '@/data/categories';

const AllCategories = () => {
    const SingleItem = ({ item }: { item: Category; }) => (
        <a href="#" className="group flex flex-col items-center transition-transform hover:scale-105">
            <div className="max-w-[130px] w-full h-32.5 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <Image
                    src={item.img}
                    alt={item.title}
                    width={82}
                    height={82}
                    className="object-contain"
                />
            </div>
            <div className="flex justify-center">
                <h3 className="inline-block font-medium text-center text-dark bg-gradient-to-r from-blue to-blue bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_3px] group-hover:text-blue">
                    {item.title}
                </h3>
            </div>
        </a>
    );

    return (
        <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5">
            <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
                    {categoriesData.map((item) => (
                        <SingleItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllCategories;