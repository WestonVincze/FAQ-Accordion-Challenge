import styles from "./Accordion.module.css";
import { AccordionItem } from "./AccordionItem";
// @ts-check

/**
 * Accepts a list of items and creates an `AccordionItem` for each.
 * @param {{ label: string, description: string }[]} items 
 * @returns {HTMLDivElement} The created `Accordion` element
 */
export const Accordion = (items) => {
  const root = document.createElement("div");
  root.classList.add(styles.accordion);

  // loop through items array
  for (let item in items) {
    root.append(AccordionItem({ ...item }))
  }

  return root;
}
