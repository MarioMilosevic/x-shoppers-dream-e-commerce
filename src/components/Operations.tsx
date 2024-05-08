import { operations } from "../utils/constants";
import Operation from "./Operation";
import Button from "./Button";
import { useState } from "react";

const Operations = () => {
  const [currentActiveIndex, setCurrentActiveIndex] = useState<number>(0);
  return (
    <section className="w-[800px] mx-auto flex flex-col gap-2 border border-black">
      <h2 className="text-fuchsia-600 tracking-wider font-medium">
        OPERATIONS
      </h2>
      <h1 className="text-[37px] font-medium leading-[3.2rem]">
        Where simplicity meets efficiency to bring your home to life.
      </h1>

      <div className="flex justify-between">
        <Button >Swift Delivery</Button>
        <Button >Stellar Support</Button>
        <Button >Fresh Finds</Button>
        <Button >Easy Returns</Button>
      </div>
      {operations.map((operation) => (
        <Operation
          key={operation.id}
          title={operation.title}
          icon={operation.icon}
          text={operation.text}
        />
      ))}
    </section>
  );
};

export default Operations;
