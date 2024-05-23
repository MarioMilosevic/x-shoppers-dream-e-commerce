import { ListItemProps, ListItemOptions } from "../types/types";
import { Link } from "react-router-dom";

const ListItem = ({
  children,
  isActive,
  path,
  clickHandler
}: ListItemProps) => {
  const listItemOptions: ListItemOptions = {
    true: "underline underline-offset-[6px] decoration-fuchsia-500",
    false: "",
  };

  return (
    <li className={`font-normal cursor-pointer ${listItemOptions[isActive]}`}>
      <Link to={`${path}`} onClick={clickHandler}>
        {children}
      </Link>
    </li>
  );
};

export default ListItem;
