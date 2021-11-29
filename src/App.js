import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Contact from './Pages/Home/Contact/Contact';
import Information from './Pages/Home/Information/Information';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/information" element={<Information />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
