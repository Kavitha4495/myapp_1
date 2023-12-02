import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Fetchdatabyid = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUserData, setSelectedUserData] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5005/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleUserSelection = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:5005/users/${userId}`);
      setSelectedUserData(response.data);
      setSelectedUserId(userId);
    } catch (error) {
      console.error(`Error fetching data for user with ID ${userId}:`, error);
    }
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id} onClick={() => handleUserSelection(user._id)}>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Gender: {user.gender}</p>
            id: {user._id}
          </li>
        ))}
      </ul>

      {selectedUserData && (
        <div>
          <h2>Selected User Data</h2>
          <p>First Name: {selectedUserData.firstName}</p>
          <p>Last Name: {selectedUserData.lastName}</p>
          <p>Email: {selectedUserData.email}</p>
          <p>Gender: {selectedUserData.gender}</p>
          <p>id: {selectedUserId}</p>
        </div>
      )}
    </div>
  );
};
export default Fetchdatabyid;