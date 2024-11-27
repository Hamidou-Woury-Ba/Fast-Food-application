import Image from 'next/image'
import React from 'react'

function BusinessItem({ business }) {
  return (
    <div className='grid grid-cols-1 sm:grid-col-2 md:grid-col-3 lg:grid-col-4 gap-7 mt-3'>
      <Image src={business.banner?.url} alt={business.name} width={500} height={130}/>
    </div>
  )
}

export default BusinessItem
