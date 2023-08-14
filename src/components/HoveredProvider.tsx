import { createContext, useState, Dispatch } from "react";

export const HoveredStateContext = createContext<string>("none");
export const HoveredDispatchContext = createContext<
  Dispatch<string> | undefined
>(undefined);

export const HoveredProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState("none");

  return (
    <HoveredStateContext.Provider value={hovered}>
      <HoveredDispatchContext.Provider value={setHovered}>
        {children}
      </HoveredDispatchContext.Provider>
    </HoveredStateContext.Provider>
  );
};
