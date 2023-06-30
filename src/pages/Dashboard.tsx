import { Link, Outlet } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import '../styles/dashboard.css';

const Dashboard = () => {
  const { user } = UserAuth();
  return (
    <div className="dashboard">
      <div className="sideBar">
        <div className="userProfile">
          <img src={user?.photoURL} alt="user profile" />
          <h3>{user?.displayName}</h3>
          <button className="logOut">Log out</button>
        </div>
      </div>
      <div className="mainDiv">
        <h1>Welcome back {user?.displayName}</h1>
        <div className="sideBarLinks">
          <div>
            <Link to="add">
              <h2>Add</h2>
            </Link>
          </div>
          <div>
            <Link to="qrcode">
              <h2>QrCode</h2>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
