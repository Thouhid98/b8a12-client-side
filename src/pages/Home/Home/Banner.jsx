import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/Best-Medical-Website-Design-and-WordPress-Themes.jpg'
import img2 from '../../../assets/medical-kit-corona-virus-stay-safe-campaign-editable-realistic-background-vector.jpg'
const Banner = () => {
    return (
        <div>
            <div >
            <Carousel >
                <div  >
                    <img  src={img1} />
                    {/* <p className="legend">Our Latest Campaign</p> */}
                </div>
                <div>
                    <img   src={img2} />
                    
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    
                </div>
            </Carousel>
            </div>
        </div>
    );
};

export default Banner;