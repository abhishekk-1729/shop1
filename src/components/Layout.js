import React from 'react'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <>

    <div className='p-5'>
      {children}
    </div>
    </>
  )
}
