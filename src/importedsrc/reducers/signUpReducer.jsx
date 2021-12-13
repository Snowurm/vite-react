import signUpService from "../services/signUpService";

const initialState = () => {
    if (localStorage.signUp) {
        const data = JSON.parse(localStorage.signUp);
        return { data, id: 0 };
    } else {
        return { id: 0 };
    }
};

const signUpReducer = (state = initialState(), action) => {
    switch (action.type) {
        case "SIGNUP":
            return { ...action, id: state.id + 1 };
        case "DELETEUSER":
            return { ...action, id: state.id + 1 };
        case "ERROR":
            return { ...action, id: state.id + 1 };
        default:
            return { ...state, id: state.id + 1 };
    }
};

export const signUp = (credentials) => {
    return async (dispatch) => {
        try {
            const response = await signUpService.pRootSignUp(credentials);
            dispatch({
                type: "SIGNUP",
                data: response,
            });
        } catch (error) {
            dispatch({
                type: "ERROR",
                data: error,
            });
        }
    };
};
export const deleteUser = (credentials) => {
    return async (dispatch) => {
        try {
            const response = await signUpService.pRootDeleteUser(credentials);
            dispatch({
                type: "DELETEUSER",
                data: response,
            });
        } catch (error) {
            dispatch({
                type: "ERROR",
                data: error,
            });
        }
    };
};

export default signUpReducer;
