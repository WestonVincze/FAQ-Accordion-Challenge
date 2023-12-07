import { AccordionItem } from "./AccordionItem";
// @ts-check

/**
 * Accepts a list of items and creates an `AccordionItem` for each.
 * @param {{ label: string, description: string }[]} items 
 * @returns {HTMLDivElement} The created `Accordion` element
 */
export const Accordion = (items) => {
  const root = document.createElement("div");

  // loop through items array
  for (let i = 0; i < items.length; i++) {
    const startOpen = i === 0;
    root.append(AccordionItem({ ...items[i], startOpen }))
  }

  return root;
}
