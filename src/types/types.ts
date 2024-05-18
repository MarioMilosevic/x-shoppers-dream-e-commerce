import { ReactNode } from "react";
import { IconType } from "react-icons";

export type ButtonProps = {
  children: ReactNode;
  color: keyof ButtonColors;
  buttonHandler: () => void;
};

export type ListItemProps = {
  children: ReactNode;
  isActive: boolean;
  name: string;
  path: string;
};

export type ProductState = {
  category: string;
  colors: string[];
  company: string;
  description: string;
  id: string;
  image: string;
  name: string;
  price: number;
  shipping: boolean;
};

export type ProductProps = {
  textSize: keyof textSizeOptions;
  imgSize: keyof imgSizeOptions;
  image: string;
  name: string;
  price: number;
  hover: keyof ProductHoverOptions;
};

export type imgSizeOptions = {
  large: string;
  small: string;
};

export type ProductHoverOptions = {
  true: string;
  false: string;
};

export type InfoProps = {
  icon: IconType;
  title: string;
  children: ReactNode;
};

export type OperationProps = {
  title: string;
  text: string;
  icon: IconType;
};

export type OutletContext = {
  isNavFixed: boolean;
  setIsNavFixed: React.Dispatch<React.SetStateAction<boolean>>;
  descriptionRef: React.Ref<HTMLDivElement>;
  operationsRef: React.Ref<HTMLDivElement>;
  testimonialsRef: React.Ref<HTMLDivElement>;
  focusDescription: () => void;
};

export type SectionProps = {
  option: keyof widthOptions;
  title: string;
  subtitle: string;
  children: ReactNode;
};

export type SlideProps = {
  title: string;
  text: string;
  img: string;
  name: string;
  city: string;
  currentSlideIndex: number;
  index: number;
};

export type ArrowContainerProps = {
  direction: keyof ArrowContainerOptions;
  clickHandler: () => void;
  children: ReactNode;
};

export type widthOptions = {
  large: string;
  medium: string;
  small: string;
};
export type textSizeOptions = {
  large: string;
  medium: string;
  small: string;
};

export type ArrowContainerOptions = {
  right: string;
  left: string;
};

export type ButtonColors = {
  purple: string;
  white: string;
  red: string;
};


export type productFiltersType = {
  category: string;
  company: string;
  colors: string[];
  price: number;
  shipping: boolean;
};

export type productSliceInitialState = {
  products: productFiltersType[];
  filters: productFiltersType;
  filteredProducts:productFiltersType[]
}

export type colorButtonProps = {
  color: keyof ColorOptions;
}

export type ColorOptions = {
  red: string;
  blue: string;
  black: string;
  green: string;
  yellow: string;
};
