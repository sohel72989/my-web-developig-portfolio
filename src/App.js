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
import ProjectDetails from './Pages/Home/Project/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/information" element={<Information />} />
      <Route path="/project" element={<Project />} />
      <Route path="/projectDetails" element={<ProjectDetails />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
