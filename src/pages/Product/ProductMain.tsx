import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Heart, Share } from "lucide-react";
import { useAppDispatch } from "../../hooks/redux";
import { addToCart } from "../../features/cart/CartSlice";
import { getProduct } from "../../services/products";
import type { Product } from "../../features/products/types";
import { formatCurrency } from "../../utils/currency";

function ProductMain() {

    const { productId } = useParams();
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<Product | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [size, setSize] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (!productId) return;
    getProduct(productId).then(setProduct).catch(err => setError(err instanceof Error ? err.message : "Product could not be loaded."));
  }, [productId]);
  if (error) return <section className="product-full"><p role="alert">{error}</p></section>;
  if (!product) return <section className="product-full"><p>Loading product…</p></section>;
  const images = product.images?.length ? product.images : ["/placeholder-product.png"];
  const id = product._id ?? product.id ?? productId!;
  const add = () => {
    if (product.sizes?.length && !size) { setError("Please select a size."); return; }
    dispatch(addToCart({ id, title: product.name, image: images[0], price: product.price, color: product.color ?? "Default", size: size || "One size", quantity: 1, stock: product.stock }));
    setError("Added to your bag.");
  };

  return (
    <section className="product-full">
    <div className="little-images">
        {images.map((img, i) => <img src={img} key={img + i} alt={`${product.name} ${i + 1}`} className="sm-img" onClick={() => setImageIndex(i)} />)}
    </div>
    <div className="slider-container">
        <div className="slider">
            <button className="nav left" onClick={() => setImageIndex(i => (i + images.length - 1) % images.length)}>‹</button>
            <div className="slide">
                <img src={images[imageIndex]} alt={product.name} />
            </div>
            <button className="nav right" onClick={() => setImageIndex(i => (i + 1) % images.length)}>›</button>
        </div>
    </div>
    
    <div className="details-section">
        <div className="name">
            <div className="product-name">
                <p>{product.name}</p><Share className="share-icon" />
            </div>
            <p className="product-l-name">{product.description}</p>
        </div>
        <h5 className="price">{formatCurrency(product.price)}</h5>
        <p className="color"><span>IN STOCK:</span> {product.stock}</p>

        {
            Boolean(product.sizes?.length)
            &&
            <div className="product-size">
                <div className="size-title"><p>SIZE:</p><Link to="">Size Guide</Link></div>
                <select className="select-size" value={size} onChange={e => setSize(e.target.value)}>
                    <option value="">Please Select</option>
                    {
                        product.sizes?.map(value => <option value={value} key={value}>{value}</option>)
                    }
                </select>
            </div>
        }

        {error && <p role="status">{error}</p>}

        <div className="order-btns">
            <button className="add-to-cart-btn" disabled={product.stock < 1} onClick={add}>{product.stock < 1 ? "OUT OF STOCK" : "ADD TO CART"}</button>
            <button className="favorite-btn"><Heart /></button>
        </div>
        <div className="product-details">
            <div className="product-details-h">
                <h6>Product Details</h6><span>−</span>z
            </div>
            <div className="product-details-info">
                <p>{product.description}</p><p className="product-code">Category: {product.category}</p>
            </div>
        </div>
    </div>
  </section>
  )
}

export default ProductMain