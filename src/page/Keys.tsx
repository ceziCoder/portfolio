"use client";
import { Navbar } from "../components/Navbar";
import { Cards } from "../components/Card";
import project1 from "../public/1_p.jpg";
import { FaTools } from "react-icons/fa";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../components/Modal";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import image1 from '../public/4-.jpg';
import image2 from '../public/2-.jpg';
import image3 from '../public/3-.jpg';
import image4 from '../public/5-.jpg';
import image5 from '../public/7-.jpg'
import { Button } from "../components/Moving-border";

export function Keys() {

  const testimonials = [

  ];

  const images = [
    {
      src: image1,
      description: "Launch",
    },
    {
      src: image2,
      description: "Launch",
    },
    {
      src: image3,
      description: "Autel  Xhorse",
    },
    {
      src: image4,
      description: "Xhorse",
    },
    {
      src: image5,
      description: "Launch",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="py-2 mx-5 flex justify-end items-start ">

        <Modal>

          <ModalTrigger className="bg-transparent  dark:bg-white dark:text-black text-black flex justify-center group/modal-btn">
            <Button borderRadius="1.5rem"
              className="p-1 bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <span className="group-hover/modal-btn:translate-x-40 text-center text-s transition duration-500 shadow-sm ">

                  My toolkit

              </span>

            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute top-0  transition duration-500 text-white z-20">
              <FaTools size={25} color="black" style={{marginTop: '8px'}}/>
              </div>
            </Button>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>

              <div className=" flex justify-center items-center flex-col sm:flex-row flex-wrap">

                {images.map((image, idx) => (
                  <motion.div
                    key={"images" + idx}
                    style={{
                      rotate: Math.random() * 20 + 12,
                    }}
                    whileHover={{
                      scale: 2.0,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    whileTap={{
                      scale: 1.8,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                  >
                    <img
                      src={image.src}
                      alt=""
                      width="800"
                      height="800"
                      className="rounded-lg h-[12rem] w-[12rem] md:h-40 md:w-40 object-cover flex-shrink-0"
                    />
                    <h6 className="text-neutral-700 dark:text-neutral-300 text-center mt-2 text-sm">
                      {image.description}
                    </h6>
                  </motion.div>
                ))}
              </div>

            </ModalContent>
          </ModalBody>

        </Modal>
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">

          </div>

      </div>


    </>
  );
}