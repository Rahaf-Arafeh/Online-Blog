
import './App.css';
import Register from './Register';
import Blog from './Blog';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='blog' element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
