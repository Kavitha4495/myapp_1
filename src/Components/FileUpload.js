import React, { useState } from 'react';
import axios from 'axios';

const FileUpload= () => {
  const [formData, setFormData] = useState({
    productName: '',
    productImage: null,
    productDescription: '',
    specificInformation: '',
    mrp: '',
    sp: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      productImage: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {

      const response = await axios.post('http://localhost:5000/insert', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response);
      setError('');
      alert('Product added successfully.');
    } catch (error) {
      console.error(error);
      setError('Internal Server Error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Product Name:</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Product Image:</label>
            <input
              type="file"
              name="productImage"
              onChange={handleImageChange}
              required
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Product Description:</label>
            <textarea
              name="productDescription"
              value={formData.productDescription}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Specific Information:</label>
            <textarea
              name="specificInformation"
              value={formData.specificInformation}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>MRP:</label>
            <input
              type="number"
              name="mrp"
              value={formData.mrp}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>SP:</label>
            <input
              type="number"
              name="sp"
              value={formData.sp}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
        </div>
        <button type="submit" disabled={submitting} className="btn btn-dark">
          {submitting ? 'Adding Product...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default FileUpload