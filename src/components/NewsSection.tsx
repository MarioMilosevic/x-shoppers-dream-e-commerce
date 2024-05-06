import techCrunchImg from "../assets/techCrunch.8e59ce33cdb22ba0b8dd.png";
import bussinessInsiderImg from "../assets/businessInsider.a50839ce9f675fc574e6.png";
import newYorkTImesImg from "../assets/newYorkTimes.1279b92266cf081e20a6.png";
import forbesImg from "../assets/forbes.c9d98237f5d5f000eaad.png";
import usaTodayImg from "../assets/usaToday.56382ee08e942ad7c93c.png";
const NewsSection = () => {
  return (
    <section className="flex flex-col gap-7 border border-black py-24 w-[1300px] mx-auto">
      <h2 className="text-center contrast-0 font-semibold">AS FEATURED IN</h2>
      <div className="grid grid-cols-5  border border-black">
        <img
          className="contrast-0 border border-black"
          src={techCrunchImg}
          alt={techCrunchImg}
        />
        <img
          className="contrast-0 border border-black"
          src={bussinessInsiderImg}
          alt={bussinessInsiderImg}
        />
        <img
          className="contrast-0 h-[32px] self-center"
          src={newYorkTImesImg}
          alt={newYorkTImesImg}
        />
        <img
          className="contrast-0 h-[32px]"
          src={forbesImg}
          alt={forbesImg}
        />
        <img
          className="contrast-0 h-[32px]"
          src={usaTodayImg}
          alt={usaTodayImg}
        />
      </div>
    </section>
  );
};

export default NewsSection;
