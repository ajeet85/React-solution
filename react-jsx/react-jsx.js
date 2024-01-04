==================jsx====================

<div>Hello JavaTpoint</div> 

React.createElement("div", null, "Hello JavaTpoint");  


we will write JSX syntax in JSX file and see the corresponding JavaScript code which transforms by preprocessor(babel).

Render function
React components have a render function. 
The render function specifies the HTML output of a React component.

JSX Attributes
======================

For custom attributes, we need to use data- prefix. 
In the below example, we have used a 
custom attribute data-demoAttribute as an attribute for the <p> tag.

className in JSX because the class is the reserved keyword in JavaScript


import React, { Component } from 'react';  
class App extends Component{  
   render(){  
      return(  
         <div>  
             <p data-demoAttribute = "demo">This website contains the best CS tutorials.</p>  
         </div>  
      );  
   }  
}  
export default App; 