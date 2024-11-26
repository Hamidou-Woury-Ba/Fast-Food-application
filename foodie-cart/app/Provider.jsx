import React from 'react'
import Header from './_components/Header'

function provider({children}) {
  return (
    <div>
      <Header />
        {children}
    </div>
  )
}

export default provider
