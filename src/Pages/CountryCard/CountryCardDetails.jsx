import { useLoaderData } from 'react-router-dom'

const CountryCardDetails = () => {
  const {image, name, tourist_spot, location, country_name, seasonality, time, cost, visitors, description} = useLoaderData();
  
  return (
    <div className="px-4 lg:px-20 md:px-10 lg:py-10 md:py-8 py-6">
      <h1 className="text-4xl font-bold text-center mb-10">Details about {tourist_spot}</h1>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <img src={image} alt={name} className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full md:w-1/2">
      <p className="text-lg"><span className="font-semibold text-gray-400 mb-2">Tourist Spot:</span> {tourist_spot}</p>
      <p className="text-lg"><span className="font-semibold text-gray-400 mb-2">Location:</span> {location}</p>
      <p className="text-lg"><span className="font-semibold text-gray-400 mb-2">Country:</span> {country_name}</p>
      <p className="text-lg"><span className="font-semibold text-gray-400 mb-2">Season:</span> {seasonality}</p>
      <p className="text-lg"><span className="font-semibold text-gray-400 mb-2">Travel time:</span> {time}</p>
      <p className="text-lg"><span className="font-semibold text-gray-400 mb-2">Estimate cost:</span> {cost}</p>
      <p className="text-lg"><span className="font-semibold text-gray-400 mb-2">Yearly visitors:</span> {visitors}</p>
      <p className="text-lg"><span className="font-semibold text-gray-400 mb-2">Description:</span> {description}</p>
        </div>
      </div>
    </div>
  )
}

export default CountryCardDetails