import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && price) {
      dispatch(addProduct({ id: Date.now(), title, price }));
      setTitle("");
      setPrice("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input type="text" placeholder=" Product name" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="number" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <button type="submit">Add product ➕  </button>
    </form>
  );
};

export default ProductForm;
