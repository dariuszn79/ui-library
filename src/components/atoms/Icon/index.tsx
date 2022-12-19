import React from "react";
import { IconWrapper, SvgElement } from "./index.styles";
import icons from "./../../../assets/icons";

export type Props = {
  name?: keyof typeof icons;
  style?: React.CSSProperties;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

const Icon = ({ name, style, size, ...props }: Props) => {
  if (!name) return null;
  const SvgComponent = icons[name] as typeof SvgElement;

  return (
    <IconWrapper $size={size} {...props}>
      <SvgComponent height={"100%"} width={"100%"} viewBox={"0 0 34 34"} />
    </IconWrapper>
  );
};

export default Icon;
