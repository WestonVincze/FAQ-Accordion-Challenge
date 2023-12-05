import { Container } from "./components/Container/Container.js";
console.log('asdf')
// grab reference to document root (#app)
// render FAQ scene
// render footer

window.onload = () => {
  const app = document.getElementById("app");
  const container = Container();
  console.log("SFDSDF");
  console.log(container);
  const test = document.createElement("div");

  app.append(test);
  app.append(container);

}