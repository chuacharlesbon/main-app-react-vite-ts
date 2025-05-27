import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import { Home } from './pages/home';
import { Test } from './pages/test';
import { Landing } from './pages/landing';
import { Footer } from './components/footer';
import { NavbarBootstrap } from './components/navbar';
import { useEffect } from 'react';
import { setNavigator } from './services/navigateService';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    setNavigator(navigate);
  }, [navigate]);

  return (
    <>
      <NavbarBootstrap />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/landing" element={<Landing />} />
        <Route element={<div style={{ fontSize: "20px" }}>404 Not Found</div>} path="*" />
      </Routes>
      <Footer />
    </>
  );
}

export default App
