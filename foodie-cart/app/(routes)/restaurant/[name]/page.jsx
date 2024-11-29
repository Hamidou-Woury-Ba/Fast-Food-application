'use client'

import GlobalApi from '@/app/_utils/GlobalApi'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Intro from '../_components/Intro'
import RestoTabs from '../_components/RestoTabs';

function RestaurantDetails() {

    const param = usePathname()

    const [restaurant, setRestaurant] = useState([])
    
    useEffect(() => {
        getRestaurantDetails(param.split('/')[2]);
    }, [param])

    const getRestaurantDetails = (restoSlug) => {
        GlobalApi.getBusinnesDetail(restoSlug)
            .then((res) => {
                console.log(res);
                setRestaurant(res.restaurant);
            });
    }

    return (
        <div>
            <Intro restaurant={restaurant} />
            <RestoTabs restaurant={restaurant} />
        </div>
    )
}

export default RestaurantDetails
