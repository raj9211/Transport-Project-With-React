import axios from "axios";

const Axios = axios.create({
    baseURL: "http://localhost:5000/"
    // process.env.REACT_APP_ENV === "dev"
    //     ? process.env.REACT_APP_DEV_BASEURL
    //     : process.env.REACT_APP_PROD_BASEURL,
});
export default Axios;
