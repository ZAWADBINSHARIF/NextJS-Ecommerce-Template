"use client";
import React from "react";

import { Product } from "@/types/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { updateQuickView } from "@/redux/features/quickView-slice";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import Image from "next/image";
import { updateproductDetails } from "@/redux/features/product-details";
import { useRouter } from "next/navigation";

const SingleListItem = ({ item }: { item: Product; }) => {
  const { openModal } = useModalContext();

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  // update the QuickView state
  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
  };

  const handleProductDetails = () => {
    dispatch(updateproductDetails({ ...item }));
  };

  // add to cart
  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...item,
        quantity: 1,
      })
    );
  };

  const handleItemToWishList = () => {
    dispatch(
      addItemToWishlist({
        ...item,
        status: "available",
        quantity: 1,
      })
    );
  };

  return (
    <div
      className="group rounded-lg bg-white shadow-1 cursor-pointer">
      <div className="flex">
        <div
          onClick={() => {
            router.push('/shop-details');
            handleProductDetails();
          }}
          className="shadow-list relative overflow-hidden flex items-center justify-center max-w-[270px] w-full sm:min-h-[270px] p-4">
          <Image src={item.imgs.previews[0]} alt="" width={250} height={250} />
        </div>

        <div className="w-full flex flex-col gap-5 sm:flex-row sm:items-center justify-center sm:justify-between py-5 px-4 sm:px-7.5 lg:pl-11 lg:pr-12">
          <div>
            <h3 className="font-medium text-dark ease-out duration-200 group-hover:text-blue mb-1.5">
              <Link href="/shop-details"> {item.title} </Link>
            </h3>

            <span className="flex items-center gap-2 font-medium text-lg">
              <span className="text-dark">${item.discountedPrice}</span>
              <span className="text-dark-4 line-through">${item.price}</span>
            </span>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            {/* <button
              onClick={() => {
                openModal();
                handleQuickViewUpdate();
              }}
              className="inline-flex font-medium text-custom-sm py-[7px] px-5 rounded-[5px] bg-blue text-white ease-out duration-200 hover:bg-blue-dark"
            >
              Quick View
            </button> */}

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


      </div>
    </div>
  );
};

export default SingleListItem;
