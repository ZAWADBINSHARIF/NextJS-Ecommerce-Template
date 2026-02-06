"use client";
import React from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { updateproductDetails } from "@/redux/features/product-details";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { STORAGE_URL } from "@/constant";
import { formatCurrency } from "@/lib/formatCurrency";

const ProductItem = ({ item }: { item: Product; }) => {
  const { openModal } = useModalContext();

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleProductDetails = () => {
    dispatch(updateproductDetails({ ...item }));
  };

  return (
    <div
      className="group cursor-pointer"
    >
      <div
        onClick={() => {
          router.push('/shop-details');
          handleProductDetails();
        }}
        className="relative overflow-hidden flex items-center justify-center rounded-lg bg-[#F6F7FB] min-h-[270px] mb-4">
        <Image src={STORAGE_URL + item.images[0]} alt="" width={250} height={250} unoptimized />
      </div>

      <h3
        className="font-medium text-dark ease-out duration-200 group-hover:text-blue mb-1.5"
        onClick={() => handleProductDetails()}
      >
        <Link href="/shop-details"> {item.name} </Link>
      </h3>

      <span className="flex items-center gap-2 font-medium text-lg">
        <span className="text-dark">${formatCurrency(item.price)}</span>
        {item.discount_percentage > 0 && <span className="text-dark-4 line-through">${formatCurrency(item.price + item.price * item.discount_percentage / 100)}</span>}
      </span>


      <div className="mt-4 flex justify-between">
        <button
          onClick={() => {
            router.push('/shop-details');
            handleProductDetails();
          }}
          className="inline-flex font-medium text-custom-sm py-[7px] px-5 rounded-[5px] border border-blue text-blue ease-out duration-200 hover:bg-blue hover:text-white"
        >
          View Details
        </button>

      </div>

    </div>
  );
};

export default ProductItem;
