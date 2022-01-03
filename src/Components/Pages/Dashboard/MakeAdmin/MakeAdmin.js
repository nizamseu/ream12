import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = {email}
        fetch('https://boiling-earth-11841.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true);
            }
        })
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} sx={{mt: 15}}>
                    <Typography sx={{fontSize: '25px', fontWeight: 'bold'}}>
                        Enter Email Address :
                    </Typography>
                <form onSubmit={handleAdminSubmit}>
                    <TextField
                    sx={{width: '60%'}}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" 
                    /> <br /> <br />
                    <Button type="submit" variant="outlined">Make Admin</Button>
                </form>
                {success && <Alert sx={{mt: 5}} severity="success">ADMIN CREATED SUCCESSFULLY</Alert>}
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <img width="100%" src="https://i.ibb.co/JjQ3DkZ/admin.jpg" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default MakeAdmin;