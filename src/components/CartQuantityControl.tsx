const CartQuantityControl = () => {
    // console.log('treba promjeniti broj')
  return (
    <div className="flex justify-between text-3xl items-center">
      <button>-</button>
      <span className="font-semibold text-4xl">1</span>
      <button>+</button>
    </div>
  );
}

export default CartQuantityControl
