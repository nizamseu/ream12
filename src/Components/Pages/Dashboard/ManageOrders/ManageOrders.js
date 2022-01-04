import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    fetch("https://whispering-waters-68649.herokuapp.com/customersinfo")
      .then((res) => res.json())
      .then((data) => {
        console.log("daatat", data);
        setAllOrders(data);
      });
  }, [loading]);

  const handleUpdateStatus = (id) => {
    fetch(`https://whispering-waters-68649.herokuapp.com/customersinfo/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          isLoading(!loading);
        }
      });
  };
  return (
    <>
      <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
        Manage Orders:
      </Typography>{" "}
      <hr />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Client Name</TableCell>
              <TableCell>Client Address</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allOrders.map((row, index) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.productName}
                </TableCell>
                <TableCell>{row.displayName}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleUpdateStatus(row._id)}
                    style={{ backgroundColor: "goldenRod" }}
                    variant="contained"
                  >
                    {row.status}
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

export default ManageOrders;
