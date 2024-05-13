import aboutUs from "../assets/about-us.jpg";
const About = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center pt-16 pb-44 bg-fuchsia-200 ">
        <h1 className="text-4xl font-bold">About us</h1>
      </div>
      <div className="flex flex-col items-center absolute w-[35rem] top-[40%] right-[50%] translate-x-[50%]">
        <img
          className="object-cover py-8"
          src={aboutUs}
          alt={aboutUs}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quel
          optio sapiente ducimus, adipisci nostrum molestiae non vitae, repelli
          facere temporibus amet modi fugit expedita ut hic. Dolores distinctio
          consequuntur totam atque nulla, dolor quasi mon explicabo? Perferendis
          at dolorum sequi reiciendis enim ex laborum temporibus dolor. Totam
          atque nulla, dolor quasi numquam explicabo? Perferendis at soluta
          quidem dolorum sequi reiciendis enim ex laborum temporibs dolor soluta
          quidem dolorum sequi enim ex laborum temporibus. Repellendus, facere
          deleniti quo optio nihil beatae dolorum explicailt quas quasi, nam
          debitis distinctio voluptate officiis et, tempore.
        </p>
      </div>
    </div>
  );
};

export default About;
