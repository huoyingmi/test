import React,{ Component,Fragment } from 'react'
import Item from './item.js'
import './App.css'

class App extends Component{
	// 挂载时，1.首先执行constructor初始化
	constructor(props){
		console.log('App constructor...');
		super(props);
		this.state = {
			list:["吃饭","睡觉","打豆豆"],
			val:''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
	}
	// 挂载时，2.执行getDerivedStateFromProps方法
	static getDerivedStateFromProps(nextProps, prevState){
		console.log('App getDerivedStateFromProps(nextProps, prevState)::',nextProps, prevState);
		return{
			list:['睡觉','吃饭'] //用此处的“睡觉”来合并覆盖
		}
	}
	// 挂载时，5.执行函数componentDidMount表示已经挂载了
	componentDidMount(){
		console.log('App componentDidMount')
	}
	handleAdd(){
		this.setState(preState=>({
			list:[...preState.list,preState.val],
			val:''
		}))
	}
	handleChange(ev){
		const val =ev.target.value 
		this.setState(()=>({
			val:val
		}))
	}
	handleDel(index){
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState(()=>({
			list:list
		}))
	}
	getItems(){
		return this.state.list.map((item,index)=>{
			return <Item key={index} content={item} handleDel={this.handleDel.bind(this,index)} />
		})
	}
	// 挂载时，3.render渲染页面
	render(){
		console.log('App render...');
		return(
			<div className="App">
				<input 
					onChange={this.handleChange} 
					value={this.state.val} 
				/>
				<button onClick={this.handleAdd}>新增</button>
				<ul>
					{
						this.getItems()
					}
				</ul>
			</div>
		)
	}
} 

export default App;