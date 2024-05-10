import { GiWhirlwind } from "react-icons/gi";
import { TbHeartHandshake } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import { RiExchangeDollarLine } from "react-icons/ri";
import { RefObject, Dispatch, SetStateAction } from "react";
export const url =
  "https://strapi-store-server.onrender.com/api/products?search=&category=all&company=all&order=a-z&price=100000&page=1";

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
// ovo treba maci
export const isVisible = (state: boolean) => {
  const visibility = state ? "opacity-1" : "opacity-0 translate-y-[15rem]";
  return visibility;
};

export const isIntersectingFn = <T extends HTMLElement>(
  ref: RefObject<T>,
  setStateFn: Dispatch<SetStateAction<boolean>>
) => {
  if (!ref?.current) return;
  const observer = new IntersectionObserver(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        setStateFn(true);
        observer.unobserve(entry.target);
      }
    },
    {
      rootMargin: "-100px",
    }
  );
  observer.observe(ref?.current);
};
