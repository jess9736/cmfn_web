class dats {
  sending(data) {
    let send = JSON.stringify(data);
    if (!localStorage.getItem(data.email)) {
      localStorage.setItem(data.email, send);
      return true;
    }
    console.log(send);
    return false;
  }

  getSession(email, pass) {
    try {
      const local = JSON.parse(localStorage.getItem(email));
      if (pass == local.pass) {
        return local;
      }
    } catch (error) {}
    return false;
  }

  async getMenu(url) {
    const reponse = await fetch("https://chezbobo.onrender.com/products");
    const rep = await reponse.json();
    console.log(rep);
    return rep;
  }
}
export default dats;
// let result = await fetch("https://chezbobo.onrender.com/products", { method: "GET" }).them(()=>{    return  result;})
//use fetch().them((res)=>{}).catch((err)=>{})
// const reponce=  await fetch("http://127.0.0.1:5500/rgbj.json",
//   { header:{ "Content-Type": "application/json"},method:method
// //   ,body:JSON.stringify(data),method:"PATCH"});
// const request = new Request("/rgbj.json", {
//   method: "POST",
//   body: '{"foo": "bar"}',
// })

// let result= await fetch("/rgbj.json",{method:"GET"});
// console.log( result.json())
