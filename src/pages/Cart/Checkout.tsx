import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { selectCartItems, selectSubtotal, selectShipping, selectDiscount } from "../../features/cart/selectors";
import { apiRequest } from "../../services/api";
import { formatCurrency } from "../../utils/currency";
import "./Cart.scss";

interface CheckoutResponse { paymentUrl?: string; checkoutUrl?: string; url?: string; reference?: string; message?: string }
export default function Checkout() {
  const items = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectSubtotal);
  const shipping = useAppSelector(selectShipping);
  const discount = useAppSelector(selectDiscount);
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", address: "" });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const total = subtotal + shipping - discount;
  const submit = async (event: React.FormEvent) => {
    event.preventDefault(); setError("");
    if (!items.length) { setError("Your cart is empty."); return; }
    setBusy(true);
    try {
      // The backend must create the order, initiate OPay, and return its hosted checkout URL.
      const result = await apiRequest<CheckoutResponse>("/api/payments/opay/initialize", {
        method: "POST",
        body: JSON.stringify({
          customer: form,
          items: items.map(item => ({ productId: item.id, quantity: item.quantity, size: item.size })),
          amount: total,
          currency: "NGN",
          callbackUrl: `${window.location.origin}/payment/return`,
        }),
      });
      const checkoutUrl = result.paymentUrl ?? result.checkoutUrl ?? result.url;
      if (!checkoutUrl) throw new Error("The payment API did not return a checkout URL.");
      window.location.assign(checkoutUrl);
    } catch (err) { setError(err instanceof Error ? err.message : "Could not start payment. Please try again."); setBusy(false); }
  };
  if (!items.length) return <section className="checkout-page"><h1>Checkout</h1><p>Your cart is empty.</p><button onClick={() => navigate("/men")}>Continue shopping</button></section>;
  
  return <section className="checkout-page">
    <div className="checkout-inner">
      <div>
        <h1>Delivery details</h1>
        <form onSubmit={submit} className="checkout-form">
          {error && <p role="alert" className="checkout-error">{error}</p>}

          <label>
            Full name
            <input required value={form.fullName} onChange={e => setForm({ ...form, fullName: e.target.value })} />
          </label>

          <label>
            Email address
            <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          </label>

          <label>
            Phone number
            <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
          </label>

          <label>
            Delivery address
            <textarea required value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
          </label>

          <p className="payment-note">You will be redirected to OPay's secure checkout to complete payment.</p>
          
          <button disabled={busy}>{busy ? "Connecting to OPay…" : "Continue to OPay"}</button>
        </form>
      </div>
      <aside className="checkout-order">
        <h2>Your order</h2>
        {
          items.map(item => <p key={`${item.id}-${item.size}`}>{item.title} × {item.quantity}<strong>{formatCurrency(item.price * item.quantity)}</strong></p>)
        }
        <hr />
        <p>Subtotal <strong>{formatCurrency(subtotal)}</strong></p>
        <p>Delivery <strong>{formatCurrency(shipping)}</strong></p>x
        <p>Discount <strong>-{formatCurrency(discount)}</strong></p>
        <h3>Total <strong>{formatCurrency(total)}</strong></h3>
      </aside>
    </div>
  </section>;
}
