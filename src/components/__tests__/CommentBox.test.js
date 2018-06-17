import React from 'react'
import {mount} from 'enzyme'
import CommentBox from 'components/CommentBox'

let wrapped

beforeEach(() => {
    wrapped = mount(<CommentBox />)
})

afterEach(() => {
    wrapped.unmount( )
})

it('Has text area and button', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)
})

it('Has a text area for text input', () => {
    wrapped.find('textarea').simulate('change', {
        target: {value: 'new comment'}
    })
    wrapped.update()
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
})