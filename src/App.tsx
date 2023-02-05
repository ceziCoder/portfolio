import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import { Home } from './page/Home'
import React from 'react'
import { Contact } from './page/Contact'
import { Skill } from './page/Skill'
import { About } from './page/About'
import { ErrorPage } from './page/ErrorPage'
import { AnimatePresence } from 'framer-motion'
import { Shared } from './page/Shared'
import { useTranslation, Trans } from 'react-i18next'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'




export const App = () => {
  const shouldRedirect = true

  const {t, i18n} =useTranslation()
  

  return (
    <>
      <I18nextProvider i18n={i18n}>
      <Router>
        <AnimatePresence mode='wait' exitBeforeEnter>

          <Routes>
             
            <Route path='/'element={<Shared/>}>
              <Route index  element={<Home/>}/>
                <Route path='umiejetnosci' element={ <Skill /> } >
               
              </Route>
                <Route path='o' element={ <About />  } />

                <Route path='/contact' element={<Contact /> } />

                <Route path='*' element={!shouldRedirect   ? <ErrorPage /> : <Navigate to='/'/>} />
              
            </Route>
          </Routes>
        </AnimatePresence>

      </Router>

      </I18nextProvider>












    </>
  )
}


export default App
