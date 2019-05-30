/**
 * @param  {object} obj    [DOM节点对象]
 * @param  {string} attr   [属性名称]
 * @param  {number} target [目标值]
 * @param  {boolean} isLinear [匀速还是减速]
 * @param  {function} fnEnd [动画结束执行的函数]
 */
	//封装函数
	function animate(obj,attr,target,isLinear,fnEnd){
		// 设置默认是匀速动画
		if(isLinear == undefined){
			isLinear = true;
		}

		//防止多次操作开启定时器
		clearInterval(obj.timer);
		//设置变量表示速度/步长
    	var iSpeed = 0;

		obj.timer = setInterval(function(){
			// 代表是否终止当前的动画，由于在循环定时器中,所以每次执行都会变为false,代表不终止当前动画
			var isStopCurrent = false;
			//获取传入属性当前的最新的值
			var current = parseFloat(getComputedStyle(obj,false)[attr]);
			//如果传入opacity属性时，特殊处理方法
			if(attr == "opacity"){
				//1.乘以100是为了方便计算
				//2.四舍五入是为了处理小数
				current = Math.round(current * 100);
			}

			//匀速动画
			if(isLinear){
				//isLinear判断匀速动画速度确定
				if(current > target){
					iSpeed = -10;
				}else{
					iSpeed = 10;
				}
				//判断匀速动画终止条件
				if(Math.abs(target - current) < Math.abs(iSpeed)){
					//匀速动画终止后的处理:如果最后一次动画不够一个速度的话,直接到达目标值
					if(attr == "opacity"){
						obj.style.opacity = target/100;
					}else{
						obj.style[attr] = target + 'px';
					}
					//代表终止当前的动画	
					isStopCurrent = true;
				}
			}
			//减速动画
			else{
				//确定减速动画的速度
				iSpeed = (target - current)/10;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				//减速动画的终止条件
				if(!iSpeed){
					//代表终止当前的动画
					isStopCurrent = true;
				}
			}
			//如果 isStopCurrent=true 终止当前的动画
			if(isStopCurrent){
				//清除定时器
				clearInterval(obj.timer);
				// 判断第五个函数参数是否继续执行
				typeof fnEnd == "function" && fnEnd();
			}else{
				//如果不终止当前动画,运动
				if(attr == "opacity"){
					//如果传入opacity属性时，特殊处理方法
					obj.style.opacity = (current + iSpeed)/100;
				}else{
					// 其他属性
					obj.style[attr] = current + iSpeed + 'px';
				}
			}
			console.log(iSpeed);
		},30)
	}