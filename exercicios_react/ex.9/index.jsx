import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import Field from './field'
import fieldReducer from './fieldReducer'

const reducers = combineReducers({
    field: fieldReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field value='kk' initialValue='jjjj' />
    </Provider>
    , document.getElementById('app'));