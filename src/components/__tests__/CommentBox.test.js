import React from 'react'
import {mount} from 'enzyme'
import Root from 'Root'
import CommentBox from 'components/CommentBox'

let wrapped

beforeEach(() => {
    wrapped = mount(<Root><CommentBox /></Root>)
})

afterEach(() => {
    wrapped.unmount()
})

it('Has text area and 2 buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(2)
})

describe('The text area', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: {value: 'new comment'}
        })
        wrapped.update()
    })
    
    it('Has a text area for text input', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    })
    
    it('Empties form on text area input submission', () => {
        wrapped.find('form').simulate('submit')
        wrapped.update()        
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    })
})