import plusIcon from "/src/assets/icon-plus.svg";
import minusIcon from "/src/assets/icon-minus.svg";
import styles from "./AccordionItem.module.css";
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

  const icon = document.createElement("icon");
  icon.innerHTML = plusIcon + minusIcon;

  const summary = document.createElement("summary");
  summary.textContent = label;
  summary.append(icon);

  const content = document.createElement("p");
  content.textContent = description;

  details.append(summary);
  root.append(details);
  root.append(content);

  const updateIcons = () => {
    const isOpen = details.open;
    const [plus, minus] = icon.childNodes;

    // show/hide plus and minus icons
    plus.style.opacity = isOpen ? 0 : 1;
    minus.style.opacity = isOpen ? 1 : 0;

    // dynamically assign maxHeight for CSS animation
    content.style.maxHeight = isOpen ? `${content.scrollHeight}px` : 0;
  };

  updateIcons();

  details.addEventListener('toggle', updateIcons);
  window.addEventListener('resize', updateIcons);

  return root;
}
