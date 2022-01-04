import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useAuth from "../../../../Hooks/useAuth";
import { Alert, Button, Typography } from "@mui/material";

const MyOrders = () => {
  const { user, loading } = useAuth();
  const [orders, setOrders] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch(
      `https://whispering-waters-68649.herokuapp.com/customersinfo?data.email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  console.log(orders);
  const handleDeleteOrder = (id) => {
    const isDelete = window.confirm("Are You Sure to Delete?");
    if (isDelete) {
      fetch(
        `https://whispering-waters-68649.herokuapp.com/customersinfo/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setSuccess(true);
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  return (
    <>
      <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
        My Orders:
      </Typography>{" "}
      <hr />
      {success && (
        <Alert sx={{ my: 2 }} severity="success">
          ORDER DELETED SUCCESSFULLY
        </Alert>
      )}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row, index) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                {/* <TableCell component="th" scope="row">
                        {row.model}
                    </TableCell> */}
                <TableCell>{row.cart[0]?.name}</TableCell>
                <TableCell>{row.data?.email}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleDeleteOrder(row._id)}
                    style={{ backgroundColor: "#4298F9" }}
                    variant="contained"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MyOrders;
