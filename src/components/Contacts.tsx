import React from 'react'
import { motion } from 'framer-motion'


const animationTwo = {

  in: {
    opacity: 1,
    y: 0,
    scale: 1,


  },

  out: {
    opacity: 0,
    y: '-100vh',
    scale: 0.2,

  }

}






export const Contacts = () => {
  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationTwo} transition={{ duration: 0.5 }}>
    <div className='flex items-center justify-center'>

      <div className='overflow-y-auto p-4 mt-40 w-[80%] h-60 shadow-2xl flex items-center justify-center '>
          <p className='italic bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-600'>email: cezicoder1981@duck.com</p>
        <p className='break-words'></p>
      </div>




    </div>
    </motion.div>
  )
}
 