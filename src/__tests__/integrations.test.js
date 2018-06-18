import React from 'react'
import {mount} from 'enzyme'
import moxios from 'moxios'
import Root from 'Root'
import App from 'components/App'

let wrapped

beforeEach(() => {
    //intercept all axios requests
    moxios.install() 
    //respond with dummy data to trick axios into thinking it got a response
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Fetched 1', name: 'Fetched 2'}]
    }) 
})

afterEach(() => {
    moxios.uninstall()
})

it('Can fetch and display a list of comments', (done) => {
    wrapped = mount(<Root><App /></Root>)
    wrapped.find('.fetch-button').simulate('click')
    moxios.wait(() => {
        wrapped.update()
        try {
            expect(wrapped.find('li').length).toEqual(1)
            //invoke done so that function won't finish until it's called
            //without it, test would end and fail before waiting for the setTimeout()
            done()
        } catch (error) {
            done.fail(error)
        } finally {
            wrapped.unmount()
        }
    })
})