import User from "./User.js";

class Landing {
  use = new User();
  constructor() {}

  loginEve() {
    const button = document.getElementById("from_button_login");
    button.onclick = (e) => {
      this.onubmit(e);
    };
  }

  onubmit(e) {
    e.preventDefault();
    const input = document.getElementById("input-from1");
    const input2 = document.getElementById("input-from2");
    const input3 = document.getElementById("input-from3");
    const input4 = document.getElementById("input-from4");
    let nom = {
      email: input3.value,
      pass: input4.value,
      info: { prenom: input2.value, nom: input.value },
    };

    this.use.newUser(nom);
    window.location.hash = "";
    console.log("ok");
  }
  isCon() {
    let k = this.use.login();
    console.log(k);
    return k;
  }
}
export default Landing;
