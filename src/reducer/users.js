import {
    GET_USERS,
    SET_USERS,
    ANS_QUESTION,
} from '../action/users'

function users(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            return state
        case SET_USERS:
            const { users } = action

            return {
                ...state,
                ...users
            }
        case ANS_QUESTION:
            const {authedUser, qid, answer} = action

            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    nAnswers: Object.keys(state[authedUser].answers).length + 1,
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            } 
        default:
            return state
    }

}

export default users