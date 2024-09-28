import React from 'react'
import img1 from '../public/cezi.jpg'
import { ReactTyped } from "react-typed"
import img2 from '../public/screen.jpg'





export const Screen = () => {
    const divStyle = {
        backgroundImage: `url(${img2})`, // Zmiennej img2 musisz przypisać odpowiednią ścieżkę do obrazu.
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      };


  return (
      <div className='h-screen w-screen' style={divStyle}>
          
      <ReactTyped
      className='flex items-center justify-center ml-2 absolute bottom-[110px] left-[390px] text-white text-2xl font-extrabold m-4 '
      strings={['Programming']}
      typeSpeed={600}
      
      ></ReactTyped>

  <img
      src={img1}
      className='h-[480px] w-[450px]  rounded-full  m-auto object-cover shadow-2xl  opacity-30 absolute left-[120px] top-[230px]' ></img>



    </div>
  )
}
