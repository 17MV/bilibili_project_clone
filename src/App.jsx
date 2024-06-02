import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Layout from './page/Layout';
import Dashboard from './page/Dashboard';
import Products from './page/Products';
import LoginForm from './page/LoginForm';
import Payments from './page/Payments';
import Profile from './page/Profile';
import Orders from './page/Orders';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/" element={<Layout />} >
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/profile" element={<Profile />} />    
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;







// import React from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from 'react-router-dom';

// import Home from './pages/Home';
// import Layout from './pages/Layout';
// import Dashboard from './pages/Shop';
// import About from './pages/About';
// import Order from './pages/Order';
// import LoginForm from './pages/LoginForm';
// import "bootstrap/dist/css/bootstrap.min.css";



// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<LoginForm/>} />
//         <Route path="/" element={<Layout />} >
//         <Route index element={<Home />} />
//         <Route path="/shop" element={<Dashboard />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/order" element={<Order />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;




























// SEMI FINAL EXAM ANSWER

// import React, { useState, useEffect } from 'react';
// import './App.css'

// export default function TrafficLight() {
//   const [walk, setWalk] = useState(true);
//   const [timer, setTimer] = useState(0);
//   const [startButtonDisabled, setStartButtonDisabled] = useState(false);
//   const [stopButtonDisabled, setStopButtonDisabled] = useState(true);
 


//   const startEating = () => {
//     setWalk(true);
//     setTimer(15);
//     setStartButtonDisabled(true);
//     setStopButtonDisabled(false);


//   };


//   const startDrinking = () => {
//     setWalk(false);
//     setTimer(10);
//     setStartButtonDisabled(false);
//     setStopButtonDisabled(true);
//   };


//   useEffect(() => {
//     let timerId;


//     if (walk || timer > 0) {
//       timerId = setInterval(() => {
//         if (timer > 0) {
//           setTimer((prevTimer) => prevTimer - 1);
//         } else {
//           setWalk((prevWalk) => prevWalk);
//         }
//       }, 1000);
//     }


//     // Cleanup function
//     return () => clearInterval(timerId);
//   }, [timer, walk]);


//   return (
//     <>
//       <div style={{ marginLeft: '20px' }}>
//         <h2>Welcome To eating Contest!</h2>
//         <h1 style={{ color: walk ? 'darkgreen' : 'darkred' }}>
//           {walk ? 'EAT' : 'DRINK'} -  {timer}<br />
//         </h1>
//         {timer === 0 && <h1>Times Up!</h1>}
//         <button
//           style={{ border: '1px solid green' }}
//           onClick={startEating}
//           disabled={startButtonDisabled}
//         >
//           Start Eating
//         </button>
//         <button
//           style={{ border: '1px solid green' }}
//           onClick={startDrinking}
//           disabled={stopButtonDisabled}
//         >
//           Start Drinking
//         </button>
//       </div>
//     </>
//   );
// }







// import React, {useState} from 'react';
// import './App.css'


// export default function App(){

//   const [num1, setNum1] = useState('0');
//   const [num2, setNum2] = useState('0');
//   const [message, setMessage] = useState('Sum of: ');

//   const add = (e) => {
//     e.preventDefault();

//     var num1 = parseInt(e.target.elements.num1.value);
//     var num2 = parseInt(e.target.elements.num2.value);

//     const sum = num1 + num2;
//     setMessage("Sum is: " + sum);
//     alert("Sum is: " + sum);

//   }
//   return (
//     <>
//       <h1>Sum of 2 numbers</h1>
//       <form onSubmit={add}>

//         Enter Number 1: <input type="number" name="num1" value={num1} onChange={(e) => setNum1(e.target.value)} required/><br></br>
//         Enter Number 2: <input type="number" name="num2" value={num2} onChange={(e) => setNum2(e.target.value)} required/><br></br>
//         <br></br>
//         <button style={{border:"1px solid green"}} type="submit">Add</button>
//       </form>
//       {message ? <p>{message}</p> : null}
//     </>
//   )
// }














