"use client";

import React, { MutableRefObject, useRef } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

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
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={containerRef} className="absolute inset-0 z-10">
      <Card
        containerRef={containerRef}
        src="/images/astronaut.png"
        alt="Astronaut Image"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="/images/astronaut.png"
        alt="Astronaut Image"
        rotate="6deg"
        top="35%"
        left="25%"
        className="w-36 md:w-56"
      />
    </div>
  );
};

interface Props {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className?: string;
}

const Card = ({
  src,
  alt,
  top,
  left,
  rotate,
  containerRef,
  className,
}: Props) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
      style={{ top, left, rotate }}
      // dragMomentum={false}
      className={twMerge("absolute w-32 h-32", "md:w-64 md:h-64", className)}
    ></motion.img>
  );
};
