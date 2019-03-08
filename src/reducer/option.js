import {
    CREATE_OPTION,
    DELETE_OPTION, 
    CHOOSE_OPTION,
    GET_ALL_OPTION,
} from '../action/option'

function option(state = [], action) {
    switch (action.type) {
        case CREATE_OPTION:
            return state.concat([action.option])
        case DELETE_OPTION:
            return state.filter(p => p.id !== action.id)
        case CHOOSE_OPTION:
            break;
        case GET_ALL_OPTION:
            return state
    }

    return state
}

export default option