import axios from "axios";
const baseUrl = "http://localhost:3001/api/login";

const pRootLogin = async (credentials) => {
    const response = await axios.post(baseUrl, credentials);

    localStorage.setItem("login", JSON.stringify(response.data));

    return response.data;
};
const pRootLogout = () => {
    localStorage.removeItem("login");
};

const loginExport = {
    pRootLogin,
    pRootLogout,
};

export default loginExport;
