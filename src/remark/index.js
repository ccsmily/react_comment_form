import React, { Component } from 'react';
import './index.css';

class Remark extends Component {
  render() {
	return (
      <div className="remark">
		{this.props.text}
      </div>
    );
  }
}

export default Remark;
