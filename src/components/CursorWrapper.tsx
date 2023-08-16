import { isMobile } from "react-device-detect";
import { Cursor } from "./Cursor";

export const CursorWrapper = () => {
  return !isMobile && <Cursor />;
};
