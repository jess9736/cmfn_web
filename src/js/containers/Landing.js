import RegExp2 from "./Redex2.js";
class Landing {
  constructor(session, login) {
    this.login = login;
    this.session = session;
    this.reg = new RegExp2();
  }

  loginEve() {
    const button = document.getElementById("from_button_login");
    this.connctEve();
    button.onclick = (e) => {
      this.call;
      this.onubmit(e);
    };
  }

  sessionEve() {
    const button2 = document.getElementById("from_button_login");
    this.connctEve();
    button2.onclick = (e) => {
      e.preventDefault();
      const input = [
        document.getElementById("input-from3"),
        document.getElementById("input-from4"),
      ];
      if (this.testElements(input)) {
        this.session(input[0].value, input[1].value);
      }
    };
  }

  connctEve() {
    const button2 = document.getElementById("connection");
    button2.onclick = (e) => {
      e.preventDefault();
      location.hash = location.hash == "#login" ? "#connect" : "#login";
    };
  }

  async onubmit(e) {
    e.preventDefault();
    let input = [
      document.getElementById("input-from1"),
      document.getElementById("input-from2"),
      document.getElementById("input-from3"),
      document.getElementById("input-from4"),
    ];
    let nom = {
      email: input[2].value,
      pass: input[3].value,
      info: { prenom: input[1].value, nom: input[0].value },
    };
    if (this.testElements(input)) {
      this.login(nom);
      this.setmessage("tu as crée un compte");
    }
  }

  testElements(input) {
    let IsPass = true;
    input.forEach((element) => {
      let oki = this.reg.exec(element.value);
      if (!oki) {
        element.style.outline = "green 5px solid";
      } else {
        element.style.outline = "red 5px solid";
        this.setmessage("non non");
        IsPass = false;
      }
    });
    return IsPass;
  }
  // this.login(nom)
  //console.log(this.call)    //window.location.hash = "";
  //demande si c pas con l idée de l autre

  setmessage(str) {
    const notif = document.getElementById("notifiation");

    notif.innerText = str;
  }
}
export default Landing;
