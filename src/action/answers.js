import * as data from '../utils/data'

export const SEL_OPTION = 'SEL_OPTION'

function _chooseOne(authedUser, qId, answer) {
    return {
        type: SEL_OPTION,
        authedUser, 
        qId,
        answer
    }
}

export function chooseOne(qId, answer) {
    console.log('chooseOne', qId, answer)
    return (dispatch, getState) => {
        const { authedUser, questions } = getState()
console.log('chooseOne', qId, answer, questions[qId])
        const qOne = questions[qId].optionOne.text
        const qTwo = questions[qId].optionTwo.text
        const res = qOne === answer ? 'optionOne' : (qTwo === answer? 'optionTwo' : undefined)

        if (!res) throw new Error('Answer not in the list of options')

        return data._saveQuestionAnswer({ authedUser, qId, res })
            .then(question => dispatch(_chooseOne(authedUser, qId, res )))
        //.then(() => dispatch(hideLoading()))
    }
}