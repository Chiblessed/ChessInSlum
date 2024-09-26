
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Merchandise from './pages/Merchandise';


function App() {

  return (
    <>

    <Router>
    <Navbar />
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/about' Component={About} />
      <Route path='/blog' Component={Blog} />
      <Route path='/contact' Component={Contact} />
      <Route path='/merchandise' Component={Merchandise} />

    </Routes>
    </Router>
       <Footer />
     
    </>
  )
}

export default App
