"use client";

import React, { MutableRefObject, useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

// Main component that renders the entire section
export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
      {/* Large text header */}
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
        ASTRO<span className="text-indigo-500">.</span>
      </h2>
      <Cards /> {/* Render the Cards component */}
    </section>
  );
};

// Component that renders all the draggable cards
const Cards = () => {
  // Create a ref for the container to constrain card movement
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={containerRef} className="absolute inset-0 z-10">
      {/* Render multiple Card components with different props */}
      <Card
        containerRef={containerRef}
        src="/images/astronaut.png"
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="/images/astronaut-2.png"
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="/images/astronaut-3.png"
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="/images/astronaut-4.png"
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src="/images/astronaut-5.png"
        alt="Example image"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src="/images/astronaut-6.png"
        alt="Example image"
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-24 md:w-48"
      />
      {/* More Card components... */}
    </div>
  );
};

// Props interface for the Card component
interface Props {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className?: string;
}

// Individual Card component
const Card = ({
  src,
  alt,
  top,
  left,
  rotate,
  containerRef,
  className,
}: Props) => {
  // State to manage the z-index of the card
  const [zIndex, setIndex] = useState(0);

  // Function to update z-index when the card is clicked
  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");
    let maxZIndex = -Infinity;

    // Find the highest z-index among all cards
    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );
      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    // Set this card's z-index to be on top
    setIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex} // Update z-index when clicked
      src={src}
      alt={alt}
      drag // Make the image draggable
      dragConstraints={containerRef} // Constrain movement to the container
      dragElastic={0.65} // Add some elasticity to the drag
      style={{ top, left, rotate, zIndex }} // Position and rotate the card
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
    ></motion.img>
  );
};
