import {
    CHOOSE_OPTION
} from '../action/answer'

let answers = []

function chooseOption(state = answers, action) {
    switch (action.type) {
        case CHOOSE_OPTION:
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