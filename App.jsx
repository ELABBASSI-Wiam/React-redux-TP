import React from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1> Product management 🛒</h1>
      <ProductForm />
      <ProductList />
    </div>
  );
};

export default App;
