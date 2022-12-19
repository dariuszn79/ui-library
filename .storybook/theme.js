import { create } from "@storybook/theming";
import Logo from "./logo.png";
export default create({
  base: "light",

  fontBase: '"Manrope", sans-serif',

  colorPrimary: "#5F5F5F",
  colorSecondary: "#5F5F5F",

  appBg: "#F8F8F8",
  appBorderRadius: 0,

  textColor: "#4F4F4F",

  barSelectedColor: "#5F5F5F",
  barBg: "#F8F8F8",

  brandTitle: "Sky IxD Tools UI Kit",
  brandImage: Logo,
});
