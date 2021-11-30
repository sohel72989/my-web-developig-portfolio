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
import Footer from './Pages/Home/Footer/Footer';
import Skills from './Pages/Home/Skill/Skills';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/information" element={<Information />} />
      <Route path="/project" element={<Project />} />
      <Route path="/projectDetails" element={<ProjectDetails />} />
      </Routes>
      <Footer></Footer>
  </BrowserRouter>
  );
}

export default App;
