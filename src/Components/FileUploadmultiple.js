import React, { useState } from 'react';
import axios from 'axios';
import './FileUploadmultiple.css';

const FileUploadmultiple = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [specificInformation, setSpecificInformation] = useState('');
  const [mrp, setMrp] = useState('');
  const [sp, setSp] = useState('');
  const [selectedFiles, setSelectedFiles] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productDescription', productDescription);
    formData.append('specificInformation', specificInformation);
    formData.append('mrp', mrp);
    formData.append('sp', sp);

    for (const file of selectedFiles) {
      formData.append('productImages', file);
    }

    try {
      await axios.post('http://localhost:5000/insert', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Product added successfully');
      alert('Product added successfully')
      // Add any additional logic or state updates as needed
    } catch (error) {
      console.error('Error adding product:', error);
      // Handle error, display a message, etc.
    }
  };

  return (
    <div className="file-upload-form">
      <h2>Upload Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input type="text" id="productName" className="form-control" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Product Description:</label>
          <textarea id="productDescription" className="form-control" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="specificInformation">Specific Information:</label>
          <textarea id="specificInformation" className="form-control" value={specificInformation} onChange={(e) => setSpecificInformation(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="mrp">MRP:</label>
          <input type="text" id="mrp" className="form-control" value={mrp} onChange={(e) => setMrp(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="sp">Selling Price (SP):</label>
          <input type="text" id="sp" className="form-control" value={sp} onChange={(e) => setSp(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="productImages">Upload Images:</label>
          <input type="file" id="productImages" className="form-control" onChange={handleFileChange} multiple />
        </div>
        <button type="submit" className="submit-btn">Upload Product</button>
      </form>
    </div>
  );
};

export default FileUploadmultiple;
