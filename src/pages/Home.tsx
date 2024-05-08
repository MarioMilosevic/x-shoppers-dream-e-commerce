import Hero from "../components/Hero";
import News from "../components/News";
import FeaturedProducts from "../components/FeaturedProducts";
import Description from "../components/Description";
import Operations from "../components/Operations";
// odje ubacit useContext userefprovider
const Home = () => {
  return (
    <>
      <Hero />
      <News />
      <FeaturedProducts />
      <Description />
      <Operations />
    </>
  );
};

export default Home;
