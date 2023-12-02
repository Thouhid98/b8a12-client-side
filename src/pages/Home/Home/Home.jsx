import Faqsection from "../Faqsection/Faqsection";
import Team from "../Faqsection/Team/Team";
import PopularCamps from "../PopularCamps/PopularCamps";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularCamps></PopularCamps>
           <Faqsection></Faqsection>
           <Testimonial></Testimonial>
           <Team></Team>
           
        </div>
    );
};

export default Home;