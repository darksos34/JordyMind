
import React from "react";
import ShowHideDetails from "./Profile/ShowHideDetails";
import Nav from "./Menu/Nav";

const App = () => {

    return (
        <>
        <Nav/>
            <p>
                Search and add a component to change Images.
                For example when you hover over a picture that the color changes.
            </p>
            <ShowHideDetails/>


        </>

    );
}
export default App;