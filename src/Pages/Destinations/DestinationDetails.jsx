import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DestinationDetails = () => {
  const { id } = useParams()
  const [destinationDetails, setDestinationDetails] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/destination/${id}`)
      .then(res => res.json())
      .then(data => setDestinationDetails(data))
  }, [id])
  if (!destinationDetails) {
    return <div className="flex justify-center items-center h-screen">
            <progress className="progress w-56"></progress>
          </div>
  }
  return (
    <div className="px-4 lg:px-20 md:px-10 lg:py-10 md:py-8 py-6">
      <h1 className="text-4xl font-bold text-center mb-10">{destinationDetails.name}</h1>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <img src={destinationDetails.image} alt={destinationDetails.name} className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg"><span className="font-semibold text-gray-400 mb-2">Tourist Spot:</span> {destinationDetails.tourist_spot}</p>
          <p className="text-lg"><span className="font-semibold text-gray-400 mb-2">Location:</span> {destinationDetails.location}</p>
          <p className="text-lg"><span className="font-semibold text-gray-400 mb-2">Country:</span> {destinationDetails.country_name}</p>
          <p className="text-lg"><span className="font-semibold text-gray-400 mb-2">Season:</span> {destinationDetails.seasonality}</p>
          <p className="text-lg"><span className="font-semibold text-gray-400 mb-2">Travel time:</span> {destinationDetails.time}</p>
          <p className="text-lg"><span className="font-semibold text-gray-400 mb-2">Estimate cost:</span> {destinationDetails.cost}</p>
          <p className="text-lg"><span className="font-semibold text-gray-400 mb-2">Yearly visitors:</span> {destinationDetails.visitors}</p>
          <p className="text-lg"><span className="font-semibold text-gray-400 mb-2">Description:</span> {destinationDetails.description}</p>
        </div>
      </div>
    </div>
  )
}

export default DestinationDetails