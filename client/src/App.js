import './App.css';
import React, {useState} from "react";
const App = () => {

  const [inputText,setInputText] = useState("");
  const [historyList,setHistoryList] = useState([]);
  return (
      <div>
        <input onChange={(e) => {
          setInputText(e.target.value)
          setHistoryList([...historyList,e.target.value]);
        }}
               placeholder="Enter some Text"/><br/>
        {inputText}
        <hr/><br/>
        <ul>
          {historyList.map((rec)=>{
            return<div>{rec}</div>
          })}
        </ul>
      </div>

  );
}


export default App;
