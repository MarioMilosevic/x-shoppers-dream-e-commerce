import Sidebar from "../components/Sidebar";
import ProductsContent from "../components/ProductsContent";
const Products = () => {
  return (
    <div className="lg:w-[1200px] grid grid-cols-[15%,1fr] gap-12 mx-auto py-16 border border-black">
      <Sidebar />
      <ProductsContent />
    </div>
  );
};

export default Products;
