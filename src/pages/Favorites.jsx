import React from 'react'
import FavoritesComp from '../components/favorites/FavoritesComp';
import { useDispatch, useSelector } from 'react-redux'

const Favorites = () => {
    const dispatch = useDispatch();
    const {favorites}=useSelector(state=>state.carts)


    

  return (
    <div><div className='text-2xl mb-7 mt-2 max-sm:text-center'><span className='font-semibold max-sm:px-2'>Favorites</span> ({favorites?.length} products)</div>{
        
            favorites?.length > 0 ?<div>



        <div className='flex items-center text-center mb-3'>

            <div className='w-1/12 max-sm:w-3/12'></div>
            <div className='font-bold w-4/12'></div>
            <div className='w-4/12 font-bold max-sm:w-2/12'>Price</div>
            <div className='w-3/12'></div>

        </div>

                {               
                    favorites?.map((favorite,i)=>(


                        <FavoritesComp key={i} product={favorite}/>
                        ))

                }

                
                

                
            </div>: <div className='max-sm:text-center'>There is no favorite product.</div>
        
        
        
        
        
        }</div>
  )
}

export default Favorites