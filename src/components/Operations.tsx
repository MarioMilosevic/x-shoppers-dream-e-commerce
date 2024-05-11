import { operations } from "../utils/constants";
import Operation from "./Operation";
import Button from "./Button";
import { useRef, useState } from "react";
import { useIntersecting } from "../hooks/useIntersecting";
import Section from "./Section";
const Operations = () => {
  const [currentActiveIndex, setCurrentActiveIndex] = useState<number>(0);
  const sectionRef = useRef(null);
  useIntersecting(sectionRef);
  return (
    <>
      <div className="w-full border-t border-t-neutral-300"></div>
      <Section
        width="800"
        title="Where simplicity meets efficiency to bring your home to life."
        subtitle="OPERATIONS"
        ref={sectionRef}
      >
        <div className="flex lg:justify-between overflow-hidden ">
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
      </Section>
    </>
  );
};

export default Operations;
