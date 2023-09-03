import React from 'react'
import Logo from '../../../assets/MRENDYOL.png'
import { useNavigate } from 'react-router-dom'

const HeaderLogo = () => {

  const navigate=useNavigate();
  return (

    
    <div className='flex items-center'>
        
            <img src={Logo}  className='h-full w-[full] max-sm:h-[auto] max-sm:w-[120px] cursor-pointer' title='Shop Z' onClick={()=>navigate('/')}></img>
        


    </div>
  )
}

export default HeaderLogo