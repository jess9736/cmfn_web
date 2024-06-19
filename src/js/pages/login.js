import froms from "../components/form.js";
const login = function () {
  const data = {
    button_login: "from_button_login",
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
        ${froms(data)}
        
        </section>
        `;
}; //pour mod un coponent on y crée un parent pouc touch le css de l'enfant
export default login;
