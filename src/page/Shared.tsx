import React from 'react'
import { Main } from '../components/Main'
import { Navbar } from '../components/Navbar'
import { Particle } from '../components/Particle'
import { Outlet } from 'react-router-dom'



export const Shared = () => {
    return (
        <>

            <Outlet/>
            
        </>
    )
    }