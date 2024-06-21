import button from "./button.js";
import input from "./input.js";

const connection = function (data, button_login) {
  return `
    <from id="from_connect_login">
<section>

${input(data.tab[2])}
${input(data.tab[3])}
</section>
${button(data.button_login)}
${button(data.button_login2)}

    </from>
    `;
};
export default connection;
