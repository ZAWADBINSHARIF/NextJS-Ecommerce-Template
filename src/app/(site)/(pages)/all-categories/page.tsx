'use client';

import { Category } from '@/types/category';
import Image from 'next/image';
import React from 'react';
import QueryKeys from '@/constant/QueryKeys';
import { fetchAllCategories } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { STORAGE_URL } from '@/constant';
import Link from 'next/link';

const AllCategories = () => {

    const allCategoryQuery = useQuery({
        'queryKey': [QueryKeys.STORE_CATEGORIES],
        'queryFn': fetchAllCategories,
    });

    if (allCategoryQuery.error) {
        console.log(allCategoryQuery.error);
    }

    const SingleItem = ({ item }: { item: Category; }) => (
        <Link href={'/shop-product?category=' + item.slug} className="group flex flex-col items-center transition-transform hover:scale-105">
            <div className="max-w-[130px] w-full h-32.5 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <Image
                    src={STORAGE_URL + item.image}
                    alt={item.name}
                    width={82}
                    height={82}
                    className="object-contain"
                    unoptimized
                />
            </div>
            <div className="flex justify-center">
                <h3 className="inline-block font-medium text-center text-dark bg-gradient-to-r from-blue to-blue bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_3px] group-hover:text-blue">
                    {item.name}
                </h3>
            </div>
        </Link>
    );

    return (
        <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5">
            <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
                    {allCategoryQuery.data?.data?.categories && allCategoryQuery.data?.data?.categories.map((item) => (
                        <SingleItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllCategories;