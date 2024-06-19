import button from "./src/js/components/button.js";
import Landing from "./src/js/containers/Landing.js";
import header from "./src/js/layouts/header.js";
import login from "./src/js/pages/login.js";

window.onpopstate = () => {
  main(window.location.hash);
};

//l'instancs  personalise un prototy (proto!=class sans constru & tout)
const main = function (hash) {
  const container = document.getElementById("container");
  container.innerHTML = "";
  const event = new Landing();
  document.getElementById("head").innerHTML = header(event.isCon());

  switch (hash) {
    case "#login":
      container.innerHTML += login();
      event.loginEve();

      break;
    case "#menu":
      container.innerHTML = button("ee");

    case "":
      container.innerHTML = "salut";
      break;
    default:
      break;
  }
};
main(window.location.hash);
