import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navbar";
import { HomePage } from "./components/homepage";
import { ProjectsPage } from "./components/projects";
import { AboutUsPage } from "./components/aboutpage";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
