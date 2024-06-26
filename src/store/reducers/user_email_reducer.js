import defaultState from "../defaultState"

const user_email_reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'USER_INJECTED_EMAIL':
            return {
                ...state,
                disabled: false,
                emailSpan: 'input--span',
                inputBorder: 'email-input'
            }
        case 'USER_UNINJECTED_EMAIL':
            return {
                ...state,
                disabled: true,
                emailSpan: 'input--span_incorrect',
                inputBorder: 'email-input--incorrect'
            }
        case 'USER_CONFIRM_EMAIL':
            return {
                ...state,
                emailFrame: 'frame-final',
                shareFrame: 'frame',
                inputBorder: 'email-input--final'
            }

        case 'USER_CLICK_SHARE':
            return {
                ...state,
                userShared: true
            }

        case 'USER_UNCONFIRMED_SHARE':
            return {
                ...state,
                shareSpan: 'share--span_incorrect',
            }

        case 'USER_CONFIRM_SHARE':
            return {
                ...state,
                shareSpan: 'share--span',
                emailFrame: 'frame-display',
                shareFrame: 'frame-display',
                mailSpan: 'класс! теперь ты',
                gradientSpan: 'участвуешь в конкурсе',
                infoSpan: 'Ты прошел все наши карты, но ты всегда можешь вызвать inDriver по-настоящему, для этого переходи по ссылке!',
                finalButton: 'final__button--button'
            }

        default:
            return state;
    }
}

export default user_email_reducer;

