import { ReactNode } from "react";
import { IconType } from "react-icons";

export type ButtonProps = {
  children: ReactNode;
  color: string;
  buttonHandler:() => void
};

export type ListItemProps = {
  children: ReactNode;
  isUnderlined: boolean;
};

export type ProductState = {
  id: number;
  attributes: ProductAttributes;
};

export type ProductAttributes = {
  category: string;
  color: string[];
  company: string;
  createdAt: string;
  description: string;
  featured: boolean;
  image: string;
  price: string;
  publishedAt: string;
  shipping: boolean;
  title: string;
  updatedAt: string;
};

export type InfoProps = {
  icon: IconType;
  title: string;
  children: ReactNode;
};


export type OperationProps = {
  title: string;
  text: string;
  icon: IconType
};

export type OutletContext = {
  isNavFixed: boolean;
  setIsNavFixed: React.Dispatch<React.SetStateAction<boolean>>;
};