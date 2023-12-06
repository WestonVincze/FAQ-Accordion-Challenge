import plusIcon from "/src/assets/icon-plus.svg";
import minusIcon from "/src/assets/icon-minus.svg";
import styles from "../Accordion.module.css";
// @ts-check

/**
 * Renders a single Accordion Item.
 * @param {{ label: string, description: string, startActive: boolean }} AccordionItemProps
 * @returns {HTMLDivElement} The created `AccordionItem` element
 */
export const AccordionItem = ({ label, description }) => {
  const root = document.createElement("div");
  const details = document.createElement("details");
  root.classList.add(styles.item);

  const icon = document.createElement("svg");
  icon.innerHTML = plusIcon;

  const summary = document.createElement("summary");
  summary.innerText = label;
  summary.append(icon);

  const content = document.createElement("p");
  content.innerText = description;

  details.append(summary);
  root.append(details);
  root.append(content);

  const updateIcon = () => {
    icon.innerHTML = details.open ? minusIcon : plusIcon;
  };

  details.addEventListener('toggle', updateIcon);

  return root;
}