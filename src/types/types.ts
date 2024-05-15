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
  image: string;
  name: string;
  price: number;
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

export type ArrowContainerOptions = {
  right: string;
  left: string;
};

export type ButtonColors = {
  purple: string;
  white: string;
  red: string;
};

export type SidebarProps = {
  products: ProductState[];
  workingState?:ProductState[]
}
export type ProductsContentProps = {
  products: ProductState[];
  workingState?:ProductState[]
}