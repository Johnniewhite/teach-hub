import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ApplyPage from './components/ApplyPage';
import Programs from './pages/Programs'; 
import Gallery from "./pages/Gallery"

const App: React.FC = () => {
  return (
    <Router>
      <Layout programPrice={0}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path="/programs" element={<Programs />} /> {/* Add this line */}
          {/* <Route path="/donate" element={<Donate />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;