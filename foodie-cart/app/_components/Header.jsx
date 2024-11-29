'use client';
import { Button } from '@/components/ui/button'
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import { Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { CartUpdateContext } from '../_context/CartUpdateContext'
import GlobalApi from '../_utils/GlobalApi';

function Header() {

    const { user, isSignedIn } = useUser()

    const { updateCard, setUpdateCard } = useContext(CartUpdateContext)

    const [cart, setCart] = useState([])

    useEffect(() => {
        if (user) {
            GetUserCart();
        }
    }, [user, updateCard]); 

    const GetUserCart = () => {
        GlobalApi.getUserCart(user?.primaryEmailAddress?.emailAddress)
            .then((res) => {
                console.log(res);
                setCart(res?.userCarts); 
            })
    };


    return (
        <div className='flex justify-between items-center py-6 pr-6 shadow-sm'>
            <Image src="/logo.png" alt="logo" width={200} height={200} />

            {/* Barre de recherche */}
            <div className='hidden md:flex border p-2 rounded-lg bg-gray-200 w-96'>
                <input type="text" className='bg-transparent w-full outline-none' />
                <Search />
            </div>

            {/* Login et sign-up */}
            {
                isSignedIn ?
                    <div className='flex items-center gap-3'>
                        <div className='flex gap-2 items-center'>
                            <ShoppingCart />
                            <label
                                className='p-1 px-3 rounded-full bg-slate-200'
                            >
                                {cart?.length}
                            </label>
                        </div>
                        <UserButton />
                    </div>
                    :
                    <div className='flex gap-5'>
                        <SignInButton mode='modal'>
                            <Button variant='outline'>Login</Button>
                        </SignInButton>

                        <SignUpButton mode='modal'>
                            <Button>Sign Up</Button>
                        </SignUpButton>
                    </div>
            }
        </div>
    )
}

export default Header
