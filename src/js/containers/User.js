import dat from "../data_source/dat.js";

class User {
  constructor() {
    let nom;
    let prenom;
    let email;
    let pass;
  }

  getInfo(data) {
    nom = data[0];
    prenom = data[1];
    email = data[2];
    pass = data[3];
  }

  newUser(data) {
    //test info
    dat.tab.push(data);
    console.log(dat.tab);
  }

  Connection(email, pass) {
    dat.tab.forEach((el) => {
      if (el.pass == pass && el.email == email) {
        this.login(el.email);
        return true;
      }
    });
    return false;
  }

  login() {
    return dat.tab.length > 1;
  }
  logout() {}
}
export default User;
