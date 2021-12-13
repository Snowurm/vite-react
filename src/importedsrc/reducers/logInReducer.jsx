import loginService from "../services/logInService";

const initialState = () => {
    if (localStorage.login) {
        const data = JSON.parse(localStorage.login);
        return { data, id: 0 };
    } else {
        return { id: 0 };
    }
};

const loginReducer = (state = initialState(), action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...action, id: state.id + 1 };
        case "LOGOUT":
            return { ...action, id: state.id + 1 };
        case "SIGNUP":
            return { ...state, id: state.id + 1 };
        case "ERROR":
            return { ...action, id: state.id + 1 };
        default:
            return { ...state, id: state.id + 1 };
    }
};

export const login = (credentials) => {
    return async (dispatch) => {
        try {
            const response = await loginService.pRootLogin(credentials);
            dispatch({
                type: "LOGIN",
                data: response,
            });
        } catch (error) {
            dispatch({
                type: "ERROR",
                error,
            });
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        const response = await loginService.pRootLogout();

        try {
            dispatch({
                type: "LOGOUT",
                data: response,
            });
        } catch (error) {
            dispatch({
                type: "ERROR",
                error,
            });
        }
    };
};

export default loginReducer;
