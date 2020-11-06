
import React from "react";
import ShowHideDetails from "./Profile/ShowHideDetails";
import Home from "./Profile/Home";
import SearchForm from "./SearchProgram/SearchForm";


const App = () => {


    return (

        <main>
            <Home/>
            <p>

                Search and add a component to change Images.
                For example when you hover over a picture that the color changes.
            </p>
            <br/>

            <ShowHideDetails/>
            <br/>
            This will be form to search on the entire webapp.
            <SearchForm/>



        </main>


    );
}
export default App;