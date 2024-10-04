"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import project1 from '../public/1-.jpg'
import { FaGithub } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const card = [
  {
    title: "Forest Adventure",
    src: project1,
  },

];


interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}




const exampleData: TimelineEntry[] = [
  {
    title: "Project 1",
    content: (
      <div className="flex flex-col items-center  justify-center">
        <p>My first traffic light project on the atmega328p microcontroller written in C on registers.</p>
        <p>Date: August 1, 2024</p>
        <img src={project1}></img>

        <a className="" href='https://github.com/ceziCoder/Atmega328p-microcontrollers' target='_blank' >
          <FaGithub className='w-[50px] h-[50px] cursor-pointer animate-pulse bg-black/30 rounded-full mt-6'></FaGithub>
          <span className=''>github</span>
        </a>
      </div>
    ),
  },
  {
    title: "Project 2",
    content: (
      <div>
        <p> 2.</p>
        <p>Date: 00-00-0000</p>
        <img src="https://via.placeholder.com/150/transparent" alt="empty image" className="w-full h-auto" />
      </div>
    ),
  },
  {
    title: "Project 3",
    content: (
      <div>
        <p> 3.</p>
        <p>Date: 00-00-0000</p>
        <img src="https://via.placeholder.com/150/transparent" alt="empty image" className="w-full h-auto" />


      </div>
    ),
  },
];

export const Electronics = ({ data = exampleData }: { data?: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 ml-16 text-black dark:text-white max-w-4xl">
          Microcontrollers
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">

        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-pink-500 via-blue-500 to-transparent from-[0%] via-[30%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};