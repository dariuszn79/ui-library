import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  colors: {
    dark: {
      primary: {
        color: "var(--color-color-light-light100)",
        colorHover: "var(--color-color-light-light100)",
        colorActive: "var(--color-color-light-light100)",
        bg: "var(--color-color-primary-primary100)",
        bgHover: "var(--color-color-primary-primary75)",
        bgActive: "var(--color-color-primary-primary100)",
        borderColor: "var(--color-color-light-light100)",
        borderHover: "var(--color-color-light-light100)",
        borderActive: "var(--color-color-light-light100)",
      },
      secondary: {
        color: "var(--color-color-dark-black100)",
        colorHover: "var(--color-color-dark-black100)",
        colorActive: "var(--color-color-dark-black100)",
        bg: "var(--color-color-primary-primary100)",
        bgHover: "var(--color-color-primary-primary75)",
        bgActive: "var(--color-color-primary-primary100)",
        borderColor: "var(--color-color-primary-primary100",
        borderHover: "var(--color-color-primary-primary100)",
        borderActive: "var(--color-color-primary-primary100)",
      },
      default: {
        color: "var(--color-color-dark-black75)",
        colorHover: "var(--color-color-dark-black100)",
        colorActive: "var(--color-color-dark-black100)",
        bg: "var(--color-color-light-white)",
        bgHover: "var(--color-color-light-white)",
        bgActive: "var(--color-color-light-white)",
        borderColor: "var(--color-light-Transparent)",
        borderHover: "var(--color-color-primary-primary100)",
        borderActive: "var(--color-color-primary-primary100)",
      },
      disabled: {
        color: "var(--color-color-dark-black50)",
        colorHover: "var(--color-color-dark-black25)",
        colorActive: "var(--color-color-dark-black25)",
        bg: "var(--color-color-light-light100)",
        bgHover: "var(--color-color-light-light100)",
        bgActive: "var(--color-color-light-light100)",
        borderColor: "var(--color-color-dark-black25)",
        borderHover: "var(--color-color-dark-black25)",
        borderActive: "var(--color-color-dark-black25)",
      },
      warning: {
        color: "var(--color-color-dark-black100)",
        colorHover: "var(--color-color-dark-black100)",
        colorActive: "var(--color-color-dark-black100)",
        bg: "var(--color-color-primary-primary100)",
        bgHover: "var(--color-color-primary-primary75)",
        bgActive: "var(--color-color-primary-primary100)",
        borderColor: "var( --color-color-functional-warning",
        borderHover: "var(--color-color-primary-primary100)",
        borderActive: "var(--color-color-primary-primary100)",
      },
      error: {
        color: "var(--color-color-dark-black100)",
        colorHover: "var(--color-color-dark-black100)",
        colorActive: "var(--color-color-dark-black100)",
        bg: "var(--color-color-primary-primary100)",
        bgHover: "var(--color-color-primary-primary75)",
        bgActive: "var(--color-color-primary-primary100)",
        borderColor: "var( --color-color-functional-warning",
        borderHover: "var(--color-color-primary-primary100)",
        borderActive: "var(--color-color-primary-primary100)",
      },
    },
    light: {
      primary: {
        color: "var(--color-color-light-white)",
        colorHover: "var(--color-color-light-light100)",
        colorActive: "var(--color-color-light-light100)",
        bg: "var(--color-color-primary-primary100)",
        bgHover: "var(--color-color-primary-primary75)",
        bgActive: "var(--color-color-primary-primary100)",
        borderColor: "var(--color-color-light-light100)",
        borderHover: "var(--color-color-light-light100)",
        borderActive: "var(--color-color-light-light100)",
      },
      secondary: {
        color: "var(--color-color-dark-black100)",
        colorHover: "var(--color-color-primary-primary75)",
        colorActive: "var(--color-color-primary-primary100)",
        bg: "var(--color-color-light-white)",
        bgHover: "var(--color-color-light-white)",
        bgActive: "var(--color-color-light-white)",
        borderColor: "var(--color-color-primary-primary100)",
        borderHover: "var(--color-color-primary-primary75)",
        borderActive: "var(--color-color-primary-primary100)",
      },
      default: {
        color: "var(--color-color-dark-black75)",
        colorHover: "var(--color-color-primary-primary75)",
        colorActive: "var(--color-color-primary-primary100)",
        bg: "var(--color-color-light-white)",
        bgHover: "var(--color-color-light-white)",
        bgActive: "var(--color-color-light-white)",
        borderColor: "var(--color-color-dark-black25)",
        borderHover: "var(--color-color-primary-primary75)",
        borderActive: "var(--color-color-primary-primary100)",
      },
      disabled: {
        color: "var(--color-color-dark-black25)",
        colorHover: "var(--color-color-dark-black25)",
        colorActive: "var(--color-color-dark-black25)",
        bg: "var(--color-color-dark-black50)",
        bgHover: "var(--color-color-light-light100)",
        bgActive: "var(--color-color-light-light100)",
        borderColor: "var(--color-color-dark-black50)",
        borderHover: "var(--color-color-dark-black25)",
        borderActive: "var(--color-color-dark-black25)",
      },
      warning: {
        color: "var(--color-color-dark-black100)",
        colorHover: "var(--color-color-primary-primary75)",
        colorActive: "var(--color-color-primary-primary100)",
        bg: "var(--color-color-light-white)",
        bgHover: "var(--color-color-light-white)",
        bgActive: "var(--color-color-light-white)",
        borderColor: "var( --color-color-functional-warning)",
        borderHover: "var(--color-color-primary-primary75)",
        borderActive: "var(--color-color-primary-primary100)",
      },
      error: {
        color: "var(--color-color-functional-error)",
        colorHover: "var(--color-color-primary-primary75)",
        colorActive: "var(--color-color-primary-primary100)",
        bg: "var(--color-color-light-white)",
        bgHover: "var(--color-color-light-white)",
        bgActive: "var(--color-color-light-white)",
        borderColor: "var( --color-color-functional-error)",
        borderHover: "var(--color-color-functional-error)",
        borderActive: "var(--color-color-primary-primary100)",
      },
    },
  },
  breakpoints: {
    s: "26.25em",
    m: "48em",
    l: "60em",
  },
  size: {
    xxs: "12",
    xs: "24",
    sm: "28",
    md: "36",
    lg: "48",
    xl: "56",
  },
  radius: {
    xs: "2px",
    sm: "3px",
    md: "4px",
    lg: "6px",
    xl: "8px",
    circle: "999px",
  },
  text: {
    h1: {
      lineHeight: "var(--color-color-light-light100)",
      size: "64px",
      spacing: "-0.03em",
      weight: 500,
    },
    h2: {
      lineHeight: "44px",
      size: "40px",
      spacing: "-0.03em",
      weight: 500,
    },
    h3: {
      lineHeight: "37px",
      size: "32px",
      spacing: "-0.03em",
      weight: 500,
    },
    button: {
      sm: {
        fontSize: "var(--typography-typography-med-button-sml-font-size)",
        lineHeight: "var(--typography-typography-med-button-sml-line-height)",
        fontFamily: "SkyTextMedium",
      },
      lg: {
        fontSize: "var(--typography-typography-med-button-lrg-font-size)",
        lineHeight: "var(--typography-typography-med-button-lrg-line-height)",
        fontFamily: "SkyTextMedium",
      },
      md: {
        fontSize: "var(--typography-typography-med-button-sml-font-size)",
        lineHeight: "var(--typography-typography-med-button-sml-line-height)",
        fontFamily: "SkyTextMedium",
      },
    },
    caption: {
      regular: {
        lineHeight: "30px",
        size: "20px",
        spacing: "-0.02em",
        weight: 400,
      },
      medium: {
        lineHeight: "30px",
        size: "20px",
        spacing: "-0.02em",
        weight: 500,
      },
    },
  },
};

export default defaultTheme;
