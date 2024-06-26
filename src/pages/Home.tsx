import Hero from "../components/Hero";
import News from "../components/News";
import FeaturedProducts from "../components/FeaturedProducts";
import Description from "../components/Description";
import Operations from "../components/Operations";
import Testimonials from "../components/Testimonials";
import { setActivePageIndex } from "../redux/features/appSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActivePageIndex(0));
  }, [dispatch]);
  return (
    <>
      <Hero />
      <News />
      <FeaturedProducts />
      <Description />
      <Operations />
      <Testimonials />
    </>
  );
};

export default Home;
