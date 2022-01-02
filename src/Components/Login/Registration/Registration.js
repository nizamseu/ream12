import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const Register = () => {
    const [registerData, setRegisterData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }
    const handleRegisterSubmit = e => {
        // registration functionality here
        console.log(registerData);
        e.preventDefault();
    }
    return (
        <Box>
            <Navbar />
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} sx={{ mt: 15 }}>
                        <Typography variant="h4">Please Register</Typography>
                        <form onSubmit={handleRegisterSubmit}>
                            <TextField
                                label="Your Name"
                                type="text"
                                name="name"
                                onBlur={handleOnBlur}
                                sx={{ width: "70%", m: 'auto' }}
                                variant="standard" />
                            <TextField
                                label="Your Email"
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                sx={{ width: "70%", m: 'auto' }}
                                variant="standard" />
                            <TextField
                                label="Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                sx={{ width: "70%", m: 'auto' }}
                                variant="standard" />
                            <TextField
                                label="Confirm Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                sx={{ width: "70%", m: 'auto' }}
                                variant="standard" />
                            <br /> <br />
                            <Button type="submit" style={{ backgroundColor: '#0B1C2E', textAlign: 'left', marginBottom: '15px' }} variant="contained">Register</Button>
                        </form>

                        {/* <NavLink style={{textDecoration: 'none', fontWeight: 600}} to="/login">
                        Already Registered? Please Login
                    </NavLink> */}
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <img width="90%" height="500px" src="https://i.ibb.co/sp4kCWS/login.jpg" alt="" />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box>
    );
};


export default Register;