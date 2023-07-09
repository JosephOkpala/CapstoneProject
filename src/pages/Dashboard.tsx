import { Link, Outlet, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Helmet } from 'react-helmet-async';
import '../styles/dashboard.css';

const Dashboard = () => {
  const { user, logOut } = UserAuth();

  async function handleLogOutAndGoHome() {
    try {
      await logOut();
      goHome('/');
    } catch (error) {
      console.log(error);
    }
  }
  const goHome = useNavigate();

  return (
    <div className="dashboard">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="sideBar">
        <div className="userProfile">
          <img src={user?.photoURL} alt="user profile" />
          <h3>{user?.displayName}</h3>
          <button className="logOut" onClick={handleLogOutAndGoHome}>
            Log out
          </button>
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
