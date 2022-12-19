import "styled-components";


type ElementStyle = {
  bg: string;
  bgHover?:string;
  bgActive?:string;
  color: string;
  colorHover?:string;
  colorActive?:string;
  borderColor:string;
  borderHover?:string;
  borderActive?:string
};

type ElementType = {
  dark: ElementStyle;
  light: ElementStyle;
};

export type FontStyle = {
  lineHeight: string;
  size: string;
  spacing?: string;
  weight: number;
};

type FontType = {
  family: string;
  styles: {
    small: { regular: FontStyle; medium: FontStyle };
    caption: { regular: FontStyle; medium: FontStyle };
    h1: FontStyle;
    h2: FontStyle;
    h3: FontStyle;
  };
};

declare module "styled-components" {
  export type DefaultTheme = {
    colors: {
      primary: ElementType;
      secondary: ElementType;
    };
    size:{
      sm: string;
      md: string;
      lg: string;
    },
    radius:{
      sm: string;
      md: string;
      lg: string;
    },
    fonts: {
      primary: FontType;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
