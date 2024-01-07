import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { animated, useSpring } from 'react-spring'
import { MdOutlineBackHand } from 'react-icons/md'
import { useTranslation, Trans } from 'react-i18next'
import { FaGithub } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const animationThree = {
	in: {
		opacity: 1,
		x: -0,
	},

	out: {
		opacity: 0,
		x: -800,
	},

	end: {
		opacity: 1,
		x: 0,
	},
}

const langs: string | any = {
	en: { nativeName: 'English' },
	pl: { nativeName: 'polski' },
}

export const Abouts = () => {
	const navigate = useNavigate()

	useEffect(() => {
		const handleKeyDown = (event: any) => {
			if (event.altKey && event.key === 'ArrowLeft') {
				navigate('/o')
			}
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}),
		[navigate]

	const animation = useSpring({
		from: { rotate: 0 },
		to: async (next) => {
			// Animate the rotation of the hand back and forth
			while (true) {
				await next({ rotate: -15 })
				await next({ rotate: 15 })
				await next({ rotate: -15 })
				await next({ rotate: 15 })
			}
		},
	})

	const { t, i18n } = useTranslation()

	return (
		<motion.div initial='out' animate='in' exit='out' variants={animationThree} transition={{ duration: 0.4 }}>
			<div className=' mt-6 flex flex-col items-center overflow-y-scroll '>
				<div className=' flex items-center justify-center m-4'>
					{Object.keys(langs).map((lng) => (
						<button
							className='m-1 p-1 text-sm  shadow-sm shadow-black rounded-lg cursor-pointer'
							type='submit'
							key={lng}
							onClick={() => i18n.changeLanguage(lng)}
							disabled={i18n.resolvedLanguage === lng}>
							{langs[lng].nativeName}
						</button>
					))}
				</div>

				<div className='overflow-visible p-4 m-auto w-[70%] h-full shadow-2xl flex flex-col items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-600'>
					<div className='flex items-center  w-20 p-2 gap-3'>
						<h1 className='italic break-words text-xl   '>Hej</h1>
						<animated.div style={animation} className=''>
							<MdOutlineBackHand size={22} />
						</animated.div>
					</div>
					<Trans i18nKey='description'>
						<h2 className=''>
							Jestem programistycznym samoukiem, nie byłem na żadnym bootcampie. Moja przygoda zaczela od implementacji
							aplikacji Osmocom do telefonu Motorola c118 w srodowisku Unix . Do nauki zachęcił mnie kolega
							programista.Ucze sie od okolo roku HTML, CSS, JavaScript, TypeScript, React, Tailwind, Node.js, Git,
							Vite.js, React-native, Expo ,w nauce pomagaja mi dokumetacja, youtube Stack Overflow, narzedzia Ai. Moj plus to że nigdy się
							nie poddaję. Mam jednak wadę wielowątkowości myśleniowa, Lubię rozwiązywać problemy,jak nie bedzie
							internetu zaczne czytac ksiazki o programowaniu i rozwize problem, dlatego lubię programowanie.
						</h2>
					</Trans>
				</div>
				<a href='https://github.com/ceziCoder' target='_blank' onClick={() => navigate('/o')}>
					<FaGithub className='w-[50px] h-[50px] cursor-pointer animate-pulse bg-black/30 rounded-full mt-6'></FaGithub>
					<span className=''>github</span>
				</a>
			</div>
		</motion.div>
	)
}
