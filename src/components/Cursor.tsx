import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTime } from "framer-motion";

export const Cursor = () => {
  // Use motion values for the X and Y coordinates of the center cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  // use motion values for the X and Y coordinates of the outer cursor
  const cursorOuterX = useMotionValue(-100);
  const cursorOuterY = useMotionValue(-100);
  // use motion values for the width and height of the outer cursor
  const width = useMotionValue(32);
  const height = useMotionValue(32);
  // use motion values for the border radius of the outer cursor
  const borderRadius = useMotionValue(16);

  // use springs to animate the outer cursor
  const springConfig = { damping: 50, stiffness: 1000 };
  const cursorXSpring = useSpring(cursorOuterX, springConfig);
  const cursorYSpring = useSpring(cursorOuterY, springConfig);
  // use springs to smoothly animate the width of the cursor
  const widthSpring = useSpring(width, springConfig);
  const heightSpring = useSpring(height, springConfig);

  // use a useEffect hook to add event listeners to the window, making sure it only runs on the client
  useEffect(() => {
    // define the moveCursor function, which will be called on mousemove
    const moveCursor = (e: any) => {
      // updated the inner cursor coordinates
      cursorX.set(e.pageX);
      cursorY.set(e.pageY);

      // if the cursor is not stuck, update the outer cursor coordinates
      if (!isStuck) {
        // offset by 16 px to make sure the outer cursor is centered
        cursorOuterX.set(e.pageX - 16);
        cursorOuterY.set(e.pageY - 16);
      }

      // update the cursor location variable, which is used to move the cursor with scrolling
      cursorLocation = cursorY.get() - window.scrollY;
    };

    // define the scrollAdjust function, which will be called on scroll to ensure the cursor moves with the page
    const scrollAdjust = (e: any) => {
      cursorY.set(cursorLocation + window.scrollY);
      cursorOuterY.set(cursorLocation + window.scrollY - 16);
    };

    // SNAPPING FUNCTIONS
    // define the handleMouseEnter function, which will be called when the cursor enters a snap element
    const handleMouseEnter = (e: any) => {
      // set the cursor to stuck
      isStuck = true;
      // get the bounding box of the snap element
      const targetBox = e.currentTarget.getBoundingClientRect();
      // update the outer cursor coordinates and size to match the snap element
      width.set(targetBox.width);
      height.set(targetBox.height);
      cursorOuterX.set(targetBox.left);
      cursorOuterY.set(targetBox.top + window.scrollY);
      // update the border radius of the outer cursor to match the border radius of the snap element
      const dataElement = e.target.closest("[data-radius]");
      borderRadius.set(parseInt(dataElement.dataset.radius) || 16);
    };

    // define the handleMouseLeave function, which will be called when the cursor leaves a snap element
    const handleMouseLeave = () => {
      // set the cursor to not stuck
      isStuck = false;
      // reset the outer cursor coordinates and size to match the original state
      width.set(cursorOuterOriginalState.width!);
      height.set(cursorOuterOriginalState.height!);
      cursorOuterX.set(cursorX.get() - 16);
      cursorOuterY.set(cursorY.get() - 16);
      // reset the border radius of the outer cursor
      borderRadius.set(16);
    };

    // define the delay function, which will be used to delay the handleMouseLeave
    const delay = (delayedFunction: () => void) => {
      setTimeout(delayedFunction, 50);
    };

    // define the update function, which is used when snap is need on elements added after initial load
    const update = () => {
      // remove existing event listeners
      themeButtons.forEach((button) => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
        button.removeEventListener("click", () => delay(handleMouseLeave));
      });
      // updated the list of dom elements with snap
      themeButtons = document.querySelectorAll(".theme-button");
      // reattach event listeners
      themeButtons.forEach((button) => {
        button.addEventListener("mouseenter", handleMouseEnter);
        button.addEventListener("mouseleave", handleMouseLeave);
        button.addEventListener("click", () => delay(handleMouseLeave));
      });
    };

    // define a variable for the outer cursor dom element
    const cursorOuter = document.querySelector(".cursor--large");
    // initialize variables, including original cursor state
    let isStuck = false;
    let cursorOuterOriginalState = {
      width: cursorOuter?.getBoundingClientRect().width,
      height: cursorOuter?.getBoundingClientRect().height,
    };

    let cursorLocation = 0;

    // initialize snaps
    let snaps = document.querySelectorAll("[data-cursor-snap]");
    snaps.forEach((snap) => {
      snap.addEventListener("mouseenter", handleMouseEnter);
      snap.addEventListener("mouseleave", handleMouseLeave);
    });

    let themeSwitcher = document.getElementById("theme-switcher");

    setTimeout(() => {
      themeSwitcher = document.getElementById("theme-switcher");
      themeSwitcher?.addEventListener("click", () => delay(update));
      themeSwitcher?.addEventListener("mouseenter", handleMouseEnter);
      themeSwitcher?.addEventListener("mouseleave", handleMouseLeave);
    }, 100);

    // initialize theme buttons variable (will initially be empty)
    let themeButtons = document.querySelectorAll(".theme-button");

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("scroll", scrollAdjust);
    // moveCursor(window);

    return () => {
      // remove every event listener
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", scrollAdjust);
      themeSwitcher?.addEventListener("click", () => delay(update));
      themeSwitcher?.addEventListener("mouseenter", handleMouseEnter);
      themeSwitcher?.addEventListener("mouseleave", handleMouseLeave);
      themeButtons.forEach((button) => {
        button.removeEventListener("click", () => delay(handleMouseLeave));
      });
      snaps.forEach((snap) => {
        snap.removeEventListener("mouseenter", handleMouseEnter);
        snap.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor--large absolute z-50 top-0 left-0 bg-transparent border border-blue-400 dark:border-blue-500 pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: widthSpring,
          height: heightSpring,
          borderRadius: borderRadius,
        }}
      ></motion.div>
      <motion.div
        className="cursor--small absolute z-50 bg-blue-400 dark:bg-blue-400 rounded-full pointer-events-none"
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
