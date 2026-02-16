"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchBanners } from "@/api";
import QueryKeys from "@/constant/QueryKeys";
import { STORAGE_URL } from "@/constant";

const HeroCarousal = () => {
  const bannerQuery = useQuery({
    queryFn: fetchBanners,
    queryKey: [QueryKeys.STORE_BANNERS],
  });

  if (bannerQuery.error) return null;

  return (
    <section className="w-full bg-white">
      <Swiper
        spaceBetween={60}
        centeredSlides
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="max-w-7xl mx-auto"
      >
        {bannerQuery.data?.banners?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px]">

              {/* LEFT — TEXT */}
              <div className="lg:col-span-7 flex flex-col pt-20 lg:pt-0 justify-center px-6 lg:px-12">
                {item.discount_percentage > 0 && (
                  <span className="mb-6 inline-block text-2xl font-bold tracking-widest uppercase text-blue">
                    Save {item.discount_percentage}%
                  </span>
                )}

                <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-gray-7 max-w-2xl">
                  {item.title}
                </h1>

                <div className="flex lg:col-span-5 relative lg:hidden py-5 items-center justify-center bg-gray-50">
                  <Image
                    src={STORAGE_URL + item.image}
                    alt={item.title}
                    width={520}
                    height={520}
                    priority
                    className="object-contain"
                    unoptimized
                  />
                </div>

                {item.sub_title && (
                  <p className="mt-6 text-lg text-gray-600 max-w-xl">
                    {item.sub_title}
                  </p>
                )}

                {item.show_button && item.button_name && (
                  <div className="mt-10">
                    <a
                      href={item.link}
                      className="inline-flex items-center gap-3 bg-blue text-white px-10 py-4 text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
                    >
                      {item.button_name}
                      <span className="text-lg">→</span>
                    </a>
                  </div>
                )}
              </div>

              {/* RIGHT — IMAGE */}
              <div className="hidden lg:col-span-5 relative lg:flex items-center justify-center bg-gray-50">
                <Image
                  src={STORAGE_URL + item.image}
                  alt={item.title}
                  width={520}
                  height={520}
                  priority
                  className="object-contain"
                  unoptimized
                />

                {/* subtle accent line */}
                {/* <span className="absolute left-0 top-0 h-full w-1 bg-gray-5" /> */}
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousal;
