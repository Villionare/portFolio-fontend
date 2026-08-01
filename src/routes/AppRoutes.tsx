import { BrowserRouter, Route, Routes } from "react-router-dom";
import Goals from "../pages/Goals";
import Achievements from "../pages/Achievements";
import MainLayout from "../layouts/MainLayouts";
import Projects from "../pages/Projects";
import Section from "../pages/Section";
import Skills from "../pages/Skills";
import About from "../pages/About";
import Education from "../pages/Education";
import Contact from "../pages/Contact";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Section />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/goals" element={<Goals />} />
                    <Route path="/achievements" element={<Achievements />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;