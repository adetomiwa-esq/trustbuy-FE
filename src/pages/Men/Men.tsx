import { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import Banner from "./Banner";
import NewIn from "../../components/NewIn/NewIn";
import { getProducts } from "../../services/products";
import type { Product } from "../../features/products/types";
import "./Men.scss";

function Men() {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getProducts().then(all => setProducts(all.filter(product => {
        const category = product.category.toLowerCase();
        return category === "men" || category === "unisex";
        }))).catch(err => setError(err instanceof Error ? err.message : "Unable to load products.")).finally(() => setLoading(false));
    }, []);

    const cards = products.map(product => ({ id: String(product._id ?? product.id ?? product.name), img: product.images?.[0] ?? "", description: product.name, price: `₦${Number(product.price).toLocaleString("en-NG")}` })).filter(product => product.img);

  return (
    <div id="page-men">
        <Banner />
        {
            error && <p role="alert">{error}</p>}
            {   loading
                ? 
                <p className="store-loading">Loading products…</p> : cards.length ? <Slider items={cards} itemsPerSlide={4} /> : <p className="store-loading">No products are available in this category yet.</p>
            }
            
            <NewIn newLinks={[]} />{cards.length > 0 && <Slider items={cards} itemsPerSlide={4} />
        }
    </div>
  )
}

export default Men