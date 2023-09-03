import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../redux/cartSlice';
import CartComp from '../components/cart/CartComp';

const Cart = () => {

    const dispatch = useDispatch();
    const {carts,totalAmount,itemCount}=useSelector(state=>state.carts)


    useEffect(()=>{


        dispatch(getCartTotal())


    },[dispatch,carts])

  return (
    <div><div className='text-2xl mb-7 mt-2 max-sm:text-center'><span className='font-semibold'>Cart</span> ({carts?.length} products)</div>{
        
            carts?.length > 0 ?<div>



        <div className='flex items-center text-center mb-3'>

            <div className='w-1/12 max-sm:w-3/12'></div>
            <div className='font-bold w-4/12 max-sm:w-2/12'></div>
            <div className='w-1/12 font-bold max-sm:w-2/12'>Count</div>

            <div className='w-3/12 font-bold max-sm:w-2/12'>Price</div>
            <div className='w-2/12 font-bold max-sm:w-2/12'>Total Price</div>
            <div className='text-red-500 w-1/12 flex justify-end hover:text-red-600 cursor-pointer'></div>

        </div>

                {               
                    carts?.map((cart,i)=>(


                        <CartComp key={i} cart={cart}/>
                        ))

                }

                <div className='text-right max-sm:mr-2'><span className='font-bold'>Total Amount: </span>{+totalAmount.toFixed(3)} $</div>
                <div className='flex justify-end mt-5 max-sm:mr-2'><button className="text-white bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-500 hover:to-orange-300 font-medium rounded-lg text-lg px-10 py-2.5 text-center">Checkout</button></div>

                
            </div>: <div className='max-sm:text-center'>Your cart is empty.</div>
        
        
        
        
        
        }</div>
  )
}

export default Cart