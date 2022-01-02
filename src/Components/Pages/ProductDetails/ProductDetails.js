import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Grid,
  CardMedia,
  Typography,
  Rating,
  CardActions,
  Button,
  Paper,
} from "@mui/material";

import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Shared/Navbar/Navbar";

const ProductDetails = () => {
  const { id } = useParams();
  // const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1);
  const ProductData = useSelector((state) => state.products.product);
  const dispatch = useDispatch();
  const product = ProductData.find((pd) => pd._id === id);
  console.log(product, "pd", id);

  // const handleClick = () => {
  //     dispatch(addProduct({ ...product, quantity }))
  // }
  // onClick={handleClick}
  // console.log(ProductData)
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="80%"
            image={product?.img}
          />
        </Grid>
        <Grid container sx={{ marginTop: "150px" }} item xs={12} md={6}>
          <Box sx={{ margin: "15px" }}>
            <Typography variant="h5">{product.name}</Typography>
            <br />
            <Rating
              name="read-only"
              value={product?.rating ? product.rating : 5}
              readOnly
            />
            <br />
            <Typography variant="h4">${product.price}</Typography>
            <br />
            <Typography variant="body3" sx={{ color: "secondary" }}>
              {product.description}
            </Typography>

            <Box style={{ marginTop: "20px" }}>
              <RemoveCircleIcon onClick={() => handleQuantity("dec")} />
              <span
                style={{
                  border: "1px solid gray",
                  padding: "0 6px",
                  fontWeight: "bold",
                  position: "relative",
                  bottom: "8px",
                  margin: "0 5px",
                }}
              >
                {quantity}
              </span>{" "}
              <AddCircleIcon onClick={() => handleQuantity("inc")} />
            </Box>
            <Button
              sx={{
                backgroundColor: "#F37539",
                color: "black",
                marginTop: "20px",
              }}
              variant="outlined"
            >
              ADD to Cart
            </Button>
          </Box>
        </Grid>
        {/* style={{ position: 'absolute', top:'20px'}} */}
      </Grid>
    </Box>
  );
};

export default ProductDetails;
