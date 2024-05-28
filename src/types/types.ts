import { ReactNode } from "react";
import { IconType } from "react-icons";

export type ButtonProps = {
  children: ReactNode;
  color: keyof ButtonColors;
  buttonHandler: () => void;
};

export type ListItemProps = {
  children: ReactNode;
  isActive: keyof ListItemOptions;
  name: string;
  path: string;
  index: number;
  clickHandler: (index: number) => void;
};

export type ListItemOptions = {
  true: string;
  false: string;
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
  id: string;
  description: string;
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

export type productResponseType = {
  id: string;
  category: string | null;
  company: string;
  colors: string[];
  description: string;
  price: number;
  shipping: boolean;
  image: string;
  name: string;
};

export type productFiltersType = {
  category: string;
  company: string;
  color: string;
  search: string;
  price: number;
  shipping: boolean;
  sort: string;
};

export type productSliceInitialState = {
  products: productResponseType[];
  filters: productFiltersType;
  filteredProducts: productResponseType[];
};

export type colorButtonProps = {
  button: string;
  isActive: keyof colorButtonIsActive;
  clickHandler: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number,
    button: string
  ) => void;
  index: number;
  size: keyof colorButtonSizeOptions;
};

export type colorButtonIsActive = {
  true: string;
  false: string;
};

export type singleProductImages = {
  filename: string;
  height: number;
  id: string;
  size: number;
  thumbnails: {
    full: { url: string; width: number; height: number };
    large: { url: string; width: number; height: number };
    small: { url: string; width: number; height: number };
  };
  type: string;
  url: string;
  width: number;
};

export type singleProductType = {
  id: string;
  category: string;
  colors: string[];
  company: string;
  description: string;
  images: singleProductImages[];
  name: string;
  price: number;
  reviews: number;
  shipping: boolean;
  stars: number;
  stock: number;
  quantity: number;
};

export type colorButtonSizeOptions = {
  small: string;
  medium: string;
};

export type ChosenProductType = {
  product: singleProductType;
};

export type CartQuantityControlProps = {
  id: string;
  quantity: number;
  incrementProductQuantity: () => void;
  decrementProductQuantity: () => void;
};
