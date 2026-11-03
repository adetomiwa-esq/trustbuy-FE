export interface Product {
  _id?: string;
  id?: string | number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  images: string[];
  color?: string;
  sizes?: string[];
  createdAt?: string;
}
export type ProductInput = Omit<Product, "_id" | "id" | "createdAt">;
