import Tilt from "react-parallax-tilt";
import { isMobile } from "react-device-detect";
import { FadeIn } from "./FadeIn";

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <FadeIn>
      <Tilt tiltEnable={!isMobile}>
        <div className="rounded-3xl p-6 dark:bg-zinc-600/30 bg-zinc-300/30 border-zinc-300/50 dark:border-zinc-500/30 border">
          {children}
        </div>
      </Tilt>
    </FadeIn>
  );
};
