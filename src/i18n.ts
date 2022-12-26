import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

const i18n = i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		fallbackLng: 'pl',
		debug: true,
		detection: {
			order: ['queryString', 'cookie'],
		},
		resources: {
			pl: {
				translation: {
					description:
						"Jestem samoukiem programistą, nie byłem na żadnym bootcampie. Moja przygoda rozpoczęła się od implementacji aplikacji Osmocom do telefonu Motorola c118 w środowisku Unix. Mój kolega, programista, zachęcił mnie do nauki. Od około roku uczę się HTML, CSS, JavaScript, TypeScript, React, Tailwind, Node.js, Mongodg, Express, Git, Vite.js, w nauce pomagają mi dokumentacja, YouTube, Stack Overflow i narzędzia AI. Moim atutem jest to, że nigdy się nie poddaję. Jednak mam słabość do myślenia wielowątkowego. Lubię rozwiązywać problemy, jeśli nie bedzie internetu, zacznę czytać książki o programowaniu i rozwiążę problem, dlatego lubię programowanie",
					skill: 'umiejętności:',
				},
			},
			en: {
				translation: {
					description:
						'I am a self-taught programmer, I have not been to any bootcamp. My adventure started with the implementation of the Osmocom application to the Motorola c118 phone in the Unix environment. My colleague, a programmer, encouraged me to learn. I have been learning HTML, CSS, JavaScript, TypeScript, React, Tailwind, Node.js,Mongodb, Express, Git, Vite.js for about a year, documentation, YouTube, Stack Overflow, and AI tools help me in learning. My plus is that I never give up. However, I have a weakness for multitasking thinking. I like to solve problems, if there is no internet, I will start reading books on programming and solve the problem, that s why I like programming.',
					skill: 'skills:',
				},
			},
		},
	})
export default i18n
