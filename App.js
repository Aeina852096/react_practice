// const heading = React.createElement("h1",{id:"heading"},"Hello to javascript world"); // create elenet in react takes three arguments
//heading is basically a react element and react element ius just a javascript object and three aguments are basically props they are basically children to heading
// const root = ReactDOM.createRoot(document.getElementById("root")) //React needs t have a  root where it can do all the dom manipulation
// root.render(heading);

//REact element(object)=>html that browser understands
const parent=React.createElement("div",{id:"parent"},[//create element basically creates object
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am an h1 tag"),
React.createElement("h2",{},"I am an h2 tag")]
//If you want to have more siblings of those chils then you have to create an array
)],
[//create element basically creates object
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am an h1 tag"),
React.createElement("h2",{},"I am an h2 tag")]
)]);//To avoid this situation we have jsx
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);
