"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Image from "next/image";
import { usePreviewSlider } from "@/app/context/PreviewSliderContext";
import { Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import QueryKeys from "@/constant/QueryKeys";
import { fetchProductDetails, productCheckout } from "@/api";
import { STORAGE_URL } from "@/constant";
import { formatCurrency } from "@/lib/formatCurrency";
import DOMPurify from "isomorphic-dompurify";
import { RxCrossCircled } from "react-icons/rx";
import * as countryCodes from "country-codes-list";
import { useRouter } from "next/navigation";;

const ShopDetails = ({ short_id, slug }: { short_id: string, slug: string; }) => {

  const router = useRouter();

  const [previewImg, setPreviewImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const countries = countryCodes.all();

  // Form states
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [customerPhone, setCustomerPhone] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliveryCity, setDeliveryCity] = useState("");
  const [deliveryState, setDeliveryState] = useState("");
  const [deliveryZip, setDeliveryZip] = useState("");

  const productDetailsQuery = useQuery({
    queryKey: [QueryKeys.PRODUCT_DETAILS, short_id, slug],
    queryFn: () => fetchProductDetails({ short_id, slug }),
    enabled: !!short_id && !!slug
  });

  let product: Product | null = null;
  if (productDetailsQuery?.data?.product) {
    product = productDetailsQuery?.data?.product;
  }

  useEffect(() => {
    localStorage.setItem("productDetails", JSON.stringify(product));
  }, [product]);

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const orderData = {
      products: [{
        'slug': product.slug,
        'short_id': product.short_id,
        quantity
      }],
      total_amount: Number(product?.price) * quantity,
      customer_name: customerName,
      customer_email: customerEmail,
      customer_phone: `${countryCode}${customerPhone}`,
      delivery: {
        address: deliveryAddress,
        city: deliveryCity,
        state: deliveryState,
        zip: deliveryZip,
      }
    };
    console.log("Processing Order Data:", orderData);

    const { checkout_url } = await productCheckout(orderData);

    if (checkout_url) {
      console.log(checkout_url);

      router.push(checkout_url);
    }


    // Add payment action logic here
  };

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

                  {product.is_out_of_stock ||
                    product.platform_product?.is_out_of_stock ||
                    !product.platform_product?.published ?
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
                      Price: ${formatCurrency(+product.price * quantity)}
                    </span>
                    {product.discount_percentage > 0 &&
                      <span className="line-through">
                        ${formatCurrency((+product?.price + (+product?.price * product?.discount_percentage / 100)) * quantity)}
                      </span>
                    }
                  </h3>

                  <div
                    className="prose"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(product.short_description),
                    }}
                  />

                  {(!product.is_out_of_stock ||
                    !product.platform_product?.is_out_of_stock ||
                    product.platform_product?.published) &&
                    <div className="mt-7.5 flex items-center gap-4">
                      {/* Quantity Selector Button */}
                      <div className="inline-flex items-center border border-gray-3 rounded-md bg-white overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                          className="px-4 py-2 hover:bg-gray-2 text-dark font-medium transition duration-200"
                        >
                          -
                        </button>
                        <span className="px-4 py-2 text-dark font-semibold border-x border-gray-3 min-w-12 text-center">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity(prev => prev + 1)}
                          className="px-4 py-2 hover:bg-gray-2 text-dark font-medium transition duration-200"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex font-medium text-white bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
                      >
                        Order Now
                      </button>
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

          {/* Checkout Form Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-99999 flex items-center justify-center bg-black/50 p-4">
              {/* Added shadow-2xl for deeper modal shadow */}
              <div className="relative w-full max-w-[550px] rounded-lg bg-white p-6 sm:p-8 shadow-2xl xl:p-10 max-h-[90vh] overflow-y-auto">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute right-4 top-4 text-dark hover:text-blue transition duration-200"
                >
                  <RxCrossCircled size={24} />
                </button>

                <h3 className="font-semibold text-xl text-dark mb-6">Customer & Delivery Information</h3>

                <form onSubmit={handlePaymentSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-dark mb-1">
                      Customer Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full rounded border border-gray-3 bg-transparent px-4 py-2 text-dark outline-none focus:border-blue shadow-sm"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark mb-1">
                      Customer Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full rounded border border-gray-3 bg-transparent px-4 py-2 text-dark outline-none focus:border-blue shadow-sm"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-col gap-2 shadow-sm">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="rounded border border-gray-3 bg-white px-2 py-2 text-dark outline-none focus:border-blue"
                      >
                        {countries.map((country: countryCodes.CountryData) => (
                          <option
                            key={country.countryCode}
                            value={`+${country.countryCallingCode}`}
                          >
                            (+{country.countryCallingCode})
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full rounded border border-gray-3 bg-transparent px-4 py-2 text-dark outline-none focus:border-blue"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>

                  <div className="border-t border-gray-3 pt-4">
                    <span className="block font-medium text-sm text-dark mb-2">
                      USA Delivery Information <span className="text-red-500">*</span>
                    </span>

                    <div className="space-y-3">
                      <div>
                        <input
                          type="text"
                          required
                          value={deliveryAddress}
                          onChange={(e) => setDeliveryAddress(e.target.value)}
                          className="w-full rounded border border-gray-3 bg-transparent px-4 py-2 text-dark outline-none focus:border-blue shadow-sm"
                          placeholder="Street Address"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <input
                          type="text"
                          required
                          value={deliveryCity}
                          onChange={(e) => setDeliveryCity(e.target.value)}
                          className="w-full rounded border border-gray-3 bg-transparent px-4 py-2 text-dark outline-none focus:border-blue shadow-sm"
                          placeholder="City"
                        />
                        <input
                          type="text"
                          required
                          value={deliveryState}
                          onChange={(e) => setDeliveryState(e.target.value)}
                          className="w-full rounded border border-gray-3 bg-transparent px-4 py-2 text-dark outline-none focus:border-blue shadow-sm"
                          placeholder="State"
                        />
                        <input
                          type="text"
                          required
                          value={deliveryZip}
                          onChange={(e) => setDeliveryZip(e.target.value)}
                          className="w-full rounded border border-gray-3 bg-transparent px-4 py-2 text-dark outline-none focus:border-blue shadow-sm"
                          placeholder="ZIP Code"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center font-medium text-white bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark shadow-md"
                    >
                      Pay ${formatCurrency(+product.price * quantity)}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ShopDetails;