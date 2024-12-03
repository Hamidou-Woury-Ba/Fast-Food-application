'use client'
import React, { useEffect, useRef, useState } from 'react'
import Header from './_components/Header'
import { Toaster } from "@/components/ui/sonner"
import { CartUpdateContext } from "./_context/CartUpdateContext"

function provider({ children }) {

  const [updateCard, setUpdateCard] = useState(false)

  const [top, setTop] = useState(0);

  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <CartUpdateContext.Provider value={{ updateCard, setUpdateCard }}>
      <div className='px-10 md:px-20 relative'>
        <Header ref={navRef} top={top} />
        <Toaster />
        {children}
      </div>
    </CartUpdateContext.Provider>
  )
}

export default provider
