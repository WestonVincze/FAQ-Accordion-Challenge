import { Accordion, Accordion } from "../components/Accordion"
import { Container } from "../components/Container"
import { FAQData } from "./FAQData";
// @ts-check

/**
 * Builds FAQs scene with a container and accordion using FAQData and appends to `root`.
 * 
 * @param {HTMLElement} root 
 * 
 */
export const FAQs = (root) => {
  const container = Container();
  const accordion = Accordion(FAQData);

  container.append(accordion);
  root.append(container);
}
