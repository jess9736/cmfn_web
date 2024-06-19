import button from "./button.js";
import input from "./input.js";

const froms = function (data) {
  let section = "";
  data.tab.forEach((element) => {
    section += input(element);
  });

  return `
    <from id="${data.from_login}">
<section>
  

${section}
</section>${button(data.button_login)}</from>
`;
};
export default froms;
