import { useEffect, useState } from "react"
import { url } from "../utils/constants"
import Product from "./Product";
const FeaturedProducts = () => {
    const [products, setProducts] = useState([])
   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch(url);
           if (!response.ok) {
             throw new Error("Network response was not ok");
           }
           const dataResponse = await response.json();
           const { data } = dataResponse
           console.log(data)
           setProducts(data)

       } catch (error) {
         console.error("Error fetching data", error);
       }
     };

     fetchData();
   }, []);

  return (
    <section>
          {products.map(product => <Product key={product.id} {...product} />)}
    </section>
  )
}

export default FeaturedProducts
