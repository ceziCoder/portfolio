import React, { FC } from 'react'
import { GiBrain } from "react-icons/gi"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import { motion } from 'framer-motion'
import Typed from 'react-typed'

export const Main = () => {
	const animationThree = {
		in: {
			opacity: 1,
			x: 0,
		},

		out: {
			opacity: 0,
			x: 800,
		},

		end: {
			opacity: 1,
			x: 0,
		},
	}

	let navigate = useNavigate()

	return (
		<motion.div initial='out' animate='in' exit='out' variants={animationThree} transition={{ duration: 0.4 }}>
			<div className=' w-full h-full    flex flex-col items-center justify-center overflow-y-auto  '>
				<div className='h-full   w-full flex-col items-center  bg-white  '>
					{/*}	<h3 className='text-xl  flex items-center justify-center'>Cezary Lachut dsfs</h3>*/}

					<Typed
						className='flex items-center justify-center ml-2 text-black/50 font-extrabold m-4 '
						strings={['Cezary Lachut']}
						typeSpeed={600}
						backSpeed={600}
						loop></Typed>
					
					<img
						src='./src/assets/cezi.jpg'
						className='h-[80px] w-[80px]  rounded-full  m-auto object-cover shadow-2xl'></img>
					
					<br />

					<div className='overflow-y-auto p-4 m-auto w-[80%] h-60 shadow-2xl flex items-center justify-center '>
						<p className='italic'>'Hello world'</p>
						<p className='break-words'></p>
					</div>
				</div>

				
			</div>
		</motion.div>
	)
}
