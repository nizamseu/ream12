import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const Category = () => {
    return (
        <>
            <Grid container spacing={2} >
                <Grid item xs={6} md={3} >
                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height=""
                            image="https://www.lenovo.com/medias/lenovo-laptops-thinkpad-t-series-t14s-gen2-intel-hero.png?context=bWFzdGVyfHJvb3R8ODA4OTR8aW1hZ2UvcG5nfGgwMC9oOTQvMTE0NjgzNDU5MzM4NTQucG5nfGY2NGM1ODUyNmRlMDZiZjJiN2IzOWQ4Zjg2ZjEyOTNiY2QwNzUzMzY5M2M4ODk0YTgzNDEwOTRhMGI2OTQxNDU"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" sx={{ textAlign: 'center' }} component="div">
                                Laptop
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} md={3} >
                    <Card sx={{ maxWidth: 345, }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height=""
                            image="https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_25.jpg?scl=1"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Mobile
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={3} md={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            style={{ height: '80%' }}
                            image="https://www.sony-asia.com/image/f1231591e8a1e2fe4e5b6ad229a756c9?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Tv
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} md={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            style={{ height: '80%' }}
                            image="https://expertvagabond.com/wp-content/uploads/best-travel-camera-guide-1-900x600.jpg.webp"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Camera
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>


        </>
    );
};

export default Category;