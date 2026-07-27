import { BrowserRouter, Route, Routes } from "react-router-dom";
import Goals from "../pages/Goals";
import Achievements from "../pages/Achievements";
import SendMessage from "../pages/SendMessage";
import Interests from "../pages/Interests";
import MainLayout from "../layouts/MainLayouts";
import Projects from "../pages/Projects";
import Section from "../pages/Section";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Section />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/goals" element={<Goals />} />
                    <Route path="/interests" element={<Interests />} />
                    <Route path="/achievements" element={<Achievements />} />
                    <Route path="/sendmessage" element={<SendMessage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;