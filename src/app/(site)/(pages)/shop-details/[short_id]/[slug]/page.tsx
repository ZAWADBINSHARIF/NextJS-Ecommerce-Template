

import React from "react";
import ShopDetails from "@/components/ProductDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Details Page | NextCommerce Nextjs E-commerce template",
  description: "This is Shop Details Page for NextCommerce Template",
  // other metadata
};

type Props = {
  params: Promise<{
    short_id: string;
    slug: string;
  }>;
};

const ShopDetailsPage = async ({ params }: Props) => {

  const { short_id, slug } = await params;


  return (
    <main>
      <ShopDetails short_id={short_id} slug={slug} />
    </main>
  );
};

export default ShopDetailsPage;
