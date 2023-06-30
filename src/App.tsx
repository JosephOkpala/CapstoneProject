import './App.css';
import { Routes, Route } from 'react-router-dom';
import MyUrls from './pages/MyUrls';
import FAQs from './pages/FAQs';
import Analytics from './pages/Analytics';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import Navbar from './Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthContextProvider } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import ProtectedRoutes from './ProtectedRoutes';
import Add from './pages/Add';
import Qrcode from './pages/Qrcode';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<MyUrls />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          >
            <Route path="add" element={<Add />} />
            <Route path="qrcode" element={<Qrcode />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
