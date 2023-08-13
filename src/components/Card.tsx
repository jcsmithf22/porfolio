import Tilt from "react-parallax-tilt";
import { isMobile } from "react-device-detect";
import { FadeIn } from "./FadeIn";

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <FadeIn>
      <Tilt tiltEnable={!isMobile}>
        <div className="rounded-3xl p-6 dark:bg-zinc-600/20 bg-zinc-300/20 border-zinc-300/40 dark:border-zinc-600/40 border">
          {children}
        </div>
      </Tilt>
    </FadeIn>
  );
};
