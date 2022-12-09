//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";


import Title from "./component/Title.jsx";
import Input from "/workspace/react-hello/src/js/component/Input.js"

const App = () => {
	
    return (
      <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5 ">
        <div className="container flex-col max-w-xl">
            <h1 className="text-5xl   tracking-widest" id="primero">  
                <Title/>   
                <Input/>      
            </h1>
        </div>
      </div>
    )
  }


//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
