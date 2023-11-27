import { useLoaderData } from "react-router-dom";

const CampDetails = () => {
    const campdetails = useLoaderData()
    // console.log(campdetails);
    const { name, campfees, location, specialservice, professionals, targetaudience, date, image, campdes } = campdetails
    // console.log(name);
    return (
        <>
            <div>

                <img className="lg:ml-[370px] pt-24 mb-3 lg:w-[600px] lg:h-[400px]" src={image} alt="" />
                <h2 className="text-5xl lg:w-[420px] lg:ml-[450px]  text-blue-500 font-bold mb-5 border-y-4 p-3 text-center">Camp Details</h2>
                <div className="flex gap-4 mx-auto lg:ml-[200px] ">
                    <div className="lg:w-[450px] pl-20 ">
                        <p className="text-xl font-bold mb-2">Camp Title: {name}</p>
                        <p className="text-black font-medium">Camp Fees: $ <span className="text-blue-600 font-medium">{campfees}</span></p>
                        <p>Location: {location}</p>
                        <p>Date & Time: {date}</p>
                        <p>Professionals: {professionals}</p>
                    </div>
                    <div className="lg:w-[550px]">
                        <p className="mt-9 text-black font-medium">Target Audience: {targetaudience}</p>
                        <p>Sepcial Services: {specialservice}</p>
                        <p> <span className="text-black font-medium">Details:</span> {campdes}</p>

                    </div>
                </div>
            </div>
        </>

    );
};

export default CampDetails;