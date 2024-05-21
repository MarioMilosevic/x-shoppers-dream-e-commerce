import { GiWhirlwind } from "react-icons/gi";
import { TbHeartHandshake } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import { RiExchangeDollarLine } from "react-icons/ri";
import anastasiya from "../assets/anastasiya petrova.jpeg";
import vinney from "../assets/vinney malesh.webp";
import tyron from "../assets/tyron mayers.jpg";
import anna from "../assets/anna capron.avif";
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
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
];

export const operations = [
  {
    buttonTitle: "Swift Delivery",
    title: "Get your home furnishings in a flash with rapid delivery.",
    icon: GiWhirlwind,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, perspiciatis blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia.",
    isActive: true,
  },
  {
    buttonTitle: "Stellar Support",
    title: "Always here to help: stellar support around the clock.",
    icon: TbHeartHandshake,
    text: "Dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, plorem blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia minus sint, plorem ex harum.",
    isActive: false,
  },
  {
    buttonTitle: "Fresh Finds",
    title: "Stay ahead of the trends with our latest discoveries.",
    icon: IoMdCheckmark,
    text: "Ipsum dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, pLorem blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia temporibus.",
    isActive: false,
  },
  {
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


export const initialFilters = {
  category: "All",
  company: "All",
  color: "All",
  price: 0,
  shipping: false,
};

export const mario = [
  {
    id: "recZkNf2kwmdBcqd0",
    name: "accent chair",
    price: 25999,
    image: "https://www.course-api.com/images/store/product-1.jpeg",
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    shipping: true,
  },
  {
    id: "recEHmzvupvT8ZONH",
    name: "albany sectional",
    price: 109999,
    image: "https://www.course-api.com/images/store/product-2.jpeg",
    colors: ["#000", "#ffb900"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
  },
  {
    id: "rec5NBwZ5zCD9nfF0",
    name: "albany table",
    price: 309999,
    image: "https://www.course-api.com/images/store/product-3.jpeg",
    colors: ["#ffb900", "#0000ff"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "kitchen",
  },
  {
    id: "recd1jIVIEChmiwhe",
    name: "armchair",
    price: 12599,
    image: "https://www.course-api.com/images/store/product-4.jpeg",
    colors: ["#000", "#00ff00", "#0000ff"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "bedroom",
    shipping: true,
  },
  {
    id: "recotY5Nh00DQFdkm",
    name: "dining table",
    price: 42999,
    image: "https://www.course-api.com/images/store/product-5.jpeg",
    colors: ["#00ff00", "#0000ff", "#ff0000"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "dining",
    shipping: true,
  },
  {
    id: "rec1Ntk7siEEW9ha1",
    name: "emperor bed",
    price: 23999,
    image: "https://www.course-api.com/images/store/product-6.jpeg",
    colors: ["#0000ff", "#000"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "bedroom",
    shipping: true,
  },
  {
    id: "recNZ0koOqEmilmoz",
    name: "entertainment center",
    price: 59999,
    image: "https://www.course-api.com/images/store/product-7.jpeg",
    featured: true,
    colors: ["#000", "#ff0000"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    shipping: true,
  },
  {
    id: "recrfxv3EwpvJwvjq",
    name: "high-back bench",
    price: 39999,
    image: "https://www.course-api.com/images/store/product-8.jpeg",
    featured: true,
    colors: ["#000", "#00ff00"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    shipping: true,
  },
  {
    id: "recoW8ecgjtKx2Sj2",
    name: "leather chair",
    price: 20099,
    image: "https://www.course-api.com/images/store/product-9.jpeg",
    colors: ["#ff0000", "#ffb900", "#00ff00"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "bedroom",
  },
  {
    id: "recEOA6qtDag1hRbU",
    name: "leather sofa",
    price: 99999,
    image: "https://www.course-api.com/images/store/product-10.jpeg",
    colors: ["#00ff00", "#0000ff"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
  },
  {
    id: "recoAJYUCuEKxcPSr",
    name: "modern bookshelf",
    price: 31999,
    image: "https://www.course-api.com/images/store/product-11.jpeg",
    featured: true,
    colors: ["#ffb900", "#ff0000", "#00ff00"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "kids",
  },
  {
    id: "recQ0fMd8T0Vk211E",
    name: "modern poster",
    price: 3099,
    image: "https://www.course-api.com/images/store/product-12.jpeg",
    colors: ["#000"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    shipping: true,
  },
  {
    id: "rec7CjDWKRgNQtrKe",
    name: "shelf",
    price: 30999,
    image: "https://www.course-api.com/images/store/product-13.jpeg",
    colors: ["#00ff00"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
  },
  {
    id: "recF0KpwlkF7e8kXO",
    name: "simple chair",
    price: 109999,
    image: "https://www.course-api.com/images/store/product-14.jpeg",
    colors: ["#0000ff"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    shipping: true,
  },
  {
    id: "recs5BSVU3qQrOj4E",
    name: "sofa set",
    price: 129999,
    image: "https://www.course-api.com/images/store/product-15.jpeg",
    colors: ["#00ff00", "#ffb900"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    shipping: true,
  },
  {
    id: "recroK1VD8qVdMP5H",
    name: "suede armchair",
    price: 15999,
    image: "https://www.course-api.com/images/store/product-16.jpeg",
    colors: ["#ffb900"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
  },
  {
    id: "rec7JInsuCEHgmaGe",
    name: "utopia sofa",
    price: 79999,
    image: "https://www.course-api.com/images/store/product-17.jpeg",
    featured: true,
    colors: ["#ff0000", "#00ff00"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
  },
  {
    id: "rec3jeKnhInKHJuz2",
    name: "vase table",
    price: 120999,
    image: "https://www.course-api.com/images/store/product-18.jpeg",
    featured: true,
    colors: ["#ff0000"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
  },
  {
    id: "recv2ohxljlK2FZO7",
    name: "wooden bed",
    price: 250099,
    image: "https://www.course-api.com/images/store/product-19.jpeg",
    colors: ["#000", "#ffb900"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "bedroom",
  },
  {
    id: "recJIjREF3dlFi3sR",
    name: "wooden desk",
    price: 150999,
    image: "https://www.course-api.com/images/store/product-20.jpeg",
    colors: ["#000"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    shipping: true,
  },
  {
    id: "recm7wC8TBVdU9oEL",
    name: "wooden desk",
    price: 40099,
    image: "https://www.course-api.com/images/store/product-21.jpeg",
    colors: ["#0000ff", "#00ff00"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
  },
  {
    id: "rectfNsySwAJeWDN2",
    name: "wooden table",
    price: 234999,
    image: "https://www.course-api.com/images/store/product-22.jpeg",
    featured: true,
    colors: ["#ffb900", "#ff0000"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "kitchen",
    shipping: true,
  },
];
