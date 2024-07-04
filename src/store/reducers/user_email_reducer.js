import defaultState from "../defaultState"

const user_email_reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'USER_CONFIRM_EMAIL':
            return {
                ...state,
                userConfirmEmail: false,
            }

        case 'USER_CLICK_SHARE':
            return {
                ...state,
                userGetFinalScreen: false,
                frameDisplay: true,
                mainSpan: 'Класс! Теперь ты',
                gradientSpan: 'Участвуешь в конкурсе',
                infoSpan: 'Ты прошел все наши карты, но ты всегда можешь вызвать inDriver по-настоящему, для этого переходи по ссылке!',
            }

        case 'USER_INVALID_EMAIL':
            return {
                ...state,
                emailInfo: 'Данная почта уже используется',
            }

        case 'USER_VALID_EMAIL':
            return {
                ...state,
                emailInfo: 'Неверный формат почты',
            }

        default:
            return state;
    }
}

export default user_email_reducer;

