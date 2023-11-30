import { useEffect, useState } from 'react';
import img from '../../../assets/mens-health.avif'
import SinglePopular from './SinglePopular';


const PopularCamps = () => {
    const [popular, setPopular] = useState([]);
    console.log(popular);

    useEffect(() => {
        fetch('http://localhost:5000/popular-camps')
            .then(res => res.json())
            .then(data => setPopular(data))

    }, [])

    return (
        <div>
            <h2 className="text-5xl text-blue-500 font-bold mb-5 border-y-4 p-3 text-center">Popular Medical Camps</h2>

            {/* <div className='grid grid-cols-2 gap-5 p-5'>
                {
                    popular?.map(camp =><SinglePopular key={camp._id} camp={camp}></SinglePopular>  )
                }
            </div> */}

            <div className='grid grid-cols-2 gap-5 p-5'>
                {
                    popular?.map(camp =><SinglePopular key={camp._id} camp={camp}></SinglePopular>  )
                }
            </div>
            
        </div>
    );
};

export default PopularCamps;