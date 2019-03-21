export const CHOOSE_OPTION = 'CHOOSE_OPTION'

export function chooseOne (questionId, option){
    return {
        type: CHOOSE_OPTION,
        questionId,
        option
    }
}