import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comment: ''
         };
    }

    handleChange = e => {
        this.setState({comment: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.saveComment(this.state.comment)
        this.setState({comment: ''})
    }

    handleLoadClick = e => {
        e.preventDefault()
        this.props.fetchComments()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment}/>
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button onClick={this.handleLoadClick}>Load Comments</button>
            </div>
        );
    }
}

export default connect(null, actions)(CommentBox);