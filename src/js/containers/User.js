
import RegExp2 from "./Redex2.js";

class User {
  //todo finich that

  constructor() {
  this.nom="";
   
  }

  // getInfo(i=0) {
  //   return this.dat.tab[i];
  // }

  /**
   * prend les data de l'user pour
   * vérifier si les info sont valide
   * envoie les data si oki = true dans dats
   * r
   * 
   * @param {obj } data obj
   *  
   * @returns oki : bolean
   */
  newUser(data) {
   let oki =(new RegExp2().exec(data.info.nom));   
   console.log (oki);

    //this.dat.send(data);
    // todo use fetch
    return oki //is success to type of data for send 
  }

  // Connection(email, pass) {
  //   this.dat.tab.forEach((el) => {
  //     if (el.pass == pass && el.email == email) {
  //       this.login(el.email);
  //       return true;
  //     }
  //   });
  //   return false;
  // }

  setNom(res) { this.nom = res}


  login(res="bonjour") { //reponce token.get(res)
console.log(this.dat)
  }

getToken(){}

  logout() {this.nom = ""}//del le token et c lui qui a le nom
}
export default User;
