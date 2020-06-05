import { LOGGING_IN_USER, LOGGED_IN_USER, FAILED_LOGIN, LOGOUT_USER, FORGOT_PASSWORD, FORGOT_PASSWORD_INIT, FAILED_FORGOT_PASSWORD } from "../actions/auth";

const initialState = {
    user: null,
    error: null,
    loading: false,
    userForgotPassword: null
}

export default (state = initialState, action) => {
    let updatedUser
    switch (action.type) {
        case LOGGING_IN_USER:
            return { ...state, loading: true, error: null }
        case LOGGED_IN_USER:
            return { ...state, loading: false, user: action.user }
        case FAILED_LOGIN:
            return { ...state, loading: false, user: null, error: action.error }
        case LOGOUT_USER:
            return { ...state, user: null }
        case FORGOT_PASSWORD_INIT:
            return { ...state, loading: true }
        case FORGOT_PASSWORD:
            return { ...state, loading: false, userForgotPassword: action.user }
        case FAILED_FORGOT_PASSWORD:
            return { ...state, loading: false, error: action.error }
        default:
            break;
    }
    return state
}