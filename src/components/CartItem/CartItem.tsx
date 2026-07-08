import "./CartItem.scss";

import { Heart, Trash2 } from "lucide-react";

import { formatCurrency } from "../../utils/currency";

import type { CartItem as CartItemType } from "../../features/cart/types";

interface CartItemProps {
    item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {

    return (

        <article className="cart-item">

            <img
                src={item.image}
                alt={item.title}
                className="cart-item__image"
            />

            <div className="cart-item__details">

                <h3>{item.title}</h3>

                <p>Colour: {item.color}</p>

                <div className="cart-item__actions">

                    <select defaultValue={item.size}>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>

                    <select defaultValue={item.quantity}>

                        {Array.from(
                            { length: item.stock },
                            (_, i) => (

                                <option key={i + 1}>
                                    {i + 1}
                                </option>

                            )
                        )}

                    </select>

                </div>

                <div className="cart-item__footer">

                    <div>

                        <button>
                            <Heart size={18} />
                            Save for later
                        </button>

                        <button>
                            <Trash2 size={18} />
                            Remove
                        </button>

                    </div>

                    <div className="cart-item__prices">

                        <span>
                            {formatCurrency(item.price)}
                        </span>

                        {item.oldPrice && (

                            <small>

                                {formatCurrency(item.oldPrice)}

                            </small>

                        )}

                    </div>

                </div>

            </div>

        </article>

    );

};

export default CartItem;