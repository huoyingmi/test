function animate(obj,options,decelerate,fnEnd){
		var ispeed=10;
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var isStopAll=true;
			for(var attr in options){
				var isStopOne=true;
				if(!decelerate){
					ispeed=7;
				}
				var current=parseFloat(getComputedStyle(obj,false)[attr]);
				if(attr=='opacity'){
					current=Math.round(current*100);
				}else{
					current=Math.round(current);
				}
				if(decelerate){
					if(Math.abs(ispeed)>1){
						ispeed=(options[attr]-current)/10;
					}else{
						ispeed=(options[attr]-current)*Math.abs(1/(options[attr]-current));
					}
					if(!ispeed){
						isStopOne=false;			
					}else{
						isStopAll=false;
					}
				}else{
					ispeed=(options[attr]-current)*Math.abs(1/(options[attr]-current))*Math.abs(ispeed);
					if(Math.abs(current-options[attr])<=Math.abs(ispeed)){
						if(attr=='opacity'){
							obj.style[attr]=options[attr]/100;
						}else{
							obj.style[attr]=options[attr]+'px';
						}
						isStopOne=false;
					}else{
						isStopAll=false;
					}
				}
				if(isStopAll){
					clearInterval(obj.timer);
					if(!isStopOne){
						if(fnEnd){
							fnEnd();
						}	
					}
				}
				if(attr=='opacity'){
					obj.style[attr]=(current+ispeed)/100;
				}else{
					obj.style[attr]=current+ispeed+'px';
				}
				console.log(ispeed,current);
			}
			
		},30)
	}