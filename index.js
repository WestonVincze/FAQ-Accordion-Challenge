import { FAQs } from "./src/scenes/FAQs";
// grab reference to document root (#app)
// render FAQ scene
// render footer

window.onload = () => {
  const app = document.getElementById("app");
  FAQs(app);
}