
import './App.css';
import React, {useState} from "react";
const App = () => {

const [inputText,setInputText] = useState("");

  return (
    <div>
      <input onChange={(e) => {
        setInputText(e.target.value)
      }}
             placeholder="Enter some Text"/><br/>
      {inputText}
    </div>
  );
}


export default App;
