import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css'; 
const ProductList = () => {
  // State to hold the list of products and loading status
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch products from the backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Show loading message while fetching data
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // Show error message if data couldn't be fetched
  if (products.length === 0) {
    return <div className="error">Oops! Unable to fetch products.</div>;
  }

  // Function to handle the 'Add' button click for a product
  const handleAddToCart = (productId) => {
    // Implement your logic to add the product to the cart here
    console.log(`Product with ID ${productId} added to the cart.`);
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-item">
            <img
              src={`http://localhost:5000/uploads/${product.productImage}`}
              alt={product.productName} 
              className="product-image"
            />
            <h3 className="product-name">{product.productName}</h3>
            {/* <p className="product-description">{product.productDescription}</p>
            <p className="product-specific-info">{product.specificInformation}</p>
            <p className="product-mrp">MRP: ₹{product.mrp}</p> */}
            <p className="product-sp">SP: ₹{product.sp}</p>&nbsp;&nbsp;&nbsp;
            <button className="add-button" onClick={() => handleAddToCart(product._id)}>
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;