'use client'

import React, { useEffect, useState } from 'react';

const page = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        const result = await response.json();

        setUsers(result.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Client Side</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Name:</strong> {user.firstName} {user.lastName}
            <br />
            <strong>Age:</strong> {user.age}
            <br />
            <strong>Email:</strong> {user.email}
            {/* Add more properties as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
