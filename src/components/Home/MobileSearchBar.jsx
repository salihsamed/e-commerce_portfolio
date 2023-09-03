import React from 'react'
import {BsSearch} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { setSearchInput } from '../../redux/categorySlice';

const MobileSearchBar = () => {

    const dispatch = useDispatch();

    const setInput = (e) =>{

        dispatch(setSearchInput(e.target.value))
  
    }

  return (
   
        <div className='flex  relative mb-2 justify-center'>
            <input type='text' onChange={setInput} placeholder='Type the product you are looking' className='inline-block w-[99%] h-11 bg-gray-100 rounded-md placeholder-gray-500 outline-none border-gray-100 focus:border-orange-400 transition-colors focus:bg-gray-50 text-sm pl-5' style={{borderWidth:1}}/>
            <a className='absolute right-3 top-3 text-orange-500'><BsSearch/></a>

        </div>
    
  )
}

export default MobileSearchBar