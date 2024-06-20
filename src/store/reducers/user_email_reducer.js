import defaultState from "../defaultState"

const user_email_reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'USER_INJECTED_EMAIL':
            return {
                ...state,
                disabled: state.disabled = false,
                incorrectColor: 'rgba(255, 255, 255, 0.5)'
            }
        case 'USER_UNINJECTED_EMAIL':
            return {
                ...state,
                emailEvents: state.emailEvents = 'auto',
                disabled: state.disabled = true,
                incorrectColor: 'rgba(245, 71, 89, 1)'
            }
        case 'USER_CONFIRM_EMAIL':
            return {
                ...state,
                emailOpacity: state.emailOpacity = '50%',
                emailEvents: state.emailEvents = 'none',
                shareOpacity: state.shareOpacity = '100%',
                shareEvents: state.shareEvents = 'auto',
            }
            case 'USER_CONFIRM_SHARE': return {
                ...state,
                mailSpan: state.mainSpan = 'класс! теперь ты',
                gradientSpan: state.gradientSpan = 'участвуешь в конкурсе',
                infoSpan: state.infoSpan = 'Ты прошел все наши карты, но ты всегда можешь вызвать inDriver по-настоящему, для этого переходи по ссылке!',
                display: state.display = 'none'
            }
        default:
            return state;
    }
}

export default user_email_reducer;