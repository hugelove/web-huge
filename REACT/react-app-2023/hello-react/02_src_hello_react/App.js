// 创建“外壳”组件App
import React, { Component } from 'react'
import './App.css'
import Hello from './components/Hello/Hello'
import Huge from './components/Huge'
import Study from './components/Study'
import Beautiful from './components/StyleModule/Beautiful'

export default class App extends Component{
  render(){
    return (
      <div className='wrap'>
        <Hello/>
        <Huge/>
        <Study/>
        <Beautiful/>
      </div>
    )
  }
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React--胡歌app
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
