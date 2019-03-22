import {
    GET_USERS,
    SET_USERS,
    SEL_OPTION,
} from '../action/users'

function users(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            return state
        case SET_USERS:
            return {
                ...state,
                ...action.users
            }
        case SEL_OPTION:
            const {authedUser, qid, answer} = action
            const aux = state
            aux[authedUser].answers[qid] = answer
            
            return {
                ...aux
            }
    }

    return state
}

export default users