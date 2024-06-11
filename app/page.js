"use client";
import React, { useState, useEffect } from "react";
import "@shopify/polaris/build/esm/styles.css";
import { ProductTable } from "./components/ProductTable";
import { SelectedProductModal } from "./components/SelectedProductModal";
import { Header } from "./components/Header";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalActive, setModalActive] = useState(false);

  // Fetch products from the API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProducts(data);
        console.log(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);
  console.log(products);

  const handleRowClick = (product) => {
    setSelectedProduct(product);
    setModalActive(true);
  };

  const handleClose = () => {
    setModalActive(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <div>
        <Header />
        <ProductTable products={products} onRowClick={handleRowClick} />
        {selectedProduct && (
          <SelectedProductModal
            active={modalActive}
            handleClose={handleClose}
            product={selectedProduct}
          />
        )}
      </div>
    </>
  );
};

export default Home;
