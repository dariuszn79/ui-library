import React from "react";
import { ComponentMeta } from "@storybook/react";
import styled from "styled-components";

import icons from "./../../../assets/icons";
import { default as IconComponent } from ".";

export default {
  title: "atoms/Icon",
  component: IconComponent,
  argTypes: {},
} as unknown as ComponentMeta<typeof IconComponent>;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto;
  flex-direction: column;
  svg path {
    stroke: #333;
  }
`;

export const Icon = () => (
  <Wrapper>
    {Object.keys(icons).map((icon) => (
      <IconComponent
        name={icon as keyof typeof icons}
        style={{ display: "block" }}
        key={icon}
        size={"lg"}
      />
    ))}
  </Wrapper>
);
