"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import project1 from "../public/1-.jpg";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
"use client";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/TracingBeam";
import { WobbleCard } from "../components/Wobble-card"

export function Electronics() {
  return (
    <TracingBeam className="px-4">
      <div className="max-w-2xl mx-10 antialiased pt-4 relative ">
        <WobbleCard containerClassName=" bg-gradient-to-r from-blue-500 to-blue-200 shadow-xl shadow-blue-400 mb-4 col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Microcotrollers AVR
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            My first project on atmega328p written in C on registers.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName=" mb-4 col-span-1 lg:col-span-3 backdrop-blur-sm bg-gradient-to-r from-black/10 to-white shadow-xl shadow-black/70 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] flex justify-center items-center">

          <img
            src={project1}
            width={600}
            height={600}
            alt="linear demo image"
            className="     object-cover rounded-2xl"
          />
        </WobbleCard>

        <WobbleCard containerClassName="shadow-lg shadow-pink-300 mb-4 col-span-1 lg:col-span-3 bg-pink-300 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] flex justify-center items-center">

          <img
            //src={project1}
            width={600}
            height={600}

            className="     object-cover rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName=" mb-4 col-span-1 lg:col-span-3 bg-blue-400 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">

            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">

            </p>
          </div>

        </WobbleCard>
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: "AVR",
    image: project1

  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>

        </p>


      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
