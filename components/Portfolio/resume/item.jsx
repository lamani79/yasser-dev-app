import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight as icon } from "@fortawesome/free-solid-svg-icons";
import style from './style.module.css'
const Item = ({ title, desc, date }) => {
  return (
    <ul className={"max-w-[400px] space-y-1 cursor-pointer " + " " + style.itemHover}>
      <li className="flex space-x-2 items-center">
        <h3 className="text-main-blue text-2xl font-semibold">{title}</h3>
        <FontAwesomeIcon
          className="transform rotate-[-45deg] text-lg"
          icon={icon}
        />
      </li>
      <li className="text-main-blue text-lg font-normal">{desc}</li>
      <li className="text-main-blue/60 text-base font-light">{date}</li>
    </ul>
  );
};

export default Item;
