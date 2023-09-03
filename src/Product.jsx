import React, { Component, useEffect, useState } from 'react'
import {AiFillHeart} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip';
import { alterFavorites } from './redux/cartSlice';
import Rating from '@mui/material/Rating'

const Product = ({product}) => {

  const [isContain,setisContain]=useState(false);

  const dispatch=useDispatch()

  const navigate =  useNavigate()

  const {favorites_ids} = useSelector(state=>state.carts)

  
 


//   useEffect(()=>{

    
//     setisContain(favorites_ids.includes(product?.id))
//     console.log(favorites_ids.includes(product?.id))
    


// },[favorites_ids])

useEffect(()=>{


  setisContain(favorites_ids.includes(product?.id))
  


})


   



  const favorite = ()=>{

    dispatch(alterFavorites({id:product?.id,title:product?.title,price:product?.price,image:product?.image}))

  }

  const deneyek = (e) =>{


    if(e.target.parentElement.id=="AddToFavorite" || e.target.id=="AddToFavorite" || e.target.parentElement.parentElement.id=="AddToFavorite"){

      e.preventDefault();
    }
    
    else{   
      navigate(`product/${product?.id}`)
    }


  }


  return (
    <div className='col-span-1 cursor-pointer'>
       

<div className='p-5 2xl:h-[500px] xl:h-[450px] lg:h-[400px] max-lg:h-[350px] max-sm:h-[300px]  shadow relative' id='vaow' onClick={deneyek}>
<a href='#' id='AddToFavorite' className='z-10'>
    <div className={`absolute top-4 left-1  border-2 p-1 rounded-full bg-white ${isContain ? "text-orange-400 hover:text-gray-300": "hover:text-orange-400 text-gray-300"} `} id='AddToFavorite' onClick={favorite}>
      
     
      <AiFillHeart  size={22}/>
      
    </div>
    </a>
    <div className='h-3/5 max-sm:h-2/5 flex justify-center rounded-lg' >
        
        <img src={product.image} className='h-full w-auto'></img>
        
    </div>
    <div className='text-center font-semibold h-1/5 max-sm:h-2/5 overflow-hidden'><Tooltip title={product.title} placement='bottom-start'><p className='three_dot_text'>{product.title}</p></Tooltip></div>
    <div className='flex flex-col items-center justify-center h-1/5'>
            <span className="text-2xl font-bold text-black mb-5 max-sm:mb-0 max-sm:text-base">{product.price}$</span>
            <div className='flex items-center max-sm:mt-2'> <Rating name="read-only" precision={0.1} value={product?.rating?.rate} sx={{fontSize:"1.2rem"}}  readOnly/><span className='ml-2 font-semibold max-sm:hidden'>{product?.rating?.rate}</span>  </div>
             
    </div>
    
        
   

</div>


    
    </div>
  )
}

export default Product