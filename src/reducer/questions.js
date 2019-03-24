import {
    ADD_QUESTION,
    SET_QUESTIONS,
} from '../action/questions'
import {ANS_QUESTION} from '../action/users'

function questions(state = {}, action) {
    switch (action.type) {
        case ADD_QUESTION:
            const {id} = action.question
            return {
                ...state,
                [id]:{
                    ...action.question
                }
            }
        case SET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ANS_QUESTION:
            const {authedUser, qid, answer} = action

            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer], 
                        votes: state[qid][answer].votes.concat(authedUser),                        
                    }
                }
            }
        default:
            return state
    }

}

export default questions