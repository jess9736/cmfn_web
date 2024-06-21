class  dats  {
 url=""
 

update(){console.log("cool");}


 async sending(data){
  localStorage.setItem("user data.id",JSON.stringify(data))
// const reponce=  await fetch("http://127.0.0.1:5500/rgbj.json", 
//   { header:{ "Content-Type": "application/json"},method:method
//   ,body:JSON.stringify(data),method:"PATCH"});
const request = new Request("/rgbj.json", {
  method: "POST",
  body: '{"foo": "bar"}',
})

let result= await fetch("/rgbj.json",{method:"GET"});
console.log( result.json()
)

console.log(localStorage.getItem("user data.id"));
console.log(request);
}
  async getIng(url){
  let result= await fetch("/rgbj.json",{method:"GET"});
  return result.json()


//use fetch().them((res)=>{}).catch((err)=>{})

}


}
export default dats;
