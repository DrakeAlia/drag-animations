import React from "react"; 
import { motion } from "framer-motion";

export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
        ASTRO<span className="text-indigo-500">.</span>
      </h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  return (
    <div className="absolute inset-0 z-10">
      <Card />
    </div>
  );
};

const Card = () => {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -90,
        left: -90,
      }}
      className="size-56 bg-white"
    ></motion.div>
  );
};
