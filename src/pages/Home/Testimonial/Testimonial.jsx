// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { Rating } from '@smastrom/react-rating'
// import '@smastrom/react-rating/style.css'


import { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';


const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    console.log(reviews);
    const axiosPublic = useAxiosPublic()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosPublic.get('/all-reviews');
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <h2 className="text-5xl font-bold mb-5 border-y-4 p-3 text-center">Testimonials</h2>

            <Swiper
                    pagination={{
                        // type: 'progressbar',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                           

                            <div className='m-20 text-center'>
                                <p className='w-[500px]  lg:ml-[310px] mb-3'>{review.campname}</p>
                                <h3 className='text-2xl font-bold text-[#D99904]'>{review.feedback}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
        </div>
    );
};

export default Testimonial;