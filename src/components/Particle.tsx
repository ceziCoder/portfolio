import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"
import { useCallback } from 'react';
import { useMemo } from 'react';

export const Particle = () => {

  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any | undefined) => {
    await console.log(container);
  }, [])





  return (
    <div className='hidden md:block'>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#fffffff",
            },
          },
          fpsLimit: 140,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#000000",
            },
            links: {
              color: "#000000",
              distance: 130,
              enable: true,
              opacity: 0.2,
              width: 0.5,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.5,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: false,
        }}
      />
    
    
    
    
    
    
    </div>
  )
}


