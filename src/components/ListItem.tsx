import { ListItemProps } from "../types/types";
import { Link } from "react-router-dom";

const ListItem = ({ children, isActive, path }: ListItemProps) => {
  const underline =
    isActive === true
      ? "underline underline-offset-[6px] decoration-fuchsia-600"
      : "";
  return (
    <li className={`${underline} font-normal`}>
      <Link to={`${path}`}>{children}</Link>
    </li>
  );
};

export default ListItem;
