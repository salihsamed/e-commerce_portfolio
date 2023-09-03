import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { setSearchInput } from '../../../redux/categorySlice';
import { useLocation } from 'react-router-dom';

const HeaderSearchBar = () => {

  const dispatch = useDispatch();
  const location=useLocation();
  const route=location.pathname.split('/')[1];


  const setInput = (e) =>{

      dispatch(setSearchInput(e.target.value))

  }


  return (
    <div className={`${route===""?"":"hidden "}relative h-5/6 max-sm:hidden`}>
        <div className='flex h-full'>
            <input type='text' onChange={setInput} placeholder='Type the product you are looking' className='inline-block 2xl:w-[26rem] xl:w-[26rem] lg:w-[23rem] md:w-80 max-md:w-72 h-full bg-gray-100 rounded-xl placeholder-gray-500 outline-none border-gray-100 focus:border-orange-400 transition-colors focus:bg-gray-50 text-sm pl-5' style={{borderWidth:3}}/>
            <a className='absolute top-3 right-3 text-orange-500'><BsSearch/></a>

        </div>



    </div>
  )
}

export default HeaderSearchBar