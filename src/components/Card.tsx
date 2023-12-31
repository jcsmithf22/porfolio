import Tilt from "react-parallax-tilt";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { isMobile } from "react-device-detect";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { useContext, useState, useEffect } from "react";
import { HoveredStateContext, HoveredDispatchContext } from "./HoveredProvider";

export const Card = ({
  children,
  name,
  information,
  disableTilt,
}: {
  children: React.ReactNode;
  name: string;
  information?: string;
  disableTilt?: boolean;
}) => {
  const hovered = useContext(HoveredStateContext);
  const setHovered = useContext(HoveredDispatchContext)!;

  return (
    <div
      className={cn(
        "h-full relative transition-opacity duration-300",
        hovered !== "none" && hovered !== name && !isMobile && "opacity-5"
      )}
    >
      <Tilt
        tiltEnable={!isMobile && !disableTilt}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        className="h-full"
      >
        <div
          className={
            "rounded-3xl dark:bg-zinc-600/20 bg-zinc-300/20 border-zinc-300/40 dark:border-zinc-600/40 border h-full pb-12"
          }
        >
          <div className="inside-card p-6 relative">{children}</div>
        </div>
      </Tilt>
      <div className="external-link absolute bottom-2 left-2 flex flex-row gap-x-2 items-center">
        <a
          data-cursor-snap
          data-radius={20}
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
        <div className="text-zinc-600 dark:text-zinc-400 text-sm">
          {hovered === name && information && !isMobile && (
            <Typewriter text={information} delay={30} />
          )}
        </div>
      </div>
    </div>
  );
};

const Typewriter = ({ text, delay }: { text: string; delay: number }) => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: number;

    if (index < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => {
          let newText = prevText + text[index];
          while (newText == " ") {
            newText = prevText + text[index];
          }
          return newText;
        });
        setIndex((prevIndex) => prevIndex + 1);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [index, delay, text]);

  return <span>{currentText}</span>;
};
