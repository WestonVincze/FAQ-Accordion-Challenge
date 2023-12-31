import starIcon from "/src/assets/icon-star.svg";
import styles from "./Heading.module.css";
// @ts-check

/**
 * @param {string} text
 * @returns {HTMLElement} The created `Heading` element.
 */
export const Heading = (text) => {
  const root = document.createElement("h1");
  root.classList.add(styles.heading);

  const temp = document.createElement("span");
  temp.innerHTML = starIcon;
  const svgStar = temp.firstChild;

  root.append(svgStar);
  root.append(text);

  return root;
}
