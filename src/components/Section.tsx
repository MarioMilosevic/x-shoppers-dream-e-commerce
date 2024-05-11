import { ForwardedRef, forwardRef } from "react";
import { SectionProps } from "../types/types";

const Section = forwardRef(
  (
    { width, subtitle, title, children }: SectionProps,
    ref: ForwardedRef<HTMLElement>
  ) => {
    const realWidth =
      width === "1000"
        ? "lg:w-[1000px]"
        : width === "800"
        ? "lg:w-[800px]"
        : null;
    return (
      <section
        className={`w-[65%] py-28 lg:py-custom-py ${realWidth} opacity-0 translate-y-[10rem] mx-auto flex flex-col gap-20 transition-all duration-1000`}
        ref={ref}
      >
        <div className="w-full flex flex-col gap-2 mx-auto">
          <h3 className="text-fuchsia-600 text-base lg:text-[1.1rem]">
            {subtitle}
          </h3>
          <h2 className="text-2xl lg:text-4xl font-medium leading-8 lg:leading-[3.2rem]">
            {title}
          </h2>
        </div>
        {children}
      </section>
    );
  }
);

export default Section;
