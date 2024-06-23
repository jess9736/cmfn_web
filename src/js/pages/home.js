import nav from "../components/nav.js";

const home = function (data) {
  let source = "";
  // let oki =  data.then((rep)=>{
  //          console.log( rep)

  //        console.log(  [rep[0].name,rep[0].type])
  //      console.log (  source = rep[0].urls[0]);

  console.log(data[0].name);
  data.forEach((dataIn) => {
    source += `       
     <li >  <section >${nav(dataIn.name)}
     <div class="contain">  
     <img class="image" src="${dataIn.urls[0]}">
 
        <div class="text">${dataIn.type}</div>
 
     </div>
       </section>
       </li>`;
  });

  // });
  return `
       <ul>
${source}
       </ul>
       <div>Tout nos plats sont préparé avec amour</div>
        
        
        `;
};
export default home;
