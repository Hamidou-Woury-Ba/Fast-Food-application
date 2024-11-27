'use client'

import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import GlobalApi from "../_utils/GlobalApi";
import BusinessItem from './BusinessItem'

function BusinessList() {

    const params = useSearchParams()

    const [category, setCategory] = useState('all')

    const [businessList, setBusinessList] = useState([])

    useEffect(() => {
        params && setCategory(params.get('category'))
        params && getBusinessList(params.get('category'))
    }, [params])

    const getBusinessList = (category_) => {
        GlobalApi.getBusiness(category_)
            .then((res) => {
                console.log(res);
                setBusinessList(res?.restaurants)
            });
    }

    return (
        <div className='mt-5'>
            <h2 className='font-bold text-2xl'>Popular {category} restaurant</h2>
            <h2 className='font-bold text-primary'>{businessList?.length} Results</h2>

            <div>
                {businessList && businessList.map((restaurants, index) => (
                    <BusinessItem key={index} business={restaurants} />
                ))}
            </div>
        </div>
    ) 
}

export default BusinessList
