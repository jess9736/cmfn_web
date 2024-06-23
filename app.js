import button from "./src/js/components/button.js";
import Landing from "./src/js/containers/Landing.js";
import header from "./src/js/layouts/header.js";
import login from "./src/js/pages/login.js";
import dats from "./src/js/data_source/dat.js";
import home from "./src/js/pages/home.js";
//l'instancs  personalise un prototy (proto!=class sans constru & tout)
//todo localstorage
//console.log(email.value);
window.onpopstate = () => {
  main(window.location.hash);
};
console.log();
const appel = new dats();
const event = new Landing(appel.getSession, appel.sending);
//appel.getIng()
const main = function (hash) {
  const container = document.getElementById("container");
  container.innerHTML = "";
  document.getElementById("head").innerHTML = header(event.getnom());

  switch (hash) {
    case "#login":
      container.innerHTML += login(true);
      event.loginEve();
      break;
    case "#menu":
     appel.getMenu().then((info)=>{
      container.innerHTML += home( info)
      console.log( info)})
    
      break;
    case "test":
      console.log("in ltest");
      break;
    case "#connect":
      container.innerHTML += login(false);
      event.sessionEve();
      break;
    case "":
      container.innerHTML = "salut";
      break;
    case"#deco":
      event.disco();
      location.hash="";
    default:
      break;
  }
};
main(window.location.hash);
