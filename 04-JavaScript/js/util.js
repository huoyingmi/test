/**
 * @param  {object} obj    [DOM节点对象]
 * @param  {string} attr   [属性名称]
 * @param  {number} target [目标值]
 */
// 动画封装函数
function animate(obj,attr,target){
	clearInterval(obj.timer);
	var iSpeed = 0;
	obj.timer = setInterval(function(){
		var current = parseFloat(getComputedStyle(obj,false)[attr]);
		if(attr == "opacity"){
			// attr值的四舍五入
			current = Math.round(current * 100);
		}
		
		if(current > target){
			iSpeed = -80;
		}else{
			iSpeed = 80;
		}
		if(Math.abs(target - current) < Math.abs(iSpeed)){
			if(attr == "opacity"){
				obj.style.opacity = target/100;
			}else{
				obj.style[attr] = target + 'px';
			}
			clearInterval(obj.timer);
		}else{
			if(attr == "opacity"){
				obj.style.opacity = (current + iSpeed)/100;
			}else{
				obj.style[attr] = current + iSpeed + 'px';
			}
			
		}
	},30)
}