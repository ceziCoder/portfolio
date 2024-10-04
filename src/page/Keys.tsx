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
      <div className="py-20 mx-5  flex items-center justify-end">
        <Modal>
          <ModalTrigger className="bg-black/40 dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">

            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
              Moje narzedzia
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              <FaTools size={30} />
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>

              <div className="flex justify-center items-center">
                {images.map((image, idx) => (
                  <motion.div
                    key={"images" + idx}
                    style={{
                      rotate: Math.random() * 20 + 10,
                    }}
                    whileHover={{
                      scale: 1.5,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    whileTap={{
                      scale: 1.5,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                  >
                    <img
                      src={image.src}
                      alt=""
                      width="700"
                      height="700"
                      className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
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
