import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Formfile.css'; // Import your CSS file

const Formfile = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProducts();
  }, []); // Run this effect only once on component mount

  return (
    <div className='FormDataMERN'>
      <h2 className='formHeading'>Product List</h2>
      <ul className='productList'>
        {products.map((product) => (
          <li key={product._id} className='productItem'>
            <h3 className='productName'>{product.productName}</h3>
            
            <h5 className='imageLabel'>Product Image:</h5>
            <p className='imageContainer'>
              {product.productImages.map((image, index) => {
                const imageUrl = `http://localhost:5000/uploads/${image}`;
                const altText = `${product.productName} - Image ${index + 1}`;
                console.log('Image URL:', imageUrl);
                
                return (
                  <img
                    className='productImage'
                    key={index}
                    src={imageUrl}
                    alt={altText}
                  />
                );
              })}
            </p>
            <p className='productDescription'>Product Description: {product.productDescription}</p>
            <p className='productSpecification'>Specification: {product.specificInformation}</p>
            <p className='productMRP'>MRP: {product.mrp}</p>
            <p className='productSP'>SP: {product.sp}</p>
            <p className='productId'>ID: {product._id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Formfile;
