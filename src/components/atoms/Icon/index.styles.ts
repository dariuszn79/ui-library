import styled, { css } from "styled-components";
import { Props } from ".";

export const SvgElement = styled.svg<{
  $size?: NonNullable<Props["size"]>;
}>``;
export const IconWrapper = styled.div<{
  $size?: NonNullable<Props["size"]>;
}>`
  disply: flex;
  padding-left: 8px;
  transition: all 0.125s;
  height: ${({ theme, $size: size }) => theme.size[size] * 0.66 + "px"};
  width: ${({ theme, $size: size }) => theme.size[size] * 0.66 + "px"};
  padding: 2px;
`;
