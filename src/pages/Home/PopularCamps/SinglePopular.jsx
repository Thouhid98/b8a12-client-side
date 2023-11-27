import { Link } from "react-router-dom";

const SinglePopular = ({ camp }) => {
    const { _id, name, campfees, location, specialservice, professionals, targetaudience, date, image } = camp;

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure  ><img className='w-[400px] h-[400px] ' src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="font-medium">Camp Fees: ${campfees}</p>
                    <p>Vanue: {location}</p>
                    <h2>Date: {date}</h2>
                    <p>Special Services: {specialservice}</p>
                    <h2 className="font-medium text-blue-600">Professionals: {professionals}</h2>
                    <p>Target Audiounce: {targetaudience}</p>
                    <div className="card-actions justify-end">

                        <Link to={`/camp-details/${_id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePopular;