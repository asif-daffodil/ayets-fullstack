import { Helmet } from "react-helmet";
import Hero from "../components/Hero";

const Home = () => {
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