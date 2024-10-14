import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const Merchandise = lazy(() => import('./pages/Merchandise'));

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Suspense fallback={<div className='text-center mt-52 font-extrabold text-5xl'>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/merchandise' element={<Merchandise />} />
          </Routes>
        </Suspense>
      </Router>
      <Footer />
    </>
  );
}

export default App;
