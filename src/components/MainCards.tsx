import { Card } from "@/components/Card";
import { FadeInStagger } from "@/components/FadeIn";

export const MainCards = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 -mt-16">
      <FadeInStagger className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card>
          <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 pb-2">
            About Me
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            I'm a data scientist and aspiring software engineer. I love learning
            new things and building cool stuff. I'm currently working on a
            personal website builder and a few other projects.
          </p>
        </Card>
        <Card>
          <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 pb-2">
            Experience
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            I'm a data scientist and aspiring software engineer. I love learning
            new things and building cool stuff. I'm currently working on a
            personal website builder and a few other projects.
          </p>
        </Card>
        <Card>
          <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 pb-2">
            Contact
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            I'm a data scientist and aspiring software engineer. I love learning
            new things and building cool stuff. I'm currently working on a
            personal website builder and a few other projects.
          </p>
        </Card>
      </FadeInStagger>
    </div>
  );
};
