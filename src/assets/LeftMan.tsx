import { cn } from "@bem-react/classname";

import "./Men.scss";
const bem = cn("Man");

export const LeftMan = () => {
  return (
    <div className={bem({ Left: true })}>
      <img
        className={bem("Img")}
        src="images/stickman-list.png"
        alt="LeftStickman"
      />
    </div>
  );
};
