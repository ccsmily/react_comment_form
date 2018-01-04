import React, { Component } from 'react';
import './App.css';
import CommentForm from './commentForm/index.js'
import CommentList from './commentList/index.js'
import Remark from './remark/index.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      comments:[],
	  shouldRemark:false
    }
  }
  submitComment (e) {
	if(e.username === '' && e.comment === ''){
		this.setState({
			shouldRemark : true
		})
	}else{		
		this.setState((prevState,props) => ({//此处为prevState和Props的用法，注意箭头后的括号
			comments:prevState.comments.push(e)	
		}))
	}	
	setTimeout(() => {
		this.setState({
			shouldRemark : false
		})
	},1000)
  }
  renderRemark () {
	if(this.state.shouldRemark){
		return (<Remark text="please enter username and comment！"/>)//返回jsx格式，不能用引号
	}else{
		return ''
	}
  }
  render() {
    return (
      <div className="App">
		<CommentForm callback={this.submitComment.bind(this)}/>
		<CommentList comments={this.state.comments}/>
		{this.renderRemark()}
      </div>
    );
  }
}

export default App;
