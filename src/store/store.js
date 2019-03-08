import Redux from 'react-redux'
import option from '../reducer/option'
import loading from '../reducer/loading'
import logger from '../midlleware/logger'

const store = Redux.createStore(Redux.combineReducers({
    option,
    loading,
}), Redux.applyMiddleware(logger))

export default store