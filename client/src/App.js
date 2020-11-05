import './App.css';
import React from "react";
import ShowHideDetails from "./Profile/ShowHideDetails";

const App = () => {

    return (
        <div>

            <p>
                Search and add a component to change Images.
                For example when you hover over a picture that the color changes.
            </p>
            <ShowHideDetails/>

        </div>

    );
}
export default App;