// import React, {useState} from 'react';

// export default function App (){

//     const [age, setAge] = useState('');
//     const [message, setMessage] = useState('Enter First To know!');

//   const checkAge = (e) => {
//     e.preventDefault();

//     if(age >= 18){
//       setMessage("Can Vote National or Local Election!");
      
//     }
//     else{
//       setMessage("Cannot Vote!!");
      
//     }
    
    
//   };
//   return (
//     <>
//       <h1>Age Verifier</h1>
//       <form onSubmit={checkAge}>
//         Enter Age: <input type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)} required /><br />
//         <button style={{border:"1px solid green"}} type="submit">Check Age</button>
//       </form>
//       {message ? <p>{message}</p> : null}
//     </>
//   );
// };




/*CHECK IF AGE IS ELIGIBLE TO VOTE OR NOT USING ALERT NOT TERNARY:*/ 

// import React from 'react';

// const checkAge = (e) => {
//   e.preventDefault();

//   const age = parseInt(e.target.elements.age.value);

//   if (age >= 18) {
//     alert('You are eligible to enter.');
//   } else {
//     alert('You are not eligible to enter.');
//   }
// };

// function App (){

//   return (
//     <>
//       <h1>Age Verifier</h1>
//       <form onSubmit={checkAge}>
//         Enter Age: <input type="number" name="age" required /><br />
//         <button style={{border:"1px solid green"}} type="submit">Check Age</button>
//       </form>
//     </>
//   );
// };

// export default App;







/*CHECK IF AGE IS ELIGIBLE TO VOTE OR NOT USING TERNARY BUT  WITH ALERT AS AN OUTPUT:*/ 

// import React from 'react';

// const checkAge = (e) => {
  
//     var ageChecker = parseInt(e.target.elements.age.value);

//     {ageChecker >= 18 ? alert('You can vote National and Local Elections'):  alert('You    cannot vote!')}

//     e.preventDefault();

// };


// export default function App (){


//   return (
//     <>
//       <h1>Age Verifier</h1>
//       <form onSubmit={checkAge}>
//         Enter Age: <input type="number" name="age" required /><br />
//         <button style={{border:"1px solid green"}} type="submit">Check Age</button>
//       </form>
//     </>
//   );
// };







/*CHECK IF AGE IS ELIGIBLE TO VOTE USING TERNARY BUT NO  ALERT OUTPUT:*/ 

// import React from 'react';

// const checkAge = (e) => {
  
  
//   var ageChecker = parseInt(e.target.elements.age.value);

//   var kenneth = ageChecker >= 18 ? 'You can vote in National and Local Elections' : 'You cannot vote!';
//   document.getElementById('messageToDisplay').textContent = kenneth;
  
//   e.preventDefault();
// };

// export default function App (){

//   return (
//     <>
//       <h1>Age Verifier</h1>
//       <form onSubmit={checkAge}>
//         Enter Age: <input type="number" name="age" required /><br />
//         <button style={{border:"1px solid green"}} type="submit">Check Age</button>
//       </form>
//       <p id="messageToDisplay"></p>
//     </>
//   );
// };











// import React from 'react';
// import './App.css'


// function mekus(event){
//   var ageChecker = parseInt(event.target.elements.age.value);
//   return(
//     <>
//     <p>{ageChecker >=18 ? alert('You can vote national and local election')
//     : alert('Age is Minor, cannot vote!')}</p>
//     </>
//   );3
// }

// export default function App(){
//   return (
//     <>
//     <h3>Responding to Event</h3>

//     <form onSubmit={mekus}>
//       Enter age: <input type="number" min="0" max="100" name="age"/><br></br>
      
//       <br></br>
//       <button type = "submit">Check Age</button>
//     </form>
//     </>
//   );
// }






// function mekus(event){
//   var num1=parseInt(event.target.elements.num1.value);
//   var num2=parseInt(event.target.elements.num1.value);
  
