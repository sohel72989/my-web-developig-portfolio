import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Contact from './Pages/Home/Contact/Contact';
import Information from './Pages/Home/Information/Information';
import Project from './Pages/Home/Project/Project';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/information" element={<Information />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
