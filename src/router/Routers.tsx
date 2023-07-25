import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import { Station } from "../pages/Station";
const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path={import.meta.env.VITE_BASE_PATH + '/'} element={<Station />} />
                    <Route path={import.meta.env.VITE_BASE_PATH + '/login'} element={<Login />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;