//   var sum = num1 + num2;
//   alert("The sum is: "+ sum);
//   event.preventDefault();
// }

// export default function App(){
//   return (
//     <>
//     <h3>Responding to Event</h3>

//     <form onSubmit={mekus}>
//       Enter num1: <input type="number" name="num1"/><br></br>
//       Enter num2: <input type="number" name="num2"/><br></br>
//       <br></br>
//       <button type = "submit">Add</button>
//     </form>
//     </>
//   );
// }





// function mekus(){
//   var num1=10;
//   var num2=10;
//   return alert(num1+num2);
// }

// export default function App(){
//   return (
//     <>
//     <h3>Responding to Event</h3>

//     <button onClick={mekus}>Sum of 10 & 10 is</button>
//     </>
//   );
// }






// function mekus(){
//   return alert('Mekus-Mekus na yan!');
// }

// export default function App(){
//   return (
//     <>
//     <h3>Responding to Event</h3>

//     <button onClick={mekus}>Show Alert Mekus</button>
//     </>
//   );
// }






// export const people = [{
//   id: 0,
//   name: 'Creola Katherine Johnson',
//   profession: 'mathematician',
//   accomplishment: 'spaceflight calculations',
//   imageId: 'MK3eW3A'
// }, {
//   id: 1,
//   name: 'Mario José Molina-Pasquel Henríquez',
//   profession: 'chemist',
//   accomplishment: 'discovery of Arctic ozone hole',
//   imageId: 'mynHUSa'
// }, {
//   id: 2,
//   name: 'Mohammad Abdus Salam',
//   profession: 'physicist',
//   accomplishment: 'electromagnetism theory',
//   imageId: 'bE7W1ji'
// }, {
//   id: 3,
//   name: 'Percy Lavon Julian',
//   profession: 'chemist',
//   accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
//   imageId: 'IOjWm71'
// }, {
//   id: 4,
//   name: 'Subrahmanyan Chandrasekhar',
//   profession: 'astrophysicist',
//   accomplishment: 'white dwarf star mass calculations',
//   imageId: 'lrWQx8l'
// }];



// export default function List() {
//   const chemists = people.filter(person =>
//     person.profession === 'chemist'
//   );
//   const listItems = chemists.map(person =>
//     <li>
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   return <ul>{listItems}</ul>;
// }









/*logical and statemeent*/
// function Item({ name, isPacked }) {
//     return (
//     <li className="item">
//       {name} {isPacked && '✔'}
//     </li>
//   );
// }

/*ternary statemeent*/
//   return (
//     <li className="item">
//       {isPacked ? name + ' ✔' : name}
//     </li>
//   );
// }

/*if statemeent*/
//   if (isPacked) {
//     return <li className="item">{name} ✔</li>;
//   }
//   return <li className="item">{name}</li>;
// }

// export default function App() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item 
//           isPacked={true} 
//           name="Space suit" 
//         />
//         <Item 
//           isPacked={false} 
//           name="Helmet with a golden leaf" 
//         />
//         <Item 
//           isPacked={true} 
//           name="Photo of Tam" 
//         />
//       </ul>
//     </section>
//   );
// }









// import './App.css'
// import Numbers from './component/AddNum';



// export default function App() {
//   return (
//     <>
//       <Numbers
//        operator1="Addition"
//        operator2="Subtraction"
//        operator3="Product"
//        operator4="Quotient"
//        num1="10"
//        num2="10"/>
//     </>
//   );
// }










// import './App.css'
// import React, {Component} from 'react';

//  class Add extends Component{
//   render(){
//     return (
//       <> 
       
//         <h2>Addition of <span style={Style.color}>{this.props.num1}</span> and  
//         <span style={Style.color}> {this.props.num1}</span> is 
//         <span style={Style.color}> {this.props.result}</span></h2>
//         <h2>Subtraction of <span style={Style.color}>{this.props.num2}</span> and  
//         <span style={Style.color}> {this.props.num1}</span> is 
//         <span style={Style.color}> {this.props.result2}</span></h2>
        
