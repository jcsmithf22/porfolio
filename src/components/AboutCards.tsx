import { Card } from "@/components/Card";
import { AnimateInStagger, FadeIn, ZoomOutUp } from "@/components/FadeIn";

export const AboutCards = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <AnimateInStagger className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-1 lg:grid-cols-3 gap-8">
        <FadeIn>
          <Card>
            <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 pb-2">
              About Me
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              I'm a data scientist and aspiring software engineer. I love
              learning new things and building cool stuff. I'm currently working
              on a personal website builder and a few other projects.
            </p>
          </Card>
        </FadeIn>
        <FadeIn>
          <Card>
            <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 pb-2">
              Experience
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              I'm a data scientist and aspiring software engineer. I love
              learning new things and building cool stuff. I'm currently working
              on a personal website builder and a few other projects.
            </p>
          </Card>
        </FadeIn>
        <FadeIn className="lg:row-span-2">
          <Card>
            <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 pb-2">
              Contact
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              I'm a data scientist and aspiring software engineer. I love
              learning new things and building cool stuff. I'm currently working
              on a personal website builder and a few other projects.
            </p>
          </Card>
        </FadeIn>
        {/* adding additional features */}

        <ZoomOutUp className="lg:col-span-2 row-span-2">
          <Card>
            <div className="h-96">Test</div>
          </Card>
        </ZoomOutUp>
        <FadeIn>
          <Card>
            <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 pb-2">
              Experience
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              I'm a data scientist and aspiring software engineer. I love
              learning new things and building cool stuff. I'm currently working
              on a personal website builder and a few other projects.
            </p>
          </Card>
        </FadeIn>
      </AnimateInStagger>
    </div>
  );
};
