// // import logo from './logo.svg';
// import './App.css';
// // import Login from './BackendTask/Login';
// import AddNumber from './Components/AddNumber';
// // import Mytask_func from './Components/Mytask_func';
// // import Mytask_class from './Components/Mytask_class';
// // import Mytask_arrow from './Components/Mytask_arrow';
// // import Student_Table from './Styles/Student_Table';
// // import Pictures from './Images/Pictures';
// // import Register from './Form/Register';
// // import NestedComponent from './Components/NestedComponent';

// import ArrayObject from "./Components/ArrayObject";
// import Factorial from './Components/Factorial';
// import RemoveNegative from './Components/RemoveNegative';
// import StateManage from './Components/StateManage';
// import Register from './Form/Register';
// import Hello from './HOC/Hello';
// import WithGreetings from './HOC/WithGreetings';

// import UseCallback from './Hooks/UseCallback';
// import UseEffectHook from './Hooks/UseEffectHook';
// import UseReducerHook from './Hooks/UseReducerHook';
// import UseState from './Hooks/UseState';
// import Logo from "./LogoAnimate/Logo";

// // import Home from './Routing/Home';
// // import Contact from './Routing/Contact';
// // import About from './Routing/About';
// // import { BrowserRouter, Routes, Route} from "react-router-dom";
// // import MyProps from './Properties/MyProps';
// // import MyFuncProps from './Properties/MyFuncProps';
// // import ArrayObject from './Components/ArrayObject';

// const EnhancedHello = WithGreetings(Hello, "Welcome to our site")

// function App() {
//   // const User = "Learn React.Js (Class Comp)"
//   // const Profile = "Welcome To React.Js (Function Comp)"
//   return (
//     <div className='App'>
//       <UseReducerHook />
//       {/* <EnhancedHello name = "Thamizh"/> */}
//       {/* <RemoveNegative />
//       <AddNumber /> */}
//       {/* <Login /> */}
//       {/* <Factorial /> */}
//       {/* <UseCallback /> */}
//       {/* <Register />
//             {/* <UseEffectHook /> */}
//         {/* <PrimeNumbers /> */}
//       {/* <UseState /> */}
//       {/* <StateManage /> */}
//        {/* <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//             <Route path="/Contact" element={<Contact />} />
//             <Route path="/About" element={<About />} />
          
//         </Routes>
//       </BrowserRouter> */}
//       {/* <ArrayObject /> */}
//       {/* <Logo /> */}
//       {/* <ArrayObject /> */}
      
      

//       {/* <MyProps name={User}/>
//       <MyFuncProps name={Profile}/> */}

      
//       </div>
//   );
// }

// export default App;



// import React from 'react';
// import './App.css';
// // import { ThemeProvider } from '../src/Hooks/useContext/ThemeProvider';
// import ThemeToggleButton from './DarkLightTheme/ThemeToggleButton';
// import { ThemeProvider } from './DarkLightTheme/ThemeProvider';


// function App() {

//     return (
//         <ThemeProvider>
//           <div className="App">
//             <header className="App-header">
//               <ThemeToggleButton />
//               </header>
//               </div>
//             </ThemeProvider>

// );
// };

// export default App;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Increment, Decrement } from './Redux/Action'; 

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Counter Example</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
      </div>
  )
}

export default App;

