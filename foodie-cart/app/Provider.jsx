'use client'
import React, { useState } from 'react'
import Header from './_components/Header'
import { Toaster } from "@/components/ui/sonner"
import { CartUpdateContext } from "./_context/CartUpdateContext"

function provider({ children }) {

  const [updateCard, setUpdateCard] = useState(false)

  return (
    <CartUpdateContext.Provider value={{updateCard, setUpdateCard}}>
      <div className='px-10 md:px-20 relative'>
        <Header />
        <Toaster />
        {children}
      </div>
    </CartUpdateContext.Provider>
  )
}

export default provider
