'use client';

import React from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import { useQuery } from '@tanstack/react-query';
import { fetchQuickLinkContent, fetchQuickLinks } from '@/api';
import QueryKeys from '@/constant/QueryKeys';
import DOMPurify from "isomorphic-dompurify";

const QucikLinkContent = ({ url_slug }: { url_slug: string; }) => {

    const quickLinkQuery = useQuery({
        'queryFn': () => fetchQuickLinkContent({ url_slug }),
        'queryKey': [QueryKeys.STORE_QUICK_LINKS, url_slug]
    });

    if (quickLinkQuery.data?.content)
        console.log(quickLinkQuery.data?.content);

    console.log(url_slug);


    return (
        <>
            <Breadcrumb title={quickLinkQuery.data?.content?.title ?? 'No title'} pages={[quickLinkQuery.data?.content?.title ?? '-']} />

            <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28 bg-[#f3f4f6]">
                <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                    <div className="flex flex-col xl:flex-row gap-7.5">

                        {quickLinkQuery.data?.content?.content &&
                            <div
                                className="prose"
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(quickLinkQuery.data?.content?.content),
                                }}
                            />
                        }

                    </div>
                </div>
            </section></>
    );
};

export default QucikLinkContent;