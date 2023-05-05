import Axios from "../utils/axios";

const checkTokenAndHeaders = () => {
    const configHeaders = {
        "content-type": "application/json",
        Accept: "application/json",
    };
    let userLoggedToken = JSON.parse(localStorage.getItem("persist:root"));
    console.log("from api index", userLoggedToken);
    // userLoggedToken = JSON.parse(userLoggedToken.token);
    if (userLoggedToken) {
        configHeaders["Authorization"] = `Bearer ${userLoggedToken}`;
    }
    return configHeaders;
};

const adminHeaders = () => {
    const configAdminHeaders = {
        "content-type": "application/json",
        Accept: "application/json",
    };

    return configAdminHeaders;
};



const apiService = {

    async createUser(payload) {
        return await Axios.post("/users/create", payload);
    },
    async userLogin(payload) {
        return await Axios.post("/users/userLogin", payload, {
            headers: checkTokenAndHeaders(),
        });
    },
};

export default apiService;
