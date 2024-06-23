import RegExp2 from "./Redex2.js";
class Landing {
  constructor(session, login) {
    this.login = login;
    this.session = session;
    this.reg = new RegExp2();
    this.local = null;
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
      if (this.local) {
        this.setmessage("already connected");
        return;
      }
      const input = [
        document.getElementById("input-from3"),
        document.getElementById("input-from4"),
      ];
      if (this.testElements(input)) {
        this.local = this.session(input[0].value, input[1].value);
        if (!this.local) {
          this.setmessage("erreur sur les champs");
          input[0].style.outline = "red 5px solid";
          input[1].style.outline = "red 5px solid";
        } else {
          location.hash = "";
        }
        console.log(this.local);
      }
    };
  }

  connctEve() {
    const button2 = document.getElementById("connection");
    const button3 = document.getElementById("reset");
    button3.onclick = (e) => {
      e.preventDefault();
      let input = [
        document.getElementById("input-from1"),
        document.getElementById("input-from2"),
        document.getElementById("input-from3"),
        document.getElementById("input-from4"),
      ];
      input.forEach((element) => {
        if (element) {
          element.value = "";
        }
      });
    };

    button2.onclick = (e) => {
      e.preventDefault();
      location.hash = location.hash == "#login" ? "#connect" : "#login";
    };
  }

  onubmit(e) {
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
      this.setmessage(
        this.login(nom)
          ? "creation réussie"
          : "tu as dejà crée un compte avec cette address mail",
      );
    } else this.setmessage("l'un des élément n'est pas bon");
  }

  testElements(input) {
    let IsPass = true;
    input.forEach((element) => {
      let oki = this.reg.exec(element.value);
      if (oki) {
        element.style.outline = "green 5px solid";
      } else {
        element.style.outline = "red 5px solid";
        this.setmessage("il y à une erreur");
        IsPass = false;
      }
    });
    return IsPass;
  }

  setmessage(str) {
    const notif = document.getElementById("notifiation");
    notif.innerText = str;
  }

  getnom() {
    if (this.local) {
      return this.local.info.nom;
    }
  }
  disco() {
    this.local = null;
  }
}
export default Landing;
