import { formatCurrency } from "../../utils/currency";

interface Props {
  subtotal: number;
  shipping: number;
  discount: number;
}

const CartSummary = ({
  subtotal,
  shipping,
  discount,
}: Props) => {

  const total =
    subtotal +
    shipping -
    discount;

  return (

    <aside className="summary">

      <h2>Order Summary</h2>

      <div>

        <span>Subtotal</span>

        <span>
          {formatCurrency(subtotal)}
        </span>

      </div>

      <div>

        <span>Shipping</span>

        <span>
          {formatCurrency(shipping)}
        </span>

      </div>

      <div>

        <span>Discount</span>

        <span>

          -{formatCurrency(discount)}

        </span>

      </div>

      <hr />

      <div>

        <strong>Total</strong>

        <strong>

          {formatCurrency(total)}

        </strong>

      </div>

      <button>

        Proceed to Checkout

      </button>

    </aside>

  );

};

export default CartSummary;