import './App.css';
import { Routes, Route } from 'react-router-dom';
import MyUrls from './pages/MyUrls';
import FAQs from './pages/FAQs';
import Analytics from './pages/Analytics';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import Navbar from './Navbar';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MyUrls />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <Features />
      <Pricing />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
