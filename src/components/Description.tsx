import { HiOutlineSparkles } from "react-icons/hi";
import { TbEye } from "react-icons/tb";
import { GiSofa } from "react-icons/gi";
const Description = () => {
  return (
    <section className="py-24 w-[1000px] mx-auto">
      <div className="flex flex-col gap-2 ">
        <h3 className="text-fuchsia-600 text-[1.1rem]">CREEDS WE LIVE BY</h3>
        <h2 className="text-4xl font-medium leading-[3.2rem]">
          Elevate your home with our attitude od excellence and timeless style.
        </h2>
      </div>
      <div className="border border-black flex gap-8 justify-between">
        <div className="flex flex-col gap-5">
          <HiOutlineSparkles className="bg-fuchsia-300 w-12 h-12 p-3 rounded-full text-fuchsia-600" />
          <div>

          <h2 className="font-bold text-lg">Radiance</h2>
          <p>
            Our commitment to providing sparkling solutions ensures every
            customer enjoys a shining, glowing experience with unmatched quality
          </p>
          </div>
        </div>

        
        <div>
          <TbEye className="bg-fuchsia-300 w-12 h-12 p-3 rounded-full text-fuchsia-600" />
          <h2>Radiance</h2>
          <p>
            Our commitment to providing sparkling solutions ensures every
            customer enjoys a shining, glowing experience with unmatched quality
          </p>
        </div>
        <div>
          <GiSofa className="bg-fuchsia-300 w-12 h-12 p-3 rounded-full text-fuchsia-600" />
          <h2>Radiance</h2>
          <p>
            Our commitment to providing sparkling solutions ensures every
            customer enjoys a shining, glowing experience with unmatched quality
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;
