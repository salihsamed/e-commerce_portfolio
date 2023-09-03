import React from 'react'
import { useDispatch } from 'react-redux'
import { alterFavorites } from '../../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
import {BsTrash} from 'react-icons/bs'

const FavoritesComp = ({product}) => {

  const dispatch=useDispatch()
  const navigate=useNavigate()
  return (
    <div className='flex items-center justify-items-center text-center mb-3 shadow p-2'>

      <div className='w-1/12 max-sm:w-3/12 flex justify-center' onClick={()=>navigate(`/product/${product?.id}`)}><img src={product?.image} className='h-[150px] max-sm:h-[90px] w-auto cursor-pointer'/></div>
      <div className='font-bold w-4/12 ' ><span className='cursor-pointer max-sm:text-sm' onClick={()=>navigate(`/product/${product?.id}`)}>{product?.title}</span></div>
      <div className='w-4/12 max-sm:w-2/12'>{product?.price} $</div>
      <div className='text-gray-400 w-3/12 flex justify-center  hover:text-orange-500 cursor-pointer' onClick={()=>dispatch(alterFavorites({id:product?.id}))}><BsTrash size={22}/></div>
    
    

    </div>  
  )
}

export default FavoritesComp