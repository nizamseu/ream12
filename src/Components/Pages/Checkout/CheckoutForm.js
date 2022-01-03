import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../Redux/productsSlice";
const CheckoutForm = ({ total }) => {
  console.log(total);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const cart = useSelector((state) => state.products.cart);

  const handleSubmitPayment = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    console.log(paymentMethod);
    if (error) {
      setPaymentError(error?.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod?.id);
      setPaymentError(null);
      paymetNow(total);
      setTimeout(function () {
        navigate("/products");
      }, 1000);
    }
  };

  const paymetNow = (price) => {
    fetch(
      "https://whispering-waters-68649.herokuapp.com/create-payment-intent",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          dispatch(clearCart([]));
        }
      });
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
