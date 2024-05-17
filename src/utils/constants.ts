import { GiWhirlwind } from "react-icons/gi";
import { TbHeartHandshake } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import { RiExchangeDollarLine } from "react-icons/ri";
import anastasiya from "../assets/anastasiya petrova.jpeg";
import vinney from "../assets/vinney malesh.webp";
import tyron from "../assets/tyron mayers.jpg";
import anna from "../assets/anna capron.avif";
import { ColorOptions } from "../types/types";
import techCrunchImg from "../assets/techCrunch.8e59ce33cdb22ba0b8dd.png";
import bussinessInsiderImg from "../assets/businessInsider.a50839ce9f675fc574e6.png";
import newYorkTImesImg from "../assets/newYorkTimes.1279b92266cf081e20a6.png";
import forbesImg from "../assets/forbes.c9d98237f5d5f000eaad.png";
import usaTodayImg from "../assets/usaToday.56382ee08e942ad7c93c.png";

export const url = "https://www.course-api.com/react-store-products";

export const images = [
  techCrunchImg,
  bussinessInsiderImg,
  newYorkTImesImg,
  forbesImg,
  usaTodayImg,
];

export const pages = [
  {
    id: crypto.randomUUID(),
    name: "Home",
    isActive: true,
    path: "/",
  },
  {
    id: crypto.randomUUID(),
    name: "Products",
    isActive: false,
    path: "/Products",
  },
];

export const operations = [
  {
    id: crypto.randomUUID(),
    buttonTitle: "Swift Delivery",
    title: "Get your home furnishings in a flash with rapid delivery.",
    icon: GiWhirlwind,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, perspiciatis blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia.",
    isActive: true,
  },
  {
    id: crypto.randomUUID(),
    buttonTitle: "Stellar Support",
    title: "Always here to help: stellar support around the clock.",
    icon: TbHeartHandshake,
    text: "Dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, plorem blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia minus sint, plorem ex harum.",
    isActive: false,
  },
  {
    id: crypto.randomUUID(),
    buttonTitle: "Fresh Finds",
    title: "Stay ahead of the trends with our latest discoveries.",
    icon: IoMdCheckmark,
    text: "Ipsum dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, pLorem blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia temporibus.",
    isActive: false,
  },
  {
    id: crypto.randomUUID(),
    buttonTitle: "Easy Returns",
    title: "No stress or worries for your home goods.",
    icon: RiExchangeDollarLine,
    text: "Explicabo ipsum Error sit ametperspiciati consectetur voluptatibus elit. Error accusamus arc explicabo explictecto minus sint, se blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit sit amet architecto.",
    isActive: false,
  },
];

export const testimonials = [
  {
    title: "These pieces transformed my home!",
    text: "The level of hospitality and professionalism shown by the company made my shopping experience a breeze. The modern designs and top-quality materials of these products exceeded my expectations, and I couldn't be happier with my purchase!",
    img: anastasiya,
    name: "Anastasiya Petrova",
    city: "Kyiv, Ukraine",
  },
  {
    title: "My space now finally feels complete.",
    text: "The beautiful furniture pieces I purchased fit perfectly in my home and bring me so much joy every day. The quality and modern design exceeded my expectations, and the entire experience with your company was seamless.",
    img: anna,
    name: "Anna Capron",
    city: "Paris, France",
  },
  {
    title: "You guys brought vision back to my life.",
    text: "I cannot speak highly enough of the quality of the products I received from this company. The attention to detail and craftsmanship is unparalleled. I am so grateful to have found such a reliable and professional source for my furniture needs.",
    img: tyron,
    name: "Tyron Mayers",
    city: "San Francisco, USA",
  },
  {
    title: "Can't believe I have been missing on this!",
    text: "The furniture I found on this e-commerce store was exactly what I was looking for. The pieces have truly transformed my home and brought my vision to life, adding a touch of sophistication and elegance to every corner.",
    img: vinney,
    name: "Vinney Malesh",
    city: "Los Angeles, USA",
  },
];

export const buttonColors: Array<keyof ColorOptions> = [
  "red",
  "green",
  "blue",
  "black",
  "yellow",
];

export const startFilters = {
  category: "All",
  company: "All",
  colors: [],
  price: 0,
  shipping: false,
};
