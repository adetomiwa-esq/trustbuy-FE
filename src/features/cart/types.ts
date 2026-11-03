export interface CartItem {
    id: number | string;

    title: string;

    image: string;

    price: number;

    oldPrice?: number;

    color: string;

    size: string;

    quantity: number;

    stock: number;

    brand?: string;

    delivery?: string;

    sellingFast?: boolean;
}