import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Share } from 'lucide-react';

function ProductMain() {

    const product = {
        images: [
            "https://images.asos-media.com/products/4505-icon-rest-day-heavyweight-440gsm-cotton-oversized-boxy-hoodie-in-light-grey-marl/209517777-1-lightgreymarl?$n_960w$&wid=952&fit=constrain",

            "https://images.asos-media.com/products/4505-icon-rest-day-heavyweight-440gsm-cotton-oversized-boxy-hoodie-in-light-grey-marl/209517777-2?$n_1280w$&wid=1125&fit=constrain",

            "https://images.asos-media.com/products/4505-icon-rest-day-heavyweight-440gsm-cotton-oversized-boxy-hoodie-in-light-grey-marl/209517777-3?$n_1280w$&wid=1125&fit=constrain",

            "https://images.asos-media.com/products/4505-icon-rest-day-heavyweight-440gsm-cotton-oversized-boxy-hoodie-in-light-grey-marl/209517777-4?$n_750w$&wid=750&fit=constrain",

            "https://images.asos-media.com/products/4505-icon-rest-day-heavyweight-440gsm-cotton-oversized-boxy-hoodie-in-light-grey-marl/209517777-5?$n_1280w$&wid=1125&fit=constrain",
        ],
        name: "4505 Icon Rest Day heavyweight",
        long_name: "440gsm cotton oversized boxy hoodie in light grey marl",
        short_description: "Sweatshirt fabric: soft and warm fabric with a cosy raised texture inside",
        long_description: "Flex your own way in activewear from our resident sportswear brand 4505. From gym gear to fitness aids our edit is the place to be. Keep cool on leg day by scrolling sweat-wicking shorts and joggers – or give your upper body a boost with T-shirts and vests in a range of trend-led prints and workout-ready fabrics. Whatever you’re doing to keep fit, our 4505 edit is here to provide the kit.",
        price: "64.00",
        color: "Light Grey Marl",
        sizes: [
            {
                size: "2XS - Chest 34", available: false
            },
            {
                size: "XS - Chest 36", available: true
            },
            {
                size: "S - Chest 38", available: true
            },
            {
                size: "M - Chest 40", available: true
            },
            {
                size: "L - Chest 42", available: true
            },
            {
                size: "XL - Chest 44", available: true
            },
            {
                size: "2XL - Chest 46-48", available: true
            },
        ],
        maintenance: "Machine wash according to instructions on care label",
        features: [
            "Plain design", "Fixed hood", "Long sleeves", "Pouch pocket", "Boxy cut", "Oversized fit"
        ],
        product_code: "151485891"
    }



    const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    )
  }




    
  return (
    <section>
        <div className="product-full">
            <div className="">
                <div className="little-images">
                    {
                        product.images.map((img, i) => (
                            <img src={img} key={i} alt="" className="sm-img" onClick={() => setCurrentIndex(i)} />
                        ))
                    }
                </div>
            </div>
            <div className="slider-container">
                <div className="slider">
                    <button className="nav left" onClick={prevSlide}>
                        ‹
                    </button>

                    <div className="slide">
                        <img src={product.images[currentIndex]} alt="slide" />
                    </div>

                    <button className="nav right" onClick={nextSlide}>
                        ›
                    </button>
                </div>
            </div>
            <div className="details-section">
                <div className="name">
                    <div className="product-name"><p>{product.name}</p> <Share className='share-icon' /></div>
                    <p className="product-l-name">{product.long_name}</p>
                </div>

                <h5 className="price">${product.price}</h5>

                <p className="color"><span>COLOUR:</span> {product.color}</p>

                <div className="product-size">
                    <div className="size-title">
                        <p>SIZE:</p>
                        <Link to="">Size Guide</Link>
                    </div>

                    <select name="" id="" className='select-size'>
                        <option value="">Please Select</option>
                        {
                            product.sizes.map((size, i) => (
                                <option value={size.size} key={i}>{size.size}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="order-btns">
                    <button className="add-to-cart-btn">ADD TO CART</button>

                    <button className="favorite-btn">
                        <Heart />
                    </button>
                </div>

                <div className="product-details">
                    <div className="product-details-h">
                        <h6>Product Details</h6>

                        <span>-</span>
                    </div>

                    <div className="product-details-info">
                        <ul className="feats-list">
                            {
                                product.features.map((feat, i) => (
                                    <li key={i} className="feat">{feat}</li>
                                ))
                            }
                        </ul>
                        <p className="product-code">Product Code: {product.product_code}</p>
                        <p className="maintenance">{product.maintenance}</p>
                        <p className="long-desc">{product.long_description}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductMain