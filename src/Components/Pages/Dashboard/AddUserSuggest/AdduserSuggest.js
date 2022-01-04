import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const AddUserSuggest = () => {
    const [product, setProduct] = useState({});
    // const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...product };
        newProduct[field] = value;
        setProduct(newProduct);
    }

    const handleFormSubmit = e => {
        console.log(product);
        // const addProduct = {
        //     ...product
        // }

        // send to database

        // fetch('', {
        //     method: 'POST',
        //     headers: {'content-type':'application/json'},
        //     body: JSON.stringify(addProduct),
        // })
        // .then(res => res.json())
        // .then(data => {
        //     if(data.insertedId){
        //         setSuccess(true);
        //     }
        // })
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <img width="100%" src="https://i.ibb.co/WB7y6qz/laptop.png" alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{ my: 5, ml: 0 }}>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                        Add A Product
                    </Typography>
                    <form onSubmit={handleFormSubmit}>
                        <TextField
                            label="Product Serial"
                            type="number"
                            name="serial"
                            onBlur={handleOnBlur}
                            sx={{ width: "70%", m: 'auto' }}
                            variant="standard" />
                        <TextField
                            label="Product Category"
                            type="text"
                            name="category"
                            onBlur={handleOnBlur}
                            sx={{ width: "70%", m: 'auto' }}
                            variant="standard" />
                        <TextField
                            label="Product Name"
                            type="text"
                            name="name"
                            onBlur={handleOnBlur}
                            sx={{ width: "70%", m: 'auto' }}
                            variant="standard" />
                        <TextField
                            label="Product Model"
                            type="text"
                            name="model"
                            onBlur={handleOnBlur}
                            sx={{ width: "70%", m: 'auto' }}
                            variant="standard" />
                        <TextField
                            label="Product Price"
                            type="number"
                            name="price"
                            onBlur={handleOnBlur}
                            sx={{ width: "70%", m: 'auto' }}
                            variant="standard" />
                        <TextField
                            label="Product Image URL"
                            type="text"
                            name="img"
                            onBlur={handleOnBlur}
                            sx={{ width: "70%", m: 'auto' }}
                            variant="standard" />
                        <TextField
                            label="Product Description"
                            type="text"
                            name="desc"
                            onBlur={handleOnBlur}
                            sx={{ width: "70%", m: 'auto' }}
                            variant="standard" /> <br /> <br />
                        <Button type="submit" style={{ backgroundColor: '#0B1C2E', textAlign: 'left' }} variant="contained">ADD PRODUCT</Button>
                    </form>
                    {/* {success && <Alert sx={{mt: 5}} severity="success">PRODUCT ADDED SUCCESSFULLY</Alert>} */}
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddUserSuggest;