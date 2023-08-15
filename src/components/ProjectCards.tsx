import { AnimateInStagger, FadeIn, ZoomInUp } from "@/components/FadeIn";
import { Card } from "@/components/Card";

export const ProjectCards = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <AnimateInStagger className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ZoomInUp className="col-span-2">
          <Card>
            <div className="h-96">Test</div>
          </Card>
        </ZoomInUp>
        <FadeIn>
          <Card name="test">
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
