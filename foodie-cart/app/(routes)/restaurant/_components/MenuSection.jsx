import { Button } from '@/components/ui/button'
import { SquarePlus } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

// Menu Section Component
function MenuSection({ restaurant }) {

  const [menuItemList, setMenuItemList] = useState([])

  useEffect(() => {
    restaurant?.menu && FilterMenu(restaurant.menu[0].category)
  }, [restaurant])

  // Filtrer les menus par categorie
  const FilterMenu = (category) => {
    const result = restaurant?.menu?.filter((item) => item.category === category)
    console.log(result)
    setMenuItemList(result[0])
  }

  return (
    <div>
      <div className='grid grid-cols-4 mt-2'>
        <div className='hidden md:flex flex-col mr-10 gap-2'>
          {
            restaurant?.menu?.length > 0 ? (
              restaurant.menu.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className='flex justify-start'
                  onClick={() => FilterMenu(item.category)}
                >
                  {item.category}
                </Button>
              ))
            ) : (
              <div>Pas de menu pour cette categorie</div>
            )
          }
        </div>

        <div className='md:col-span-3 col-span-4'>
          <h2 className='font-extrabold text-lg'>{menuItemList.category}</h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 '>
            {menuItemList?.menuItem?.length > 0 ? (
              menuItemList.menuItem.map((item, index) => (
                <div key={index} className='p-2 flex gap-3 border rounded-xl hover:border-primary cursor-pointer'>
                  <Image
                    src={item.productImage.url}
                    alt={item.name}
                    width={120}
                    height={120}
                    className='object-cover h-[120px] rounded-xl' />

                  <div className='flex flex-col gap-1'>
                    <h2 className='font-bold'>{item.name}</h2>
                    <h2>{item.price}</h2>
                    <h2 className='text-sm text-gray-400 line-clamp-2'>{item.description}</h2>
                    <SquarePlus />
                  </div>
                </div>
              ))
            ) : (
              undefined
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default MenuSection