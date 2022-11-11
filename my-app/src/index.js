import ReactDOM from 'react-dom/client';

console.log("This is a javascript file in a react app");
alert("Alerting the HTML from Javascript!");

let hello = document.getElementById("hello")
let el = ReactDOM.createRoot(hello);
let input = <h1>Hello World!</h1>;


el.render(input);

document.addEventListener("click",function(){
   let new_el = document.createElement("h1");
   new_el.innerText = "Hello World!"

   hello.appendChild(new_el);
  
},false);