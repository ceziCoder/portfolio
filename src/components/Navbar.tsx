import React from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { Skills } from './Skills'
import { AiFillHome, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { GiSkills } from 'react-icons/gi'
import { MdContactMail } from 'react-icons/md'
import { FaUserAlt } from 'react-icons/fa'
import { VscTools } from 'react-icons/vsc'
import axios, { Axios } from 'axios'
import i18n from '../i18n'
import { useTranslation, Trans } from 'react-i18next'



const langs: string | any = {
	en: { nativeName: 'English' },
	pl: { nativeName: 'polski' }
}


export const Navbar = () => {

	const { t, i18n } = useTranslation()




	/*
	type WeatherData = {
		main: {
			temp: number
			pressure: number
			humidity: number
		}
		clouds: {
			all: number
		}
	}
	
	const [weatherData, setWeatherData] = useState(null)
	const [loading, setLoading] = useState(false)

	const url = `https://api.openweathermap.org/data/2.5/weather?q=Mielec&appid=${process.env.REACT_PUBLIC_WEATHER_KEY}`

	const fetchWeather = () => {
		
		setLoading(true)
		axios
			.get(url)
			.then((res) => {
				setWeatherData(res.data)
				console.log(res.data)
			})
			.catch((error) => console.error(error))
		
		setLoading(false)
		if (weatherData)
		{
			
		}

		if (loading)
		{
			// wyświetl informację o pobieraniu danych
		}
	}



	*/
	return (
		<div className=' sticky top-0  backdrop-blur-sm bg-gradient-to-r from-black/70 to-white w-full h-[60px] shadow-xl shadow-green z-[100]  '>
			<div className='flex  items-center  justify-around w-full h-full px-2 2xl:px-16  '>
				<div className='w-full  flex items-center justify-around'>
				
					<span className=''>
						<Link to='/' className=''>
							<AiFillHome className='' size={29} style={{ color: 'white' }} />
						</Link>
					</span>
					<span className=''>
						<Link to='/o'>
							<FaUserAlt size={25} style={{ color: 'white' }} />
						</Link>
					</span>

					<span className=''>
						<Link to='/umiejetnosci'>
							<VscTools size={27} style={{ color: 'white' }} />
						</Link>
					</span>
				
					<span className=''>
						<Link to='/contact'>
							<MdContactMail size={34} style={{ color: 'white' }} />
						</Link>
					</span>
					<span className=''>
						<Link to='/project'>
							<AiOutlineFundProjectionScreen size={34} style={{ color: 'white' }} />
						</Link>
					</span>


					

					{/*
				<div onClick={handleNav} className='  md:hidden  '>
					<BiMenu size={25} style={{ color:'black'}} />
				</div>
				
				<div className={nav ? ' fixed left-0 top-0 w-full h-screen bg-black/50 ' : ''}>
					<div
						className={
							nav
								? 'fixed  left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-r from-black/30 to-white p-10 ease-in duration-500'
								: 'fixed left-[-100%] top-0 p-10 ease-in duration-500 '
						}>
						<div>
							<div className='flex w-full items-center justify-between '>
								<div onClick={handleNav} className='rounded-full shadow-md shadow-zinc-50 p-3 cursor-pointer bg-zinc-100'>
									<AiOutlineClose />
								</div>
							</div>
							<div className='border-b border-gray-300 my-4'>
								<p className='w-[85%] md:[90%] py-4'>lets bild</p>
							</div>
						</div>
						<div className='flex flex-col w-[25%]'>
							<Link to='/contact' >
							<div  className='rounded-full shadow-md shadow-zinc-50 p-3 cursor-pointer bg-zinc-100'>
								<MdContactMail size={25} />
								
							</div>
							</Link>
								
								
									<Link to='/'>
										<AiFillHome className='outline rounded-3xl' size={30} style={{color:'white'}} >
											
										</AiFillHome>
									</Link>
								
								
							
						</div>
						
					</div>
				</div>
					*/}
				</div>
			</div>
		</div>
	)
}
