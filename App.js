// import User from "./User";
// function App() {
//   let users = [
//     {
//       id: 23,
//       name: "John",
//       age: 25,
//       place: "hyderabad",
//     },
//     {
//       id: 26,
//       name: "Peter",
//       age: 27,
//       place: "AP",
//     },
//   ];
//   return (
//     <>
//       {users.map((u) => {
//         return (
//           <User
//             key={u.id}
//             id={u.id}
//             name={u.name}
//             age={u.age}
//             place={u.place}
//           />
//         );
//       })}
//     </>
//   );
// }

//import { useState } from "react";

// export default App;

//Different ways to create & call Functional components

//Named function
// function App(props) {
//   console.dir(props);
//   return (
//     <>
//       <h1>This is heading</h1>
//       <p>This is para</p>
//       <p>{props.children}</p>
//     </>
//   );
// }

//Arrow function

// let App = () => {
//   return (
//     <>
//       <h1>This is heading</h1>
//       <p>This is para</p>
//     </>
//   );
// };

//Event handling
// function App() {
//   function displayMessage() {
//     alert("button clicked");
//   }
//   return (
//     <button
//       onClick={() => {
//         alert("button clicked");
//       }}
//     >
//       click
//     </button>
//   );
// }

// function App() {
//   function displayMessage(e) {
//     alert(e.target);
//   }
//   return (
//     <input
//       onClick={(e) => {
//         displayMessage(e);
//       }}
//     />
//   );
// }
//import React, { useState } from "react";

//Functional Component
// function App() {
//   let [counter, updateCounter] = useState(0);
//   return (
//     <>
//       <h1>Counter Value :{counter}</h1>
//       <button
//         onClick={() => {
//           updateCounter(++counter);
//         }}
//       >
//         Change
//       </button>
//     </>
//   );
// }

//

// import React from "react";
// class App extends React.Component {
//   state = {
//     product: "Realme pro 8",
//     price: 20000,
//   };
//   render() {
//     return (
//       <>
//         <h1>Product :{this.state.product}</h1>
//         <h2>Price :{this.state.price}</h2>
//         <input id="price" type="number" />
//         <button
//           onClick={() => {
//             let p = document.getElementById("price").value;
//             console.log(p);
//             this.setState({
//               price: p,
//             });
//           }}
//         >
//           Update
//         </button>
//       </>
//     );
//   }
// }

//Class Compnent using state and setState methods:
// import React from "react";
// class App extends React.Component {
//   state = {
//     product: "Realme 8 pro",
//     price: 30000,
//   };

//   render() {
//     return (
//       <>
//         <h1>Product:{this.state.product}</h1>
//         <p>Price:{this.state.price}</p>
//         <input id="price" type="number" />
//         <button
//           onClick={() => {
//             let p = document.getElementById("price").value;
//             console.log(p);
//             this.setState({
//               price: p,
//             });
//           }}
//         >
//           Update
//         </button>
//       </>
//     );
//   }
// }

//Functional component using useState

// const App = () => {
//   const [name, setName] = useState("John");

//   return (
//     <center>
//       <>
//         <h1>{name}</h1>
//         <button onClick={() => setName("Peter")}>Change</button>
//       </>
//     </center>
//   );
// };

//Background color change using React
// import "./App.css";
// function App() {
//   return (
//     <div className="Wrapper">
//       <h1>Background Color changer</h1>
//       <input
//         type="color"
//         onChange={(e) => {
//           document.body.style.background = e.target.value;
//         }}
//       />
//     </div>
//   );
// }
import React, { useState } from "react";

function App() {
  const [state, updateState] = useState("");

  return (
    <div>
      <center>
        <h1>NASA Weather Report</h1>
        <input type="text" name="state" value={state} />
        <br></br>
        <button className="button">Get Temperature</button>
      </center>
    </div>
  );
}

export default App;
