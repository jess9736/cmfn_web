

class Landing {

  constructor(call,login) {this.login=login;this.call=call}

  loginEve() {
    const button = document.getElementById("from_button_login");
    button.onclick = (e) => {
        this.call
        this.onubmit(e);
    };
  }

 async onubmit(e) {
    e.preventDefault();
    const input = document.getElementById("input-from1");
    const input2 = document.getElementById("input-from2");
    const input3 = document.getElementById("input-from3");
    const input4 = document.getElementById("input-from4");
    let nom = {
      email: input3.value,
      pass: input4.value,
      info: { prenom: input2.value, nom: input.value },
    };this.setmessage("oui oui");
    this.login(nom)
   // this.login(nom)
//console.log(this.call)    //window.location.hash = "";
    //demande si c pas con l idée de l autre
    //console.log(this.user);
if(this.call(nom)){input.style.outline="green 5px solid"}else{input.style.outline="red 5px solid"};
}


     setmessage(str){
      const notif = document.getElementById("notifiation");
  
      notif.innerText="notifier";
  }

}
export default Landing;
