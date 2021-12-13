import axios from "axios";
const baseUrl = "http://localhost:3001/api/items";

//gpud
//Get whole root
const getRoot = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

//Post one in root
const postRoot = async (props) => {
    const response = await axios.post(baseUrl, props);
    return response.data;
};

//Replace whole root
const updateRoot = async (props) => {
    const response = await axios.update(baseUrl, props);
    return response.data;
};

//Delete whole root
const deleteRoot = async () => {
    const response = await axios.delete(baseUrl);
    return response.data;
};
//Get whole root id
const getRootId = async (props) => {
    const id = props.id;
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
};

//Post one in root id
const postRootId = async (props) => {
    const id = props.id;
    const response = await axios.post(`${baseUrl}/${id}`, props);
    return response.data;
};

//Replace whole root id
const updateRootId = async (props) => {
    const id = props.id;
    const response = await axios.update(`${baseUrl}/${id}`, props);
    return response.data;
};

//Delete whole root id
const deleteRootId = async (props) => {
    const id = props.id;
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
};
const getRootAuth = async (props) => {
    const sessionToken = props.sessionToken;
    const config = {
        headers: {
            Authorization: sessionToken,
        },
    };
    const response = await axios.get(baseUrl, config);
    return response.data;
};

//Post one in root
const postRootAuth = async (props) => {
    const sessionToken = props.sessionToken;
    const config = {
        headers: {
            Authorization: sessionToken,
        },
    };
    const response = await axios.post(baseUrl, props, config);
    return response.data;
};

//Replace whole root
const updateRootAuth = async (props) => {
    const sessionToken = props.sessionToken;
    const config = {
        headers: {
            Authorization: sessionToken,
        },
    };
    const response = await axios.update(baseUrl, props, config);
    return response.data;
};

//Delete whole root
const deleteRootAuth = async (props) => {
    const sessionToken = props.sessionToken;
    const config = {
        headers: {
            Authorization: sessionToken,
        },
    };
    const response = await axios.delete(baseUrl, config);
    return response.data;
};
//Get whole root id
const getRootIdAuth = async (props) => {
    const id = props.id;
    const sessionToken = props.sessionToken;
    const config = {
        headers: {
            Authorization: sessionToken,
        },
    };
    const response = await axios.get(`${baseUrl}/${id}`, config);
    return response.data;
};

//Post one in root id
const postRootIdAuth = async (props) => {
    const id = props.id;
    const sessionToken = props.sessionToken;
    const config = {
        headers: {
            Authorization: sessionToken,
        },
    };
    const response = await axios.post(`${baseUrl}/${id}`, props, config);
    return response.data;
};

//Replace whole root id
const updateRootIdAuth = async (props) => {
    const id = props.id;
    const sessionToken = props.sessionToken;
    const config = {
        headers: {
            Authorization: sessionToken,
        },
    };
    const response = await axios.update(`${baseUrl}/${id}`, props, config);
    return response.data;
};

//Delete whole root id
const deleteRootIdAuth = async (props) => {
    const id = props.id;
    const sessionToken = props.sessionToken;
    const config = {
        headers: {
            Authorization: sessionToken,
        },
    };
    const response = await axios.delete(`${baseUrl}/${id}`, config);
    return response.data;
};

const ItemServiceExport = {
    getRoot,
    postRoot,
    updateRoot,
    deleteRoot,
    getRootId,
    postRootId,
    updateRootId,
    deleteRootId,
    getRootAuth,
    postRootAuth,
    updateRootAuth,
    deleteRootAuth,
    getRootIdAuth,
    postRootIdAuth,
    updateRootIdAuth,
    deleteRootIdAuth,
};

export default ItemServiceExport;
