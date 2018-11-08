import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Routers from './routers';


class App extends Component {

  // // 禁止iOS手机的上下滑动
  // componentDidMount(){
    
  //   document.querySelector('body').addEventListener('touchstart', function (event) {
  //     event.preventDefault();
  //   });
  //   document.querySelector('body').addEventListener('touchmove', function (event) {
  //     event.preventDefault();
  //   });
    
  // }

  render() {
    return (
      <div className="App">
        <Routers />    
      </div>
    );
  }
}

export default App;