//       </>

//     );
//   }
// }

// class App extends Component{
//  render(){
//     return (
//       <>     
//         <Add num1 = "10" result = "20"
//          num2 = "20" result2= "10"/>
//       </>

//     );
//   }
// }

//   const Style = {
//   color:{
//   fontFamily: "tahoma",
//   fontSize: "25px",
//   color: "red",
//    }
// }
  


// export default App;









// import SchoolInfo from './component/SchoolInfo';

// export default function App() {
//   return(
//     <>
//       <SchoolInfo
//     name= "Cristal e-College"
//     location= "Km.15,Tawala,Panglao,Bohol"
//     studentsnumber="1000"
//       bsit= "BSIT"
//       education= "Education"
//       crim= "Criminology"
//       />
//       </>
    
//   );
    
//   }










// import {getImageUrl} from './component/utils.jsx';
//   function Avatar({ person, size}) {
//     return (
//       <img 
//         className="avatar"
//         src="https://i.imgur.com/1bX5QH6.jpg"
//         alt={person.name}
//         width={size}
//         height={size}
//       />

//     );
// }

// export default function Profile() {
//   return (
//     <div>
//       <Avatar
//         size={100}
//         person={{
//         name: 'Katsuko Saruhashi',
//         imageId: 'Yfe0qp2'
//       }}
//     />
//       <Avatar
//         size={80}
//         person={{
//         name: 'Aklilu Lemma',
//         imageId: 'OKS67lh'
//       }}
//     />
//       <Avatar
//         size={50}
//         person={{
//         name: 'Lin Lanying',
//         imageId: '1bX5QH6'
//       }}
//     />
//     </div>

//   );
// }






// function Avatar() {
//  return (
//    <img
//      className="avatar"
//      src="https://i.imgur.com/1bX5QH6.jpg"
//      alt="Lin Lanying"
//      width={100}
//      height={100}
//    />
//  );
// }
// export default function App() {
//  return (
//    <Avatar />
//  );
// }








// import React, {Component} from 'react';

// class Greet extends Component{
//   render(){
//     return (
//       <>
//         <h1>Hello world {this.props.name}</h1>
//       </>

//     );
//   }
// }
// class App extends Component{
//  render(){
//     return (
//       <>
//         <Greet name = "Kenneth"/>
//       </>

//     );
//   }
// }
// export default App;









// import React from 'react';

// export default function App(){
//   return (
//     <>
//       <div className = "disney"
//         style={Style.disney}>
//         <h1>HELLO KENNETH ESCABARTE</h1>
//       </div>
//       <div className = "disney2"
//         style={Style.disney2}>
//         <h1>AMONG DISNEY PRINCESS</h1>
//       </div>

//     </>
 
//   );
// } 

// const Style = {
//   disney:{
//   fontFamily: "tahoma",
//   fontSize: "20px",
//   color: "yellow",
//  },
//   disney2:{
//   fontFamily: "monospace",
//   fontSize: "20px",
//   color: "green", 
//  }
// }





// import React from 'react';
// import Ex from './component/propsN';

// export default function App(){
//   return (
//     <>
//       <Ex name = " Kenneth Escabarte" status1 = " Estitik" status2 = " kwarta sigeg pangayog singko"></Ex>
//     </>
 
//   );
// }



// import React from 'react';

// export default function App(){
//   return(
//      <>
//       <Image />
//       <Nav />
//       <Footer />
//      </>
  
//     );
//   }
//   const Image=()=>{
//     return(
//       <>
//         <h1>IMAGE</h1>
//       </>
//     );
//   }
//   const Nav=()=>{
//     return( 
//       <>
//         <ul> 
//           <li>HOME</li>
//           <li>DASHBOARD</li>
//           <li>CONTACT</li>
//         </ul>
//       </>
//     );
//   }
//   const Footer=()=>{
//     return(
//       <>
//         <p>this is footer</p>
//       </>
//     );
//   }
