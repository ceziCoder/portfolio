import React from "react";
import image1 from '../public/4-.jpg';
import image2 from '../public/2-.jpg';
import image3 from '../public/3-.jpg';
import image4 from '../public/5-.jpg';
import image5 from '../public/7-.jpg';
import image6 from '../public/s1.svg'
import { motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../components/Modal";





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
]

export const Electronics = () => {
  return (
    <div className=" w-full h-screen overflow-auto md:flex md:justify-center md:items-center "
      style={{
        backgroundImage: `url(${image6})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>




      <div className=" flex justify-center items-center flex-col sm:flex-row flex-wrap  "



      >



                    {images.map((image, idx) => (
                      <motion.div
                        key={"images" + idx}
                        style={{
                          rotate: Math.random() * 20 + 18,
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
                          className="rounded-lg h-[12rem] w-[12rem] md:h-60 md:w-60 object-cover flex-shrink-0"
                        />
                        <h6 className="text-neutral-700 dark:text-neutral-300 text-center mt-2 text-sm">
                          {image.description}
                        </h6>
                      </motion.div>
                    ))}
                  </div>







            </div>

                  )
}