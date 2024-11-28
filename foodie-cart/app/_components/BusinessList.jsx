'use client'

import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import GlobalApi from "../_utils/GlobalApi";
import BusinessItem from './BusinessItem'
import BusinnessItemSkeleton from './BusinessItemSkeleton'

// Liste des restaurants populaires selon la catégorie sélectionnée
function BusinessList() {

    const params = useSearchParams()

    const [category, setCategory] = useState('all')

    const [businessList, setBusinessList] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        params && setCategory(params.get('category'))
        params && getBusinessList(params.get('category'))
    }, [params])

    const getBusinessList = (category_) => {
        setLoading(true)
        GlobalApi.getBusiness(category_)
            .then((res) => {
                console.log(res);
                setBusinessList(res?.restaurants)
                setLoading(false)
            });
    }

    return (
        <div className='mt-5'>
            <h2 className='font-bold text-2xl'>Popular {category} restaurants</h2>
            <h2 className='font-bold text-primary'>{businessList?.length} Results</h2>

            {/* Affichage des restaurants selon la catégorie sélectionnée */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-3'>
                {
                    !loading ?
                        businessList && businessList.map((restaurants, index) => (
                            <BusinessItem key={index} business={restaurants} />
                        )) :
                        [...Array(8)].map((_, index) => (
                            <BusinnessItemSkeleton key={index} />
                        ))
                }
            </div>
        </div>
    )
}

export default BusinessList
