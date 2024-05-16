import { Routes, Route, useLocation } from "react-router-dom";
import { NavBar } from "./components/navbar";
import { HomePage } from "./components/homepage";
import { ProjectsPage } from "./components/projects";
import { AboutUsPage } from "./components/aboutpage";
import { Footer } from "./components/footer";
import { VounteerPage } from "./components/volunteerpage";
import { ScrollToTop } from "./utill/scroll-to-top";
import { AnimatePresence } from "framer-motion";

function App() {
  
  const location = useLocation()

  return (
    <>
      <NavBar />
      <ScrollToTop/>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}  >
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/volunteer" element={<VounteerPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
