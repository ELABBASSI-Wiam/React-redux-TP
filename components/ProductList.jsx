import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, deleteProduct } from "../redux/productSlice";

const ProductList = () => {
  const { items, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>  Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Products list 🛍️ </h2>
      {items.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
          <h3>{product.title}</h3>
          <p>{product.price} 💲</p>
          <button onClick={() => dispatch(deleteProduct({ id: product.id }))}>
             Delete product 🗑
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
