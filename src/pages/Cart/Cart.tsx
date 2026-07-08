import CartItem from "../../components/CartItem/CartItem";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import { cartItems } from "../../mock/Cart";
import "./Cart.scss";

const Cart = () => {
  return (
    <section className="cart">
      <div className="cart__container">
        <div className="cart__left">
          <header className="cart__header">
            <h1>MY BAG</h1>

            <p>Items are reserved for 60 minutes</p>
          </header>

          <div className="cart__content">
            {
              cartItems.length === 0 ?

              <EmptyCart />

              :
            
              cartItems.map((item) => (
                  <CartItem
                      key={item.id}
                      item={item}
                  />
              ))
            }
          </div>
        </div>

        <aside className="cart__right">
          Order Summary
        </aside>
      </div>
    </section>
  );
};

export default Cart;