import { useRef, useEffect, useState } from "react";
import { isIntersectingFn } from "../utils/helperFunctions";

export const useIntersecting = () => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const ref = useRef(null);

  useEffect(() => {
    isIntersectingFn(ref, setIsIntersecting);
  }, []);

    return { isIntersecting, ref };
};
