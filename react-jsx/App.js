//import logo from './logo.svg';
import './App.css';

/*

below is the example of functional componenet 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/


/* below is the example of class component */
import React, { Component } from 'react';  


class App extends Component{  
   render(){ 

        var dicCSS = {  
        fontSize: 80,  
        fontFamily: 'Courier',  
        color: '#003300'  
        }  

      return(  
         <div   className="App">  
            <h1>Rohit start react</h1>  
          <h2>Training Institutes</h2>  
            <p>This website contains the best CS tutorials.</p>  

            <h1 className = "hello" >class keyword is reserve for js</h1>  
            <p data-demoAttribute = "demo">This element have custom atributr</p>  

            <p className = "hello" >{25+20}  specify the values of attributes as expressions using curly braces {}:</p>  
       
              <div style={dicCSS} > This text {/* This is a comment in JSX */}   </div>

         </div>  
      );  
   }  
}  



export default App;
