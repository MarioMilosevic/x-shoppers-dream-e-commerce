import Button from "./Button";
import { useEffect, useState   } from "react";
import { url} from "../utils/constants";
const Sidebar = () => {
  // const [response, setResponse] = useState()
  useEffect(() => {
    const fetchData = async () => {
     try {
       const response = await fetch(url)
       if (!response.ok) {
         throw new Error('Network response was not ok')
       }
       const dataResponse = await response.json()
       console.log(dataResponse)
      //  setResponse(dataResponse)
     } catch (error) {
      console.error('Error fetching data', error)
      }
    }
    fetchData()
    // console.log(response)
  //  const fetchData = async () => {
  //    try {
  //      const response = await fetch(url);
  //      if (!response.ok) {
  //        throw new Error("Network response was not ok");
  //      }
  //      const dataResponse = await response.json();
  //      const { data } = dataResponse;
  //      setProducts(data.slice(3, 6));
  //    } catch (error) {
  //      console.error("Error fetching data", error);
  //    }
  //  };
  //  fetchData();
 }, []);


  return (
    <aside className="border-r  border-black h-[1000px] text-sm">
      <input
        type="text"
        placeholder="Search"
        className="bg-fuchsia-100 border border-fuchsia-500 p-1  w-full"
      />
      <h3 className="font-medium pt-4 pb-2">Category</h3>
      <ul className="flex flex-col gap-2">
        <li className="font-light">All</li>
        <li className="font-light">Office</li>
        <li className="font-light">Living Room</li>
        <li className="font-light">Kitchen</li>
        <li className="font-light">Bedroom</li>
        <li className="font-light">Dinning</li>
        <li className="font-light">Kids</li>
      </ul>
      <h3 className="font-medium pt-4 pb-2">Company</h3>
      <select className="bg-fuchsia-100 border border-fuchsia-500 p-1 w-[100px]">
        <option value="All">All</option>
        <option value="Marcos">Marcos</option>
        <option value="Liddy">Liddy</option>
        <option value="Ikea">Ikea</option>
        <option value="Caressa">Caressa</option>
      </select>
      <h3 className="font-medium pt-4 pb-2">Color</h3>
      <ul className="flex items-center gap-1">
        <li>All</li>
        <button className="w-3 h-3 rounded-full bg-red-500"></button>
        <button className="w-3 h-3 rounded-full bg-green-500"></button>
        <button className="w-3 h-3 rounded-full bg-blue-500"></button>
        <button className="w-3 h-3 rounded-full bg-neutral-500"></button>
        <button className="w-3 h-3 rounded-full bg-yellow-500"></button>
      </ul>
      <h3 className="font-medium pt-4 pb-2">Price</h3>
      <span className="text-fuchsia-500">$3,099,99</span>
      <input type="range" />
      {/* value, min, max, step */}
      <div className="flex gap-2 items-center pt-4 pb-2">
        <h3 className="font-medium ">Free shipping</h3>
        <input type="checkbox"/>
      </div>
      <Button color="red" buttonHandler={()=> console.log('da izbrise filtere')}>Clear filters</Button>
    </aside>
  );
};

export default Sidebar;
