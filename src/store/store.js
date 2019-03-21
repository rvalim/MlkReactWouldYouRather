import { createStore, combineReducers, applyMiddleware } from 'redux'
import answer from '../reducer/answer'
import option from '../reducer/option'
import loading from '../reducer/loading'
import logger from '../midlleware/logger'

const store = createStore(
    combineReducers({
        answer,
        option,
        loading,
    })
    , applyMiddleware(logger))

export default store