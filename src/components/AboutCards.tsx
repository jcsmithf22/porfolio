import { Card } from "@/components/Card";
import { AnimateInStagger, FadeIn, ZoomOutUp } from "@/components/FadeIn";
import { createContext, useEffect, useState } from "react";
import { HoveredProvider } from "./HoveredProvider";

export const AboutCards = () => {
  return (
    <HoveredProvider>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 overflow-hidden">
        <AnimateInStagger className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-1 lg:grid-cols-3 gap-8">
          <FadeIn>
            <Card name="about" information="Head to /about">
              <h2 className="text-2xl font-medium text-zinc-900 dark:text-white">
                About Me
              </h2>
              <p className="mt-6 text-zinc-600 dark:text-zinc-300">
                I'm a data scientist and aspiring software engineer. I love
                learning new things and building cool stuff. Python is fun - but
                web development is my passion.
              </p>
              {/* <p className="mt-4 text-zinc-600 dark:text-zinc-300">

            </p> */}
            </Card>
          </FadeIn>
          <FadeIn>
            <Card name="experience" information="What have I made?">
              <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100">
                Experience
              </h2>
              <p className="mt-6 text-zinc-600 dark:text-zinc-300">
                Most of my professional experience has been using Python, SQL,
                PowerBI, Databricks, Azure Data Factory, and Azure DevOps.
              </p>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                However, I have been making websites for nearly a decade in my
                personal time.
              </p>
            </Card>
          </FadeIn>
          <FadeIn className="lg:row-span-2">
            <Card name="skills" information="And the number keeps growing">
              <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 pb-2">
                Skills
              </h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                I'm a data scientist and aspiring software engineer. I love
                learning new things and building cool stuff. I'm currently
                working on a personal website builder and a few other projects.
              </p>
            </Card>
          </FadeIn>
          {/* adding additional features */}

          <ZoomOutUp className="lg:col-span-2 row-span-2">
            <Card name="image" information="Don't fall for it">
              <div className="h-96">Test</div>
            </Card>
          </ZoomOutUp>
          <FadeIn>
            <Card name="more" information="Get in touch">
              <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 pb-2">
                Contact
              </h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                I'm a data scientist and aspiring software engineer. I love
                learning new things and building cool stuff. I'm currently
                working on a personal website builder and a few other projects.
              </p>
            </Card>
          </FadeIn>
        </AnimateInStagger>
      </div>
    </HoveredProvider>
  );
};
