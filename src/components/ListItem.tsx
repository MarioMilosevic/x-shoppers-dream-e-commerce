import { ListItemProps } from "../types/types";

const ListItem = ({ children, isUnderlined }: ListItemProps) => {
  const underline =
    isUnderlined === true
      ? "underline underline-offset-[6px] decoration-fuchsia-600"
      : "";
  return (
    <li className={`${underline} font-normal`}>
      <a href="#">{children}</a>
    </li>
  );
};

export default ListItem;
