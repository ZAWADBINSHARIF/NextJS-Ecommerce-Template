export interface Product {
  store_id: number;
  name: string;
  slug: string;
  short_id: string;
  images: string[]; // assuming this is stored as JSON array
  short_description: string;
  description: string;
  price: number;
  discount_percentage?: number; // optional if not always set
  is_out_of_stock: boolean;
  published: boolean;
  stripe_payment_link?: string; // optional if not always set
}
