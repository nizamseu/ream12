import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, CardMedia, Typography, Rating, CardActions, Button, Paper } from '@mui/material';

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Shared/Navbar/Navbar';
import { addCart } from '../../../Redux/productsSlice';


const ProductDetails = () => {
    const { id } = useParams()
    // const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const ProductData = useSelector((state) => state.products.product);
    const dispatch = useDispatch()
    const product = ProductData.find(pd => pd._id === id)
    console.log(product, "pd", id)

    const handleClick = () => {
        dispatch(addCart({ ...product, quantity }))
    }

    console.log(ProductData)
    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1)
        }
        else {
            setQuantity(quantity + 1)
        }
    }
    console.log(product.price, "log price")
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
                <Grid container sx={{ marginTop: '150px' }} item xs={12} md={6}>
                    <Box sx={{ margin: '15px' }}>
                        <Typography variant='h5' sx={{ fontWeight: "bold" }} >{product.name}</Typography>

                        <Typography gutterBottom variant="caption" sx={{ fontWeight: "bold" }} >{product.model}</Typography>
                        <br />
                        <br />
                        <Rating name="read-only" value={product?.rate ? product.rate : 5} readOnly />
                        <br />
                        <Typography variant="body3" sx={{ color: "text.secondary", fontWeight: 'bold' }}>{product.desc}</Typography>
                        <br /><br />
                        <Typography gutterBottom variant="caption" sx={{ fontWeight: "bold" }} >MEMORY:{product?.spec?.memory}</Typography><br />
                        <Typography gutterBottom variant="caption" sx={{ fontWeight: "bold" }} >RAM:{product?.spec?.ram}</Typography><br />
                        <Typography gutterBottom variant="caption" sx={{ fontWeight: "bold" }} >CPU:{product?.spec?.cpu}</Typography><br />
                        <Typography gutterBottom variant="caption" sx={{ fontWeight: "bold" }} >CLOCKSPEED:{product?.spec?.clockspeed}</Typography><br />
                        <br /><br />
                        <Typography variant="h5" sx={{ fontWeight: "bold", color: "text.primary" }}>${product?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                        <Box style={{ marginTop: "20px" }} >
                            <RemoveCircleIcon fontSize="large" onClick={() => handleQuantity("dec")} />
                            <span style={{ padding: '5px 16px', fontWeight: "bold", position: 'relative', bottom: '8px', margin: '5px 15px', fontSize: "25px" }}>{quantity}</span>
                            <AddCircleIcon fontSize="large" onClick={() => handleQuantity("inc")} />
                        </Box>
                        <Button sx={{ backgroundColor: "#F37539", color: "black", marginTop: "20px" }} onClick={handleClick} variant="outlined">ADD to Cart</Button>
                    </Box>
                </Grid>
                {/* style={{ position: 'absolute', top:'20px'}} */}
            </Grid>
        </Box>
    );
};

export default ProductDetails;