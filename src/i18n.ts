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
						' Jestem programistycznym samoukiem, nie byłem na żadnym bootcampie. Moja przygoda zaczęła się od prob implementacji oprogramowania Osmocom do Motoroli c118. Do nauki zachęcił mnie kolega programista.Ucze sie od okolo roku HTML, CSS, JavaScript, TypeScript, React, Tailwind, Node.js,w nauce pomagaja mi narzedzia AI i Stack Overflow.  Moj plus to że nigdy się nie poddaję. Mam jednak wadę wielowątkowości myśleniowa,  Lubię rozwiązywać problemy, dlatego lubię programowanie.',
					skill: 'umiejętności:',
				},
			},
			en: {
				translation: {
					description:
						'I am a self-taught programmer. I was not in any bootcamp. My journey began with the implementation of Osmocom software for Motorola C118. I was motivated by my friend programmer to never give up. However, I have a disadvantage in multi-threading. I enjoy problem-solving, which is why I like programming.',
					skill: 'skills:',
				},
			},
		},
	})
export default i18n
