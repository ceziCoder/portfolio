import React from "react";
import { motion } from "framer-motion";

const animationTwo = {
  in: {
    opacity: 1,
    y: "0",
    scale: 1,
  },

  out: {
    opacity: 0,
    y: "0",
    scale: 0.2,
  },
};

export const Projects = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationTwo}
      transition={{ duration: 2 }}
    >
      <div className="flex items-center justify-center">
        <div className=" p-8 mt-40 w-[80%] h-60 shadow-2xl flex flex-col items-center justify-center ">
          <h4 className="m-4">Project:</h4>
          <p className="italic bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-600 m-2">
            <a target="_blank" href="https://cezi-chat-gpt.vercel.app">
              Cezi-ChatGPT
            </a>
            <hr></hr>
          </p>

          <p className="italic bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-600 m-2">
            <a
              target="_blank"
              href="https://image-uploader-client-blush.vercel.app"
            >
              Image-uploader
            </a>
            <hr></hr>
          </p>
          <p className="italic bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-600 m-2">
            <a
              target="_blank"
              href="https://find-multiplaces.vercel.app"
            >
              Find-MultiPlaces
            </a>
            <hr></hr>
          </p>
        </div>
      </div>
    </motion.div>
  );
};
