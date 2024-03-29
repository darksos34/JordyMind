import React, {useState} from "react";
const SearchForm = () => {

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

            <ul>
                {historyList.map((rec)=>{
                    return<div>{rec}</div>
                })}
            </ul>
        </div>

    );
}
export default SearchForm;