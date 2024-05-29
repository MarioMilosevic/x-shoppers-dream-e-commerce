import { ForwardedRef, forwardRef } from "react";
import { SectionProps, widthOptions } from "../types/types";

const Section = forwardRef(
  (
    { option, subtitle, title, children }: SectionProps,
    ref: ForwardedRef<HTMLElement>
  ) => {
    const widthOptions: widthOptions = {
      large: "lg:max-w-[1200px]",
      medium: "lg:max-w-[1000px]",
      small: "lg:max-w-[800px]",
    };

    return (
      <section
        className="border-t border-t-neutral-300 flex  opacity-0 translate-y-[10rem] transition-all duration-1000"
        ref={ref}
      >
        <div
          className={`w-[65%] py-28 lg:py-custom-py mx-auto ${widthOptions[option]} flex flex-col gap-20`}
        >
          <div className="w-full flex flex-col gap-2 mx-auto">
            <h3 className="text-fuchsia-500 text-base uppercase lg:text-[1.1rem]">
              {subtitle}
            </h3>
            <h2 className="text-2xl lg:text-4xl font-medium leading-8 lg:leading-[3.2rem]">
              {title}
            </h2>
          </div>
          {children}
        </div>
      </section>
    );
  }
);

export default Section;
