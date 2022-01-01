import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadProduct } from "../../../../Redux/productsSlice";
const Products = () => {
  const data = useSelector((state) => state.products.product);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://whispering-waters-68649.herokuapp.com/electronicscollection")
      .then((res) => res.json())
      .then((data) => {
        dispatch(loadProduct(data));
      });
  }, []);

  console.log(data);

  return <div></div>;
};

export default Products;
