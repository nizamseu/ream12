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
          <Grid item xs={12} sm={6} md={3} className="cartMain">
            <Card sx={{ maxWidth: 345 }} className="card childcart">
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={item.img}
              />
              <CardContent>
                {/* <Typography gutterBottom variant="h6" sx={{ color: 'text.secondary' }} component="div">
                                        Lizard
                                    </Typography> */}
                <Typography gutterBottom variant="h5" component="div">
                  {item.model}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{ color: "text.secondary" }}
                  component="div"
                >
                  ${item.price}
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
              <div className="addCard">
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button variant="contained" onClick={() => addToCart(item)}>
                    {" "}
                    <AddShoppingCartIcon sx={{ marginRight: "15px" }} />
                    ADD TO CART
                  </Button>
                </CardActions>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
