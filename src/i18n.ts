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
						"Jestem samoukiem programistą, nie byłem na żadnym bootcampie. Moja przygoda rozpoczęła się od implementacji aplikacji Osmocom do telefonu Motorola c118 w środowisku Unix. Mój kolega, programista, zachęcił mnie do nauki.  Uczę się HTML, CSS, JavaScript, TypeScript, React, Tailwind, Node.js, Mongodg, Express, Git, Vite.js, React-Native, Expo, w nauce pomagają mi dokumentacja, YouTube, Stack Overflow i narzędzia AI. Moim atutem jest to, że nigdy się nie poddaję. Jednak mam słabość do myślenia wielowątkowego. Lubię rozwiązywać problemy, jeśli nie bedzie internetu, zacznę czytać książki o programowaniu i rozwiążę problem, dlatego lubię programowanie",
					skill: 'umiejętności:',
				},
			},
			en: {
				translation: {
					description:
					"I'm a self-taught programmer, I haven't been to a functional bootcamp. My adventure with implementing the Osmocom application for the Motorola c118 phone in a Unix environment. My friend, a programmer, encouraged me to learn. I am learning HTML, CSS, JavaScript, TypeScript, React, Tailwind, Node.js, Mongodg, Express, Git, Vite.js, React-Native, Expo, learning to use documentation, YouTube, Stack Overflow and AI tool. My opinion is that he never gives up. However, I have a weakness for multi-threaded thinking. I like problems, if there is no internet, I will read a book about programming and I will solve the problem, that's why I like programming",
					skill: 'skills:',
				},
			},
		},
	})
export default i18n
