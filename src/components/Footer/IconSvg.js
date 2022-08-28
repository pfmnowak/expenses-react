import React from "react";
import Icons from "./icons/sprite.svg";

const IconSvg = (props) => (
  <svg className="social__icon">
    <use xlinkHref={`${Icons}#${props.name}`} />
  </svg>
);

export default IconSvg;
