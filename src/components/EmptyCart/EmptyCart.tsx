import { ShoppingBag } from "lucide-react";

const EmptyCart = () => {

  return (

    <div className="empty-cart">

      <ShoppingBag size={70} />

      <h2>Your bag is empty</h2>

      <p>

        Looks like you haven't added anything yet.

      </p>

      <button>

        Continue Shopping

      </button>

    </div>

  );

};

export default EmptyCart;