import styles from "Container.module.css";
// @ts-check

/**
 * 
 * @returns {HTMLDivElement}
 * 
 * Creates a "Container" and returns a reference to the root element (div)
 */
export const Container = () => {
  const root = document.createElement("div");
  root.classList.add(styles.container);

  return root;
}