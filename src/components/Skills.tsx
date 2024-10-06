import React from 'react'
import { SiTypescript } from 'react-icons/si'
import { GrReactjs } from 'react-icons/gr'
import { SiTailwindcss } from 'react-icons/si'
import { DiLinux, DiNodejsSmall } from 'react-icons/di'
import { GiBookmarklet } from 'react-icons/gi'
import {motion} from 'framer-motion'
import { useTranslation, Trans } from 'react-i18next'
import img2 from '../public/ts.png'
import img3 from '../public/r.png'
import img4 from '../public/tw.png'
import img5 from '../public/l.png'
import img6 from '../public/n.png'
import img7 from '../public/e.png'
import img8 from '../public/mdb.png'
import img9 from '../public/git.png'
import img10 from '../public/express.png'
import img11 from '../public/rN.png'
import img12 from '../public/expo.svg'
import img13 from '../public/wp.png'
import img14 from '../public/C.png'

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
              <span className='flex items-center text-m  m-2'>
                <img src={img14} className='h-7 w-7' />
                <li className='ml-2'>C</li>
                <h2 className='ml-1'> -- 8%</h2>
              </span>

              <span className='flex items-center text-m  m-2'>
                <img src={img3} className='h-5 w-5' />
                <li className='ml-2'>React</li>
                <h2 className='ml-1'>-- 16%</h2>
              </span>
              <hr className='' />
              <span className='flex items-center text-m m-2'>
                <img src={img11} className='h-5 w-5' />
                <li className='ml-2'>React-Native</li>
                <h2 className=''>--14%</h2>
              </span>
              <hr className='' />

              <span className='flex items-center text-m m-2'>
                <img src={img12} className='h-12 w-12' />
                <li className='ml-2'>Expo</li>
                <h2 className='ml-1'>-- 11%</h2>
              </span>
              <hr className='' />

          <hr className='' />
          <span className='flex items-center text-m m-2'>
            <img src={img4} className='h-8 w-8' />
            <li className='ml-1'>Tailwind</li>
            <h2 className='ml-1'>--- 24%</h2>
          </span>
          <hr className='' />
          <span className='flex items-center text-m m-2'>
            <img src={img5}className='h-6 w-6' />
            <li className='ml-4'>Linux</li>
            <h2 className='ml-1'>--- 35%</h2>
          </span>
          <hr className='' />
          <span className='flex items-center text-m  m-2'>
            <img src={img6} className='h-8 w-8' />
            <li className='ml-2'>Node.js</li>
            <h2 className='ml-1'>- 12%</h2>
          </span>
              <hr className='' />
              <span className='flex items-center text-m m-2'>
                <img src={img10} className='h-8 w-8' />
                <li className='ml-1'>Express</li>
                <h2 className='ml-1'>- 7%</h2>
              </span>

              <hr className='' />
              <span className='flex items-center text-m m-2'>
                <img src={img8} className='h-7 w-7' />
                <li className='ml-2'>Mongodb</li>
                <h2 className='ml-1'>- 10%</h2>
              </span>
              <hr className='' />
              <span className='flex items-center text-m m-2'>
                <img src={img9} className='h-7 w-7' />
                <li className='ml-2'>Git</li>
                <h2 className='ml-1'>-- 10%</h2>
              </span>
              <hr className='' />
              <span className='flex items-center text-m m-2'>
                <img src={img2} className='h-6 w-6' />
                <li className='ml-2'>Typescript</li>
                <h2 className='ml-1'>- 6%</h2>
              </span>


              <hr className='' />
              <span className='flex items-center text-m m-2'>
                <img src={img7} className='h-5 w-5' />
                <li className='ml-2'>English</li>
                <h2 className='ml-1'>--- 34%</h2>
              </span>
              <span className='flex items-center text-m  m-2'>
                <img src={img13} className='h-6 w-6' />
                <li className='ml-2'>WordPress</li>
                <h2 className='ml-1'>- 25%</h2>
              </span>

        </ul>
          </div>
      </div>





    </div>
    </motion.div>
  )
}
