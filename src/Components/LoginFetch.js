
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/fetch');
        const result = await response.json();
        setData(result); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Fetched Data:</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            Name: {item.loginName}, Password: {item.loginPassword}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default LoginFetch