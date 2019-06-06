
import React,{ Component,Fragment } from 'react'
import Item from './item.js'
import './App.css'

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:["吃饭","睡觉","打豆豆"],
			val:''
		}
	}
	handleAdd(){
		// console.log('add...');
		this.setState({
			list:[...this.state.list,this.state.val],
			val:''
		})
	}
	handleChange(ev){
		// console.log(event.target.value);
		this.setState({
			val:ev.target.value
		})
	}
	handleDel(index){
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState({
			list:list
		})
	}
	render(){
		// return <div><input /><button>新增</button></div>
		// return <Fragment><input /><button>新增</button></Fragment>
		return(
			// 添加样式 1.行间样式 2.外部文件引入
			// <div style={{background:'gray'}}>
			<div className="App">
				<input onChange={this.handleChange.bind(this)} value={this.state.val} />
				<button onClick={this.handleAdd.bind(this)}>新增</button>
				<ul>
					{
						this.state.list.map((item,index)=>{
							/*
							return (
								<li 
									key={index}
									onClick={this.handleDel.bind(this,index)}
								>
									{item}
								</li>
							)
							*/
							// return <Item key={index} content={item} list={this.state.list} index={index} />
							return <Item key={index} content={item} handleDel={this.handleDel.bind(this,index)} />
						})
					}
				</ul>
			</div>
		)
	}
} 

export default App;