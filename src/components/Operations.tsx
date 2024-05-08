import { operationsData } from "../utils/constants";
import Operation from "./Operation";
import Button from "./Button";
import { useState } from "react";
// import { useState } from "react";

const Operations = () => {
  // const [currentActiveIndex, setCurrentActiveIndex] = useState<number>(0);
  const [operations, setOperations] = useState(operationsData);

  const changeActiveOperation = (id: string) => {
    setOperations((prev) =>
      prev.map((operation) =>
        operation.id === id
          ? { ...operation, isActive: true }
          : { ...operation, isActive: false }
      )
    );
  };

  return (
    <section className="w-[800px] mx-auto flex flex-col gap-2 ">
      <h2 className="text-fuchsia-600 tracking-wider font-medium">
        OPERATIONS
      </h2>
      <h1 className="text-[37px] font-medium leading-[3.2rem]">
        Where simplicity meets efficiency to bring your home to life.
      </h1>

      <div className="flex justify-between pt-24 pb-12">
        {operations.map((operation, index) => (
          <Button
            key={index}
            color={operation.isActive ? "Purple" : ""}
            buttonHandler={() => changeActiveOperation(operation.id)}
          >
            {operation.buttonTitle}
          </Button>
        ))}
      </div>
      <div className="flex overflow-hidden border px-8">
        {operations.map(
          (operation) =>
            operation.isActive && (
              <Operation
                key={operation.id}
                title={operation.title}
                icon={operation.icon}
                text={operation.text}
              />
            )
        )}
      </div>
    </section>
  );
};

export default Operations;
