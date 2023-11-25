import PopularCamps from "../PopularCamps/PopularCamps";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularCamps></PopularCamps>
           <Testimonial></Testimonial>
           
        </div>
    );
};

export default Home;