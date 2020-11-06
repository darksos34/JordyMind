import axios from "axios";


// Create single API base URL for API calls to the backend (including Authentication Header)
export default axios.create({
    baseURL: "http://localhost:8080/api",


});