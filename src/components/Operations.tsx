import { operations } from "../utils/constants";
import Operation from "./Operation";
import Button from "./Button";
import { useState } from "react";
import { useRef, useEffect } from "react";
import { useOutletContext } from "react-router";
import { OutletContext } from "../types/types";

const Operations = () => {
  const [currentActiveIndex, setCurrentActiveIndex] = useState<number>(0);

  const { setIsNavFixed } = useOutletContext() as OutletContext;
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsNavFixed(entry.isIntersecting);
      });
      observer.observe(sectionRef.current);
    }
  }, [setIsNavFixed]);




  return (
    <section
      className="w-full py-custom-py border-t border-t-neutral-300"
      ref={sectionRef}
    >
      <div className="w-[800px] mx-auto flex flex-col gap-2 ">
        <h2 className="text-fuchsia-600 tracking-wider font-medium">
          OPERATIONS
        </h2>
        <h1 className="text-[37px] font-medium leading-[3.2rem]">
          Where simplicity meets efficiency to bring your home to life.
        </h1>

        <div className="flex justify-between overflow-hidden pt-24 pb-12">
          {operations.map((operation, index) => (
            <Button
              key={index}
              color={currentActiveIndex === index ? "Purple" : ""}
              buttonHandler={() => setCurrentActiveIndex(index)}
            >
              {operation.buttonTitle}
            </Button>
          ))}
        </div>
        {
          <Operation
            title={operations[currentActiveIndex].title}
            text={operations[currentActiveIndex].text}
            icon={operations[currentActiveIndex].icon}
          />
        }
      </div>
    </section>
  );
};

export default Operations;
