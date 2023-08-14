import Tilt from "react-parallax-tilt";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { isMobile } from "react-device-detect";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { useContext, useEffect } from "react";
import { HoveredStateContext, HoveredDispatchContext } from "./HoveredProvider";

export const Card = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => {
  const hovered = useContext(HoveredStateContext);
  const setHovered = useContext(HoveredDispatchContext)!;

  return (
    <Tilt
      tiltEnable={!isMobile}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      className="h-full"
    >
      <div
        className={cn(
          "rounded-3xl dark:bg-zinc-600/20 bg-zinc-300/20 border-zinc-300/40 dark:border-zinc-600/40 border h-full flex flex-col justify-between transition-opacity duration-500",
          hovered !== "none" && hovered !== name && "opacity-5"
        )}
      >
        <div className="inside-card p-6">{children}</div>
        <div className="external-link pb-2 px-2">
          <a
            onMouseEnter={() => setHovered(name)}
            onMouseLeave={() => setHovered("none")}
            href="/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-10 h-10 rounded-full px-0 py-0"
            )}
          >
            <ArrowTopRightIcon />
          </a>
        </div>
      </div>
    </Tilt>
  );
};
