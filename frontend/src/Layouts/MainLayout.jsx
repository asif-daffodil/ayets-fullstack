import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    return (
        <div>
            <ToastContainer position="bottom-right" />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;