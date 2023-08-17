import { Card } from "@/components/Card";
import { AnimateInStagger, FadeIn, ZoomInUp } from "@/components/FadeIn";
import { HoveredProvider } from "@/components/HoveredProvider";
import { SkillIcon } from "./SkillIcon";

export const AboutCards = () => {
  return (
    <HoveredProvider>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateInStagger className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-1 lg:grid-cols-3 gap-6">
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
          <FadeIn className="lg:row-span-2 cursor-none">
            <Card
              name="skills"
              information="And the number keeps growing"
              disableTilt={true}
            >
              <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 pb-2">
                Skills
              </h2>
              <AnimateInStagger
                faster
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-3 gap-6 mt-6"
              >
                <SkillIcon name="python" />
                <SkillIcon name="sql" />
                <SkillIcon name="powerbi" />
                <SkillIcon name="react" />
                <SkillIcon name="typescript" />
                <SkillIcon name="svelte" />
                <SkillIcon name="astro" />
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
              </AnimateInStagger>
            </Card>
          </FadeIn>
          <ZoomInUp className="lg:col-span-2 row-span-2">
            <Card name="image" information="Don't fall for it">
              <div className="">Test</div>
            </Card>
          </ZoomInUp>
          <FadeIn>
            <Card name="more" information="Get in touch">
              <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 pb-2">
                Contact
              </h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                I can be accessed via my email, LinkedIn, or Twitter. I'll be
                quick to respond.
              </p>
            </Card>
          </FadeIn>
        </AnimateInStagger>
      </div>
    </HoveredProvider>
  );
};
