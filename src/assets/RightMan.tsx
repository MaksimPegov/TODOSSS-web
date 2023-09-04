import { cn } from "@bem-react/classname";

import "./Men.scss";
const bem = cn("Man");

export const RightMan = () => {
  return (
    <div className={bem({ Right: true })}>
      <img
        className={bem("Img")}
        src="images/stickman-sleep.png"
        alt="RightStickman"
      />
    </div>
  );
};
