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
import React, { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Products.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCart, loadProduct } from "../../../../Redux/productsSlice";
import { Link } from "react-router-dom";

const Products = () => {
  const [quantity, setQuantity] = useState(1);
  const ProductData = useSelector((state) => state.products.product);
  const [filterData, setFilterData] = useState("");
  const [data, setdata] = useState([]);
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://whispering-waters-68649.herokuapp.com/electronicscollection")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.sort((a, b) => 0.5 - Math.random());
        setdata(newData);
        dispatch(loadProduct(data));
      });
  }, []);

  const addToCart = (item) => {
    dispatch(addCart({ ...item, quantity }));
  };

  useEffect(() => {
    const restData = ProductData.filter((item) => item.category === filterData);
    if (filterData !== "all") {
      setdata(restData);
    } else setdata(ProductData);
  }, [filterData]);

  const handleFilter = (name) => {
    setFilterData(name);
  };

  // const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
  return (
    <Container sx={{ marginTop: "50px", button: { mx: 1, my: 1 } }}>
      <Box sx={{ my: 3 }}>
        <Button variant="outlined" onClick={() => handleFilter("all")}>
          All
        </Button>
        <Button variant="outlined" onClick={() => handleFilter("TV")}>
          TV
        </Button>
        <Button variant="outlined" onClick={() => handleFilter("laptop")}>
          laptop
        </Button>
        <Button variant="outlined" onClick={() => handleFilter("Camera")}>
          camera
        </Button>
        <Button variant="outlined" onClick={() => handleFilter("Smart Phone")}>
          Phone
        </Button>
      </Box>

      <Grid container spacing={{ xs: 2, md: 4 }}>
        {data?.map((item) => (
          <Grid item xs={12} sm={6} md={3} className="cartMain" key={item._id}>
            <Card sx={{ maxWidth: 345 }} className="card childcart">
              <Link
                style={{ textDecoration: "none" }}
                to={`/products/${item._id}`}
              >
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
                    ৳{" "}
                    {item.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={item.rate}
                      readOnly
                    />
                  </Typography>
                </CardContent>
              </Link>
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
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
