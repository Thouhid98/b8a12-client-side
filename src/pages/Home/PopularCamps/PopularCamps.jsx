import img from '../../../assets/mens-health.avif'
const PopularCamps = () => {
    return (
        <div>
            <h2 className="text-5xl text-blue-500 font-bold mb-5 border-y-4 p-3 text-center">Popular Medical Camps</h2>

            <div className="flex ml-4">
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure  ><img className='w-[400px] h-[400px] ' src={img} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Our Popular Name</h2>
                        <p>Camp Fees $120</p>
                        <p>Vanue</p>
                        <h2>Date: 12-Nov-2023</h2>
                        <p>Specialized Services Provided</p>
                        <h2>Professionals</h2>
                        <p>Target Audiounce</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>


                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img className='w-[400px] h-[400px] ' src={img} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Our Popular Name</h2>
                        <p>Camp Fees $120</p>
                        <p>Vanue</p>
                        <h2>Date: 12-Nov-2023</h2>
                        <p>Specialized Services Provided</p>
                        <h2>Professionals</h2>
                        <p>Target Audiounce</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default PopularCamps;