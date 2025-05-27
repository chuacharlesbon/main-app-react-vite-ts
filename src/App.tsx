import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Home } from './pages/home';
import { Test } from './pages/test';
import { Landing } from './pages/landing';
import { Footer } from './components/footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/landing" element={<Landing />} />
          <Route element={<div style={{ fontSize: "20px" }}>404 Not Found</div>} path="*" />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App
