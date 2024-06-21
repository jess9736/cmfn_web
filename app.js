import button from "./src/js/components/button.js";
import Landing from "./src/js/containers/Landing.js";
import User from "./src/js/containers/User.js";
import header from "./src/js/layouts/header.js";
import login from "./src/js/pages/login.js";
import dats from "./src/js/data_source/dat.js";
//l'instancs  personalise un prototy (proto!=class sans constru & tout)
  //todo localstorage
//console.log(email.value); 
window.onpopstate = () => {
  main(window.location.hash);
};
console.log( )
const user =new User();
const appel =new dats()
const event = new Landing(user.newUser,appel.sending);
//appel.getIng()
const main = function (hash) {
  const container = document.getElementById("container");
  container.innerHTML = "";
  console.log(user.nom);
  document.getElementById("head").innerHTML = header(user.nom); 


  switch (hash) {
    
    case "#login":
      container.innerHTML += login();
     event.loginEve();

      break;
    case "#menu":
      container.innerHTML += button("ee");
    case "test":
    console.log("in ltest")

    case "":
      container.innerHTML = "salut";
      break;
    default:
      break;
  }
};
main(window.location.hash);
