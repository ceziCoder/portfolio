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
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
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
      <div className="py-40 mx-5  flex items-center justify-end">
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
      </div>
      );
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <Cards items={testimonials} direction="right" speed="slow" />
      </div>
    </>
  );
}
