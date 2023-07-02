import React from 'react'
import { motion } from 'framer-motion'


const animationTwo = {

    in: {
        opacity: 1,
        y: '0',
        scale: 1,


    },

    out: {
        opacity: 0,
        y: '0',
        scale: 0.2,

    }

}






export const Projects = () => {
    return (
        <motion.div initial='out' animate='in' exit='out' variants={animationTwo} transition={{ duration: 2 }}>
            <div className='flex items-center justify-center'>

                <div className='overflow-y-auto p-4 mt-40 w-[80%] h-60 shadow-2xl flex items-center justify-center '>
                    <p className='italic bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-600'>
                        <h4 className='m-4'>Project:</h4>
                        
                        <a target='_blank' href='https://cezi-chat-gpt.vercel.app'>Cezi-ChatGPT</a>
                        <hr></hr>
                    </p>
                    <p className='break-words'></p>
                    <p className='italic bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-600'>
                        <h4 className='m-4'>Project:</h4>

                        <a target='_blank' href='image-uploader-client-blush.vercel.app'>Image-uploader</a>
                        <hr></hr>
                    </p>
                    <p className='break-words'></p>
                </div>




            </div>
        </motion.div>
    )
}
