import React from 'react'

const TravelGuide = () => {
  return (
    <div className='px-10 py-10'>
      {/* Heading of About us */}
      <div className='text-center mb-5'>
        <h3 className='text-3xl font-semibold mb-2'>Travel guides</h3>
        <p className='text-gray-500'>Here is our travel guides to help tourists</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
          left
        </div>
        <div>
          right
        </div>
      </div>
    </div>
  )
}

export default TravelGuide