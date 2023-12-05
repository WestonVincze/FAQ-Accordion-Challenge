import styles from "./Container.module.css";
// @ts-check

/**
 * Creates a "Container" and returns a reference to the root element (div)
 * @returns {HTMLDivElement} The created `Container` element
 */
export const Container = () => {
  const root = document.createElement("div");
  root.classList.add(styles.container);

  return root;
}