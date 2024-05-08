import Button from "./Button";
const Operations = () => {
  return (
    <section className="w-[800px] mx-auto flex flex-col gap-2 border border-black">
      <h2 className="text-fuchsia-600 tracking-wider font-medium">
        OPERATIONS
      </h2>
      <h1 className="text-[37px] font-medium leading-[3.2rem]">
        Where simplicity meets efficiency to bring your home to life.
          </h1>
          
          <div className="flex justify-between">
             <Button color="Purple">Swift Delivery</Button>
             <Button color="">Stellar Support</Button>
             <Button color="">Fresh Finds</Button>
             <Button color="">Easy Returns</Button>
          </div>
    </section>
  );
};

export default Operations;
