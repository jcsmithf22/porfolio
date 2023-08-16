import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorOuterX = useMotionValue(-100);
  const cursorOuterY = useMotionValue(-100);
  const width = useMotionValue(32);
  const height = useMotionValue(32);
  const borderRadius = useMotionValue(16);

  const springConfig = { damping: 50, stiffness: 1000 };
  const cursorXSpring = useSpring(cursorOuterX, springConfig);
  const cursorYSpring = useSpring(cursorOuterY, springConfig);
  const widthSpring = useSpring(width, springConfig);
  const heightSpring = useSpring(height, springConfig);

  useEffect(() => {
    const moveCursor = (e: any) => {
      cursorX.set(e.pageX);
      cursorY.set(e.pageY);
      if (!isStuck) {
        cursorOuterX.set(e.pageX - 16);
        cursorOuterY.set(e.pageY - 16);
      }
      cursorLocation = cursorY.get() - window.scrollY;
    };

    const scrollAdjust = (e: any) => {
      cursorY.set(cursorLocation + window.scrollY);
      cursorOuterY.set(cursorLocation + window.scrollY - 16);
    };

    const handleMouseEnter = (e: any) => {
      isStuck = true;
      const targetBox = e.currentTarget.getBoundingClientRect();
      width.set(targetBox.width);
      height.set(targetBox.height);
      cursorOuterX.set(targetBox.left);
      cursorOuterY.set(targetBox.top + window.scrollY);
      const dataElement = e.target.closest("[data-radius]");
      borderRadius.set(parseInt(dataElement.dataset.radius) || 16);
    };

    const handleMouseLeave = (e: any) => {
      isStuck = false;
      width.set(cursorOuterOriginalState.width!);
      height.set(cursorOuterOriginalState.height!);
      borderRadius.set(16);
    };

    const cursorOuter = document.querySelector(".cursor--large");
    let isStuck = false;
    let cursorOuterOriginalState = {
      width: cursorOuter?.getBoundingClientRect().width,
      height: cursorOuter?.getBoundingClientRect().height,
    };

    const updateSnaps = () => {
      setTimeout(update, 50);
    };

    const update = () => {
      snaps.forEach((snap) => {
        snap.removeEventListener("mouseenter", handleMouseEnter);
        snap.removeEventListener("mouseleave", handleMouseLeave);
      });
      snaps = document.querySelectorAll("[data-cursor-snap]");
      snaps.forEach((snap) => {
        snap.addEventListener("mouseenter", handleMouseEnter);
        snap.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    let cursorLocation = 0;

    let snaps = document.querySelectorAll("[data-cursor-snap]");
    snaps.forEach((snap) => {
      snap.addEventListener("mouseenter", handleMouseEnter);
      snap.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("scroll", scrollAdjust);
    const themeSwitcher = document.getElementById("theme-switcher");
    themeSwitcher?.addEventListener("click", updateSnaps);
    // moveCursor(window);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", scrollAdjust);
      themeSwitcher?.removeEventListener("click", updateSnaps);
      snaps.forEach((snap) => {
        snap.removeEventListener("mouseenter", handleMouseEnter);
        snap.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor--large absolute z-50 top-0 left-0 bg-transparent border-2 border-blue-500 dark:border-blue-500 pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: widthSpring,
          height: heightSpring,
          borderRadius: borderRadius,
        }}
      ></motion.div>
      <motion.div
        className="cursor--small absolute z-50 bg-blue-500 dark:bg-blue-500 rounded-full pointer-events-none"
        style={{
          translateX: "-50%",
          translateY: "-50%",
          x: cursorX,
          y: cursorY,
          width: 9,
          height: 9,
        }}
      ></motion.div>
    </>
  );
};
