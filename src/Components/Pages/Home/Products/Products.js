import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Products.css'

const sofa = [
    {
        id: 1,
        name: 'Rocking Chair',
        image: 'https://image.freepik.com/free-psd/chair-pillow_176382-880.jpg',
        price: 910,
        rating: 4
    },
    {
        id: 2,
        name: 'Center Table Glass Metal',
        image: 'https://image.freepik.com/free-psd/chair-pillow_176382-865.jpg',
        price: 865,
        rating: 3.5
    },
    {
        id: 3,
        name: 'Easy Chair',
        image: 'https://img.freepik.com/free-psd/armchair-pillow_176382-886.jpg?size=338&ext=jpg',
        price: 850,
        rating: 5
    },
    {
        id: 4,
        name: 'Rocking Chair',
        image: 'https://image.freepik.com/free-psd/chair-pillow_176382-880.jpg',
        price: 910,
        rating: 4
    },
    {
        id: 5,
        name: 'Center Table Glass Metal',
        image: 'https://image.freepik.com/free-psd/chair-pillow_176382-865.jpg',
        price: 865,
        rating: 3.5
    },
    {
        id: 6,
        name: 'Easy Chair',
        image: 'https://img.freepik.com/free-psd/armchair-pillow_176382-886.jpg?size=338&ext=jpg',
        price: 850,
        rating: 5
    },
    {
        id: 7,
        name: 'Rocking Chair',
        image: 'https://image.freepik.com/free-psd/chair-pillow_176382-880.jpg',
        price: 910,
        rating: 4
    },
    {
        id: 8,
        name: 'Center Table Glass Metal',
        image: 'https://image.freepik.com/free-psd/chair-pillow_176382-865.jpg',
        price: 865,
        rating: 3.5
    },
    {
        id: 9,
        name: 'Easy Chair',
        image: 'https://img.freepik.com/free-psd/armchair-pillow_176382-886.jpg?size=338&ext=jpg',
        price: 850,
        rating: 5
    }

]

const Products = () => {
    return (
        <Container sx={{ marginTop: '50px' }}>
            <Grid container spacing={{ xs: 2, md: 4 }} >

                {
                    sofa.map(item =>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className="card" sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={item.image}
                                />
                                <CardContent>
                                    {/* <Typography gutterBottom variant="h6" sx={{ color: 'text.secondary' }} component="div">
                                        Lizard
                                    </Typography> */}
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography gutterBottom variant="h5" sx={{ color: 'text.secondary' }} component="div">
                                        $5464
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />
                                    </Typography>
                                </CardContent>
                                <div className='addCard'>
                                    <CardActions sx={{ justifyContent: 'center' }}>
                                        <Button variant="contained"> <AddShoppingCartIcon sx={{ marginRight: '15px' }} />ADD TO CART</Button>
                                    </CardActions>
                                </div>
                            </Card>
                        </Grid>
                    )
                }

            </Grid>
        </Container>

    );
};

export default Products;