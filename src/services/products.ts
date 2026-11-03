import { apiRequest } from "./api";
import type { Product, ProductInput } from "../features/products/types";

type ProductListResponse = Product[] | { products: Product[]; message?: string };
export async function getProducts(): Promise<Product[]> {
  const result = await apiRequest<ProductListResponse>("/api/products");
  return Array.isArray(result) ? result : result.products;
}
export async function getProduct(id: string): Promise<Product> {
  const result = await apiRequest<{ product?: Product } & Product>(`/api/products/${id}`);
  return result.product ?? result;
}
export async function createProduct(input: ProductInput, images: File[]): Promise<Product> {
  const body = new FormData();
  Object.entries(input).forEach(([key, value]) => body.append(key, Array.isArray(value) ? JSON.stringify(value) : String(value)));
  images.forEach(image => body.append("images", image));
  return apiRequest<Product>("/api/products", { method: "POST", body });
}
export async function updateProduct(id: string, input: ProductInput, images: File[]): Promise<Product> {
  const body = new FormData();
  Object.entries(input).forEach(([key, value]) => body.append(key, Array.isArray(value) ? JSON.stringify(value) : String(value)));
  images.forEach(image => body.append("images", image));
  return apiRequest<Product>(`/api/products/${id}`, { method: "PATCH", body });
}
export async function deleteProduct(id: string): Promise<void> {
  await apiRequest<void>(`/api/products/${id}`, { method: "DELETE" });
}
