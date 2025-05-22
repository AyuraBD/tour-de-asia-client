import React from 'react'

const TravelGuide = () => {
  return (
    <div className='px-10 py-10'>
      <div className='mb-10 text-center'>
        <h3 className='text-3xl font-bold mb-2'>Our tourist guides</h3>
        <p className='text-gray-500'>Here is our tourist guides to help you to explore.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div className='p-4 rounded-2xl shadow-lg'>
          <h2 className="card-title text-2xl mb-2">John Doe</h2>
          <p>John Doe is a professional tourist guide. He has been working in this field for 10 years.</p>
        </div>

        <div className='p-4 rounded-2xl shadow-lg'>
          <h2 className="card-title text-2xl mb-2">Philip Martin</h2>
          <p>Jane Doe is a professional tourist guide. She has been working in this field for 8 years.</p>
        </div>

        <div className='p-4 rounded-2xl shadow-lg'>
          <h2 className="card-title text-2xl mb-2">Mark Smith</h2>
          <p>Mark Smith is a professional tourist guide. He has been working in this field for 5 years.</p>
        </div>
        <div className='p-4 rounded-2xl shadow-lg'>
          <h2 className="card-title text-2xl mb-2">Ali Azam</h2>
          <p>Mark Smith is a professional tourist guide. He has been working in this field for 5 years.</p>
        </div>
      </div>
    </div>
  )
}

export default TravelGuide