import commentsReducer from 'reducers/comments'
import {SAVE_COMMENT} from 'actions/types'

it('Handle actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT, payload: 'New Comment'
    }

    const newState = commentsReducer([], action)

    expect(newState).toEqual(['New Comment'])
})

it('Handle actions of unknown type', () => {
    const newState = commentsReducer([], {type: 'Lorem Ipsum'})

    expect(newState).toEqual([])
})