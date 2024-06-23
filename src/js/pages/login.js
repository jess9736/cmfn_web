import connection from "../components/connection.js";
import froms from "../components/form.js";
import input from "../components/input.js";
const login = function (loc) {
  const data = {
    button_login: { id: "from_button_login", value: "Valider" },
    button_login2: {
      id: "connection",
      value: loc ? "se connecter" : "s'identifier",
    },
    from_login: "from_group_login",
    tab: [
      {
        sup: "input-from1",
        type: "text",
        place: "nom",
      },
      {
        sup: "input-from2",
        type: "text",
        place: "prenom",
      },
      {
        sup: "input-from3",
        type: "email",
        place: "email",
      },
      {
        sup: "input-from4",
        type: "password",
        place: "password",
      },
    ],
  };

  return `
        <section class="login">
        ${loc ? froms(data) : connection(data)}
        
   
        <button type="rest" id="reset">reinisialisé </button>
 
        </section>
        `;
}; //pour mod un coponent on y crée un parent pouc touch le css de l'enfant
export default login;
