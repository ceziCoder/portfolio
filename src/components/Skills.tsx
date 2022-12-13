import React from 'react'
import { SiTypescript } from 'react-icons/si'
import { GrReactjs } from 'react-icons/gr'
import { SiTailwindcss } from 'react-icons/si'
import { DiLinux, DiNodejsSmall } from 'react-icons/di'
import { GiBookmarklet } from 'react-icons/gi'
import {motion} from 'framer-motion'
import { useTranslation, Trans } from 'react-i18next'

const langs: string | any = {
  en: { nativeName: 'English' },
  pl: { nativeName: 'polski' }
}

export const Skills = () => {
  
  const {t, i18n} = useTranslation()


  return (

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 40, type: 'spring', damping: 90 }} >
    <div className='mt-10'>
        <div className=" flex items-center justify-center">
          {Object.keys(langs).map((lng) => (
            <button
              className='m-1 p-1 text-sm  shadow-sm shadow-black rounded-lg cursor-pointer'
              type="submit"
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
            >
              {langs[lng].nativeName}
            </button>
          ))}
        </div>


      <div className='  p-4 mt-10  m-auto w-[80%] h-full   flex flex-col items-center justify-center  shadow-2xl italic text-md  '>

      <div className=''>

        <ul className=' m-4'>
          <Trans i18nKey='skill'>
              <li className='mb-8'>umiejętności:</li>
              </Trans>
          <span className='flex items-center text-lg m-2'>
            <img src='./src/assets/ts.png' className='h-6 w-6' />
            <li className='ml-2'>Typescript</li>
            <h2 className=''>------- 15%</h2>
          </span>
          <span className='flex items-center text-lg  m-2'>
            <img src='./src/assets/r.png' className='h-7 w-7' />
            <li className='ml-2'>React</li>
            <h2 className=''>------- 30%</h2>
          </span>



          <hr className='' />
          <span className='flex items-center text-lg m-2'>
            <img src='./src/assets/tw.png' className='h-8 w-8' />
            <li className='ml-1'>Tailwind</li>
            <h2 className=''>------- 70%</h2>
          </span>
          <hr className='' />
          <span className='flex items-center text-lg m-2'>
            <img src='./src/assets/l.png' className='h-6 w-6' />
            <li className='ml-4'>Linux</li>
            <h2 className=''>------- 20%</h2>
          </span>
          <hr className='' />
          <span className='flex items-center text-lg  m-2'>
            <img src='./src/assets/n.png' className='h-8 w-8' />
            <li className='ml-2'>Node.js</li>
            <h2 className=''>------- 15%</h2>
          </span>
          <hr className='' />
          <span className='flex items-center text-lg m-2'>
            <img src='./src/assets/e.png' className='h-7 w-7' />
            <li className='ml-2'>English</li>
            <h2 className=''>------- 30%</h2>
          </span>

        </ul>
          </div>
      </div>





    </div>
    </motion.div>
  )
}
