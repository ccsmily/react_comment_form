import React, { Component } from 'react';
import './index.css';

class CommentList extends Component {
  render() {
	let comments = []
	if(this.props.comments){
		comments = comments.concat(this.props.comments)
	}
	console.log(this.props.comments)
	let list = comments.map((item,index) => {//map函数的应用
		return(
			<div key={index} className="cont">
				<span className="username">
					{item.username}:
				</span>
				<span className="comment">
					{item.comment}
				</span>
			</div>
		)
	})
    return (
      <div className="commentList">
		<div className="line"></div>
		{list}
      </div>
    );
  }
}

export default CommentList;
