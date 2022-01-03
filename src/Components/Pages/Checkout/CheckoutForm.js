import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../Redux/productsSlice";
const CheckoutForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmitPayment = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setPaymentError(error?.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod?.id);
      setPaymentError(null);
      dispatch(clearCart([]));
      setTimeout(function () {
        navigate("/products");
      }, 2000);
    }
  };

  return (
    <Box>
      <h1>Payment From</h1>
      <form style={{ fontSize: "25px" }} onSubmit={handleSubmitPayment}>
        <CardElement />
        <Button
          variant="contained"
          sx={{ margin: "20px 5px" }}
          type="submit"
          disabled={!stripe || !elements}
        >
          Pay Now
        </Button>
      </form>
      {paymentError && <h4 style={{ color: "red" }}>{paymentError}</h4>}
      {paymentSuccess && <h4 style={{ color: "green" }}>Payment Success</h4>}
    </Box>
  );
};

export default CheckoutForm;
