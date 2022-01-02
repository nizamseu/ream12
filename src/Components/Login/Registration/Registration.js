import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const { createUser } = useAuth();
  const [registerData, setRegisterData] = useState({});
  const [display, setDisplay] = useState("none");
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };
  const handleRegisterSubmit = (e) => {
    // registration functionality here
    console.log(registerData);
    if (registerData.password === registerData.password2) {
      createUser(registerData);
      e.target.reset();
      setDisplay("none");
    } else {
      setDisplay("block");
    }

    e.preventDefault();
  };
  return (
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
              sx={{ width: "70%", m: "auto" }}
              variant="standard"
            />
            <TextField
              label="Your Email"
              type="email"
              name="email"
              onBlur={handleOnBlur}
              sx={{ width: "70%", m: "auto" }}
              variant="standard"
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              onBlur={handleOnBlur}
              sx={{ width: "70%", m: "auto" }}
              variant="standard"
            />
            <TextField
              label="Confirm Password"
              type="password"
              name="password2"
              onBlur={handleOnBlur}
              sx={{ width: "70%", m: "auto" }}
              variant="standard"
            />
            <br /> <br />
            <p style={{ color: "red", display: display }}>Password Not Match</p>
            <Button
              type="submit"
              style={{
                backgroundColor: "#0B1C2E",
                textAlign: "left",
                marginBottom: "15px",
              }}
              variant="contained"
            >
              Register
            </Button>
          </form>

          {/* <NavLink style={{textDecoration: 'none', fontWeight: 600}} to="/login">
                        Already Registered? Please Login
                    </NavLink> */}
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img
            width="90%"
            height="500px"
            src="https://i.ibb.co/sp4kCWS/login.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
