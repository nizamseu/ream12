import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Products.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCart, loadProduct } from "../../../../Redux/productsSlice";
import { Link } from "react-router-dom";

const Products = () => {
  const ProductData = useSelector((state) => state.products.product);
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://whispering-waters-68649.herokuapp.com/electronicscollection")
      .then((res) => res.json())
      .then((data) => {
        dispatch(loadProduct(data));
      });
  }, []);

  const addToCart = (item) => {
    dispatch(addCart(item));
  };
  console.log(ProductData);
  return (
    <Container sx={{ marginTop: "50px" }}>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {ProductData.map((item) => (
          <Grid item xs={12} sm={6} md={3} className="cartMain" key={item._id}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/products/${item._id}`}
            >
              <Card sx={{ maxWidth: 345 }} className="card childcart">
                <CardMedia
                  component="img"
                  alt="green iguana"
                  className="cardImage"
                  image={item.img}
                />
                <CardContent>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      gutterBottom
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                      component="div"
                    >
                      {item.model}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                      component="div"
                    >
                      Serial: {item.serial}
                    </Typography>
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ fontWeight: "bold" }}
                    component="div"
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ color: "text.secondary" }}
                    component="div"
                  >
                    ৳ {item.price}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "center" }}>
                  <div className="addCard">
                    <Button variant="contained" onClick={() => addToCart(item)}>
                      {" "}
                      <AddShoppingCartIcon sx={{ marginRight: "15px" }} />
                      ADD TO CART
                    </Button>
                  </div>
                </CardActions>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
