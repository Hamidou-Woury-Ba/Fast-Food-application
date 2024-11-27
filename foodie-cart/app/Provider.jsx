import React from 'react'
import Header from './_components/Header'

function provider({children}) {
  return (
    <div className='px-10 md:px-20 relative'>
      <Header />
        {children}
    </div>
  )
}

export default provider
