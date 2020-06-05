import axios from 'axios'
export const LOGGING_IN_USER = 'LOGGING_IN_USER'
export const LOGGED_IN_USER = 'LOGGED_IN_USER'
export const FAILED_LOGIN = 'FAILED_LOGIN'
export const LOGOUT_USER = 'LOGOUT_USER'
export const FORGOT_PASSWORD = "FORGOT_PASSWORD"
export const FORGOT_PASSWORD_INIT = "FORGOT_PASSWORD_INIT"
export const FAILED_FORGOT_PASSWORD = "FAILED_FORGOT_PASSWORD"

export const logoutUser = () => {
    return ({ type: LOGOUT_USER })
}

export const loginUser = (email, password) => {
    return dispatch => {
        dispatch({ type: LOGGED_IN_USER, user: response.data });
        // dispatch({ type: LOGGING_IN_USER })
        // return axios.post('api/auth/Login', { 'UserName': email, 'Password': password })
        //     .then(response => {
        //         if (response.data.IsSuccess == true) {
        //             dispatch({ type: LOGGED_IN_USER, user: response.data });
        //         } else {
        //             dispatch({ type: FAILED_LOGIN, error: response.data.FirstError })
        //         }
        //     })
        //     .catch(response => {
        //         dispatch({ type: FAILED_LOGIN, error: 'שם משמתש או סיסמה שגויים' })
        //     })
    }
}

export const forgotPassword = (email) => {
    return async dispatch => {
        dispatch({ type: FORGOT_PASSWORD_INIT })
        const transaction = {
            'UserIdentifier': email
        };
        return axios.post('api/auth/ForgotPassword', transaction)
            .then(response => {
                if (response.data.IsSuccess == true) {
                    dispatch({ type: FORGOT_PASSWORD, user: response.data })
                    dispatch({ type: FAILED_FORGOT_PASSWORD, error: 'Email send succesfully' })
                } else {
                    dispatch({ type: FAILED_FORGOT_PASSWORD, error: response.data.FirstError })
                }
            })
            .catch(response => {
                dispatch({ type: FAILED_FORGOT_PASSWORD, error: 'לא נמצא משתמש המתאים לפרטים שהוזנו' })
            })
    }
}