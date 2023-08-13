import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

export const TooltipWrapper = ({
  tooltip,
  className,
  children,
}: {
  tooltip: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={className}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>{children}</TooltipTrigger>
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
