import React, { Component } from 'react';
import './index.css';

class CommentForm extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
	  comment:''
    }
  }
  handleInput1 (event) {
	this.setState({
		username: event.target.value
	})  
  } 
  handleInput2 (event) {
	this.setState({
		comment: event.target.value
	})  
  }
  submitComment (event){
	  this.setState((prevState,props) => {
		  this.props.callback(prevState)//注意回调函数的用法
	  })
  }
  render() {
    return (
      <div className="commentBox">
        <div className="user-name comment-line">
			<span className="title">用户名：</span>
			<input onChange={this.handleInput1.bind(this)} value={this.state.username} className="input-box"/>
		</div>
		<div className="comment-context comment-line">
			<span className="title">评论内容：</span>
			<textarea onChange={this.handleInput2.bind(this)} value={this.state.comment} className="input-box"></textarea>
		</div>
		<button className="submit-btn" onClick={this.submitComment.bind(this)}>发布</button>
      </div>
    );
  }
}

export default CommentForm;
