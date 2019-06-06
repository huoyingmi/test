import React,{ Component } from 'react'
import PropTypes from 'prop-types'

class Item extends Component{
	constructor(props){
		console.log('item constructor...');
		super(props);
	}
	render(){
		console.log('item render...');
		const { handleDel,content } = this.props;
		return(
			<li onClick={handleDel}>
				{content}
			</li>
		)
	}
} 

// 校验
Item.propTypes = {
	handleDel:PropTypes.func,
	// content:PropTypes.string
	content:PropTypes.string.isRequired
}
Item.defaultProps = {
	content:'睡觉'
}


export default Item;