import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from 'reducers'

//pass initial state of {} for Root imports that do not set initial state
export default ({children, initialState = {}}) => {
    return (
        <Provider store={createStore(reducers, initialState)}>
            {children}
        </Provider>
    )
}