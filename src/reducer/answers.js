import {
    SEL_OPTION
} from '../action/answers'

let answers = []

function chooseOption(state = answers, action) {
    switch (action.type) {
        case SEL_OPTION:
            return state.concat([
                {
                    id: 1,
                    questionId: action.questionId,
                    option: action.option
                }
            ]);
    }

    return state
}

export default chooseOption