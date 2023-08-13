import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon, ColorWheelIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<string>(
    localStorage.getItem("theme") || "auto"
  );

  const setTheme = (theme: string) => {
    let scheme = theme;
    if (theme === "auto") {
      scheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    localStorage.setItem("theme", theme);
    setCurrentTheme(theme);
    if (scheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    setTheme(currentTheme);
    setIsOpen(false);
  }, [currentTheme]);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={cn(
        "absolute top-0 left-0 right-0",
        !isOpen && "bg-transparent"
      )}
    >
      <CollapsibleTrigger asChild>
        <Button className="rounded-full w-10 px-0" variant="outline">
          {currentTheme === "dark" ? (
            <MoonIcon />
          ) : currentTheme === "light" ? (
            <SunIcon />
          ) : (
            <ColorWheelIcon />
          )}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-1 flex flex-col gap-y-1 CollapsibleContent">
        <Button
          onClick={() => setCurrentTheme("light")}
          className={cn(
            "rounded-full w-10 h-10 px-0 py-0 flex-none",
            currentTheme === "light" && "hidden"
          )}
          variant="outline"
        >
          <SunIcon />
        </Button>
        <Button
          onClick={() => setCurrentTheme("dark")}
          className={cn(
            "rounded-full w-10 h-10 px-0 py-0 flex-none",
            currentTheme === "dark" && "hidden"
          )}
          variant="outline"
        >
          <MoonIcon />
        </Button>
        <Button
          onClick={() => setCurrentTheme("auto")}
          className={cn(
            "rounded-full w-10 h-10 px-0 py-0 flex-none",
            currentTheme === "auto" && "hidden"
          )}
          variant="outline"
        >
          <ColorWheelIcon />
        </Button>
      </CollapsibleContent>
    </Collapsible>
  );
};
