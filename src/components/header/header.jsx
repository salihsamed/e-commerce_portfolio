import React from 'react'
import HeaderLogo from './HeaderItems/HeaderLogo'
import HeaderSearchBar from './HeaderItems/HeaderSearchBar'
import HeaderAccountNav from './HeaderItems/HeaderAccountNav'

const header = () => {
  return (
    <>
    <div className='flex justify-between h-11 mt-8 mb-2 align-middle max-sm:px-5'>
        <HeaderLogo/>
        <HeaderSearchBar/>
        <HeaderAccountNav/>
    </div>
    <hr/>
    </>
  )
}

export default header