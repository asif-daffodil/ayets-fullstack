import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import { toast } from "react-toastify";

const Home = () => {
    toast.success("Robin is in the class")
    return (
        <div>
            <Helmet>
                <title>Home page</title>
            </Helmet>
            <Hero />
        </div>
    );
};

export default Home;