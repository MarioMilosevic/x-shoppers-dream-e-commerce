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
      <Section
        option="small"
        title="Where simplicity meets efficiency to bring your home to life."
        subtitle="Operations"
        ref={sectionRef}
      >
        <div className="flex lg:justify-between ">
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
