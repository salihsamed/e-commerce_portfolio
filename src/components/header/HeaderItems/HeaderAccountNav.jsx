import React from 'react'
import {BsPerson} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsCart} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const HeaderAccountNav = () => {

  const navigate =useNavigate();
  const {carts} =useSelector(state=>state.carts)



  return (
    <div className='flex justify-between space-x-5 items-center'>

        

        <div onClick={()=>navigate('favorites')} className='cursor-pointer flex hover:text-orange-500 transition-colors items-center'>
        <AiOutlineHeart className='text-[21px] max-md:text-[24px] max-sm:text-[27px]'/><span className='max-md:hidden'>&nbsp;Favorites</span>
        </div>

        <div  onClick={()=>navigate('cart')} className='cursor-pointer flex hover:text-orange-500 transition-colors items-center relative'>
          <BsCart className='text-[20px] max-md:text-[22px] max-sm:text-[25px]'/>
          <span className='max-md:hidden'>&nbsp;Cart</span>
          <div className={`absolute bg-orange-500 rounded-full bottom-4 left-3 text-xs font-semibold px-[0.3rem]  ${carts.length>=10?"py-[0.1rem]":" "} text-white ${carts.length?"":"hidden"}`}>{carts.length}</div>
        </div>
        
        



    </div>
  )
}

export default HeaderAccountNav