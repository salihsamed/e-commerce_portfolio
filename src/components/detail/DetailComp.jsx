import React, {useEffect, useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
import Rating from '@mui/material/Rating'
import { addToCard, clearCart, getCartTotal,alterFavorites} from '../../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const DetailComp = ({productInfo}) => {

    const [count,setCount]=useState(1)
    const dispatch=useDispatch();
    const {carts}=useSelector(state=>state.carts)
    const {favorites_ids} = useSelector(state=>state.carts)
    const [isContain,setisContain]=useState(false);


    useEffect(()=>{


        dispatch(getCartTotal())
        setisContain(favorites_ids.includes(productInfo?.id))
        



    },[dispatch,favorites_ids] )

    


    const increment = () =>{

        if(count<productInfo?.rating?.count)

        setCount(count+1)


    }

    const decrement = () =>{

        if(count>1){
        setCount(count-1)}

    }

    const addBasket = () =>{

        if(count>0){

        dispatch(addToCard({id:productInfo?.id,title:productInfo?.title,image:productInfo?.image,price:productInfo?.price,quantity:count}))
    
    }
        
    }

    const favorite = ()=>{

        dispatch(alterFavorites({id:productInfo?.id,title:productInfo?.title,price:productInfo?.price,image:productInfo?.image}))
    
      }

  return (
    <div className='flex pt-5 max-sm:flex-col'>

        <div className='w-1/2 h-[70vh] flex justify-center max-sm:items-center  max-sm:w-full max-sm:h-[40vh]'>
            <div className='w-4/5 h-4/5 max-sm:h-full max-sm:flex max-sm:justify-center'>
                <img src={productInfo?.image} className='h-full w-auto'/>
            </div>
        </div>

        <div className='w-1/2 max-sm:w-full'>
            <span className='text-3xl font-bold block text-center mb-2'>{productInfo?.title}</span>
            <span className='text-center block max-sm:px-1'>{productInfo?.description}</span>
            <div className='text-lg mt-5 flex items-center max-sm:flex max-sm:justify-center'><Rating name="read-only" precision={0.1} value={productInfo?.rating?.rate}  readOnly/><span className='ml-2 font-semibold'>{productInfo?.rating?.rate}</span></div>
            <div className='flex justify-center mt-10 items-center'>
                <button onClick={decrement} className='rounded-xl border-gray-200 border-2 w-9 h-9 text-xl bg-gray-200 flex justify-center items-center hover:bg-gray-300'><AiOutlineMinus/></button>
                <div className='w-10 h-10 flex justify-center items-center text-2xl'>{count}</div>
                <button onClick={increment} className='rounded-xl border-gray-200 border-2 w-9 h-9 text-xl bg-gray-200 flex justify-center items-center hover:bg-gray-300'><AiOutlinePlus/></button>


            </div>
            <div className='text-center text-xl mt-5'><span className='font-bold'>Count:</span>{productInfo?.rating?.count}</div>
            <div className='flex justify-center w-4/6 mx-auto mt-5 items-center max-sm:pb-10'>

                <a onClick={favorite} className={`mr-5 cursor-pointer ${isContain ? "text-orange-400 hover:text-gray-300": " text-gray-300 hover:text-orange-400"}`} ><AiFillHeart size={30}/></a>
                <button onClick={addBasket} className='py-2 px-4 bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-500 hover:to-orange-300 rounded text-white font-bold '>Add to Cart</button>

            </div>
            
        
            
            
            
        </div>
    </div>
  )
}

export default DetailComp




