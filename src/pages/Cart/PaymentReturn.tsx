import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { clearCart } from "../../features/cart/CartSlice";
import { apiRequest } from "../../services/api";

export default function PaymentReturn() {
  const [params] = useSearchParams();
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState("Confirming your payment…");
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const reference = params.get("reference") ?? params.get("orderNo") ?? params.get("order_no");
    
    if (!reference) {
    setMessage("We could not find a payment reference. Please contact support before trying again.");
      return;
    }
    apiRequest<{ status: string; message?: string }>("/api/payments/opay/verify", { method: "POST", body: JSON.stringify({ reference }) })
      .then(result => {
        if (result.status === "success" || result.status === "paid") { dispatch(clearCart()); setSuccess(true); setMessage("Payment confirmed. Thank you for your order!"); }
        else setMessage(result.message ?? "Payment has not been confirmed. If you were charged, contact support with your payment reference.");
      }).catch(err => setMessage(err instanceof Error ? err.message : "We could not verify your payment."));
  }, [params, dispatch]);
  return <section className="payment-return">
    <h1>{success ? "Payment successful" : "Payment status"}</h1>
    <p>{message}</p>
    <Link to="/">Return to store</Link>
  </section>;
}
