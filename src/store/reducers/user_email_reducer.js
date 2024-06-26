import defaultState from "../defaultState"

const user_email_reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'USER_CONFIRM_EMAIL':
            return {
                ...state,
                userConfirmEmail: false
            }

        case 'USER_CLICK_SHARE':
            return {
                ...state,
                userGetFinalScreen: false,
                frameDisplay: true
            }

        default:
            return state;
    }
}

export default user_email_reducer;

