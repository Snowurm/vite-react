import axios from "axios";
const baseUrl = "http://localhost:3001/api/signup";

const pRootSignUp = async (credentials) => {
    const response = await axios.post(baseUrl, credentials);

    return response.data;
};
const pRootDeleteUser = async (credentials) => {
    const data = credentials.data;

    const sessionToken = data.sessionToken;
    const config = {
        headers: {
            Authorization: sessionToken,
        },
    };

    const response = await axios.delete(baseUrl, config);

    return response.data;
};

const SignUpExport = {
    pRootSignUp,
    pRootDeleteUser,
};

export default SignUpExport;
