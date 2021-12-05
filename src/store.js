import {createStore,applyMiddleware} from 'redux'
import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/booklist/booklistReducer'


const mainReducer= combineReducers({
    reducer
})

const store=createStore(mainReducer,applyMiddleware(thunk))

export default store 