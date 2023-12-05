import { Container } from "../components/Container"
import { Heading } from "../components/Heading";
import { Accordion } from "../components/Accordion"
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
  const heading = Heading("FAQs");
  const accordion = Accordion(FAQData);

  container.append(heading);
  container.append(accordion);
  root.append(container);
}
