import styles from "../Accordion.module.css";
// @ts-check

/**
 * Renders a single Accordion Item.
 * @param {{ label: string, description: string, startActive: boolean }} AccordionItemProps
 * @returns {HTMLDivElement} The created `AccordionItem` element
 */
export const AccordionItem = ({ label, description, startActive = false}) => {
  // create root element
  const root = document.createElement("div");
  root.classList.add(styles.item);
  // add active state and assign value from "startActive"
  // if active, apply "active" class

  // create label
  // append label

  // create description
  // append description

  // return root element
  return root;
}