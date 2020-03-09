import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pagestart';
import ReactDOM from 'react-dom'


 class App extends React.Component {
  
  render(){

   
      return (
        <Login />
      )
    }
     
  

};

export default App;
ReactDOM.render(<App />,document.getElementById('root'));
