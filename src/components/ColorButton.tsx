import { colorButtonProps, ColorOptions } from "../types/types";

const ColorButton = ({ color }:colorButtonProps) => {
    const colorOptions:ColorOptions = {
        red:"bg-red-500",
        green:"bg-green-500",
        blue:"bg-blue-500",
        black:"bg-black",
        yellow:"bg-yellow-500",
    }


  return <button className={`w-3 h-3 rounded-full opacity-50 ${colorOptions[color]}`}></button>;
}

export default ColorButton
