const CartQuantityControl = ({ quantity, incrementProductQuantity, decrementProductQuantity }: { quantity: number | null }) => {
  return (
    <div className="flex justify-between text-3xl items-center">
      <button onClick={decrementProductQuantity}>-</button>
      <span className="font-semibold text-4xl">{quantity}</span>
      <button onClick={incrementProductQuantity}>+</button>
    </div>
  );
};

export default CartQuantityControl;
