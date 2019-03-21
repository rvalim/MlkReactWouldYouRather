import { createStore } from 'redux'
import reducer from '../reducer'
import midleware from '../midleware'

export default createStore(
    reducer
    , midleware)