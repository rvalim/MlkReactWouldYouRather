import {
    GET_USERS,
    SET_USERS
} from '../action/users'

function users(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            return state
        case SET_USERS:
            return {
              ...state,
              ...state.users
            }
    }

    return state
}

export default users