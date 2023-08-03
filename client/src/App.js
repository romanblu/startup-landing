import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { Home, Product, About, Contact, Error} from './pages'
import { Navbar } from './components';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Error />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
