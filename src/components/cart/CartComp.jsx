import React from 'react'
import {BsTrash} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { changeQuantity, removeFromCard } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

const CartComp = ({cart}) => {

    const dispatch=useDispatch();
    const navigate=useNavigate();

   

  return (
    <div className='flex items-center justify-items-center text-center mb-3 shadow p-2'>

    <div className='w-1/12 max-sm:w-3/12 flex justify-center cursor-pointer' onClick={()=>navigate(`/product/${cart?.id}`)}><img src={cart?.image} className='h-[150px] w-auto max-sm:h-[90px]'/></div>
    <div className='font-bold w-4/12 cursor-pointer max-sm:w-2/12 max-sm:text-sm' onClick={()=>navigate(`/product/${cart?.id}`)}>{cart?.title}</div>
    <div className='w-1/12 max-sm:w-2/12 flex items-center gap-1 max-sm:gap-0 justify-center'><button  className={`rounded-lg max-sm:rounded-md border-gray-200 border-2 w-5 h-5 max-sm:w-4 max-sm:h-4 text-xl bg-gray-200 flex justify-center items-center ${cart?.quantity===1?" ":"hover:bg-gray-300"} `}  onClick={()=>dispatch(changeQuantity({id:cart?.id,type:"dec"}))} disabled={cart?.quantity===1}><AiOutlineMinus/></button>&nbsp;{cart?.quantity}&nbsp;<button  className='rounded-lg border-gray-200 border-2 w-5 h-5 text-xl max-sm:rounded-md max-sm:w-4 max-sm:h-4 bg-gray-200 flex justify-center items-center hover:bg-gray-300' onClick={()=>dispatch(changeQuantity({id:cart?.id,type:"inc"}))}><AiOutlinePlus/></button></div>
    
    <div className='w-3/12 max-sm:w-2/12 max-sm:text-sm'>{cart?.price} $</div>
    <div className='w-2/12 max-sm:w-2/12 max-sm:text-sm'>{+(cart?.quantity*cart?.price).toFixed(3)} $</div>
    <div className='text-gray-400 w-1/12 flex justify-center  hover:text-orange-500 cursor-pointer' onClick={()=>dispatch(removeFromCard(cart?.id))}><BsTrash size={22}/></div>
    
    

    </div>  
  )
}

export default CartComp