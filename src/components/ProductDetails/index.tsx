"use client";
import React, { use, useEffect, useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Image from "next/image";
import { usePreviewSlider } from "@/app/context/PreviewSliderContext";
import { Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import QueryKeys from "@/constant/QueryKeys";
import { fetchProductDetails } from "@/api";
import { STORAGE_URL } from "@/constant";
import { formatCurrency } from "@/lib/formatCurrency";
import DOMPurify from "isomorphic-dompurify";
import { RxCrossCircled } from "react-icons/rx";



const ShopDetails = ({ short_id, slug }: { short_id: string, slug: string; }) => {
  const [previewImg, setPreviewImg] = useState(0);


  const productDetailsQuery = useQuery({
    queryKey: [QueryKeys.PRODUCT_DETAILS, short_id, slug],
    queryFn: () => fetchProductDetails({ short_id, slug }),
    enabled: !!short_id && !!slug
  });

  let product: Product | null = null;
  if (productDetailsQuery?.data?.product) {
    product = productDetailsQuery?.data?.product;
    console.log(product);
  }

  useEffect(() => {
    localStorage.setItem("productDetails", JSON.stringify(product));
  }, [product]);

  return (
    <>
      <Breadcrumb title={"Product Details"} pages={["product details"]} />

      {!product ? (
        "Please add product"
      ) : (
        <>
          <section className="overflow-hidden relative pb-20 pt-10">
            <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
              <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-17.5">
                <div className="lg:max-w-[570px] w-full">
                  <div className="lg:min-h-[512px] rounded-lg shadow-1 bg-gray-2 p-4 sm:p-7.5 relative flex items-center justify-center">
                    <div>

                      {product.images && (
                        <Image
                          src={STORAGE_URL + product.images[previewImg]}
                          alt="products-details"
                          width={400}
                          height={400}
                          unoptimized
                        />
                      )}
                    </div>
                  </div>

                  {/* ?  &apos;border-blue &apos; :  &apos;border-transparent&apos; */}
                  {product?.images?.length > 0 &&
                    <div className="flex flex-wrap sm:flex-nowrap gap-4.5 mt-6">
                      {product.images.map((item, key) => (
                        <button
                          onClick={() => setPreviewImg(key)}
                          key={key}
                          className={`flex items-center justify-center w-15 sm:w-25 h-15 sm:h-25 overflow-hidden rounded-lg bg-gray-2 shadow-1 ease-out duration-200 border-2 hover:border-blue ${key === previewImg
                            ? "border-blue"
                            : "border-transparent"
                            }`}
                        >
                          <Image
                            width={50}
                            height={50}
                            src={STORAGE_URL + item}
                            alt="thumbnail"
                            unoptimized
                          />
                        </button>
                      ))}
                    </div>}
                </div>

                {/* <!-- product content --> */}
                <div className="max-w-[539px] w-full">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="font-semibold text-xl sm:text-2xl xl:text-custom-3 text-dark">
                      {product.name}
                    </h2>

                    {product.discount_percentage > 0 &&
                      <div className="inline-flex font-medium text-custom-sm text-white bg-blue rounded py-0.5 px-2.5">
                        {product.discount_percentage}% OFF
                      </div>
                    }
                  </div>

                  {product.is_out_of_stock ?
                    <div className="flex flex-wrap items-center gap-5.5 mb-4.5">

                      <div className="flex items-center gap-1.5">
                        <RxCrossCircled size={20} color="red" />

                        <span className="text-red"> Out Of Stock </span>
                      </div>
                    </div> :

                    <div className="flex flex-wrap items-center gap-5.5 mb-4.5">

                      <div className="flex items-center gap-1.5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_375_9221)">
                            <path
                              d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                              fill="#22AD5C"
                            />
                            <path
                              d="M12.6875 7.09374L8.9688 10.7187L7.2813 9.06249C7.00005 8.78124 6.56255 8.81249 6.2813 9.06249C6.00005 9.34374 6.0313 9.78124 6.2813 10.0625L8.2813 12C8.4688 12.1875 8.7188 12.2812 8.9688 12.2812C9.2188 12.2812 9.4688 12.1875 9.6563 12L13.6875 8.12499C13.9688 7.84374 13.9688 7.40624 13.6875 7.12499C13.4063 6.84374 12.9688 6.84374 12.6875 7.09374Z"
                              fill="#22AD5C"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_375_9221">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

                        <span className="text-green"> In Stock </span>
                      </div>
                    </div>
                  }

                  <h3 className="font-medium text-custom-1 mb-4.5 space-x-2">
                    <span className="text-sm sm:text-base text-dark">
                      Price: ${formatCurrency(product.price)}
                    </span>
                    {product.discount_percentage > 0 &&
                      <span className="line-through">
                        ${formatCurrency(+product?.price + (+product?.price * product?.discount_percentage / 100))}
                      </span>
                    }
                  </h3>

                  <div
                    className="prose"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(product.short_description),
                    }}
                  />

                  {!product.is_out_of_stock &&
                    product.stripe_payment_link &&

                    <div className="mt-7.5">

                      <a
                        href={product.stripe_payment_link}
                        className="inline-flex font-medium text-white bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
                      >
                        Purchase Now
                      </a>

                    </div>
                  }
                </div>

              </div>
            </div>

          </section>

          <section className="overflow-hidden bg-gray-2 py-20">
            <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
              {/* <!--== tab header start ==--> */}
              <div className="flex flex-wrap items-center bg-white rounded-[10px] shadow-1 gap-5 xl:gap-12.5 py-4.5 px-4 sm:px-6">
                <button
                  className={`font-medium lg:text-lg ease-out duration-200 hover:text-blue relative before:h-0.5 before:bg-blue before:absolute before:left-0 before:bottom-0 before:ease-out before:duration-200 hover:before:w-full text-blue before:w-full`}
                >
                  Description
                </button>
              </div>

              <div>
                <div
                  className={`flex-col sm:flex-row gap-7.5 xl:gap-12.5 mt-12.5 flex`}
                >

                  <div
                    className="prose"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(product.description),
                    }}
                  />

                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ShopDetails;
