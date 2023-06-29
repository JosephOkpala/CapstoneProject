import React from 'react';
import { UserAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = UserAuth();
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome {user?.displayName}!</h2>
    </div>
  );
};

export default Dashboard;
