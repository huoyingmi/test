;(function($){
	// 构造函数 setBox
	function setBox($elem,options){
        // 1.罗列属性
        this.$elem = $elem;  //将参数$elem赋值给this.$elem
        this.options = options;  ////将参数options赋值给this.options
        this.x = null;  //定义x空对象
        this.y = null;  //定义y空对象
        // 2.初始化
        this.init();
	};
    // setBox的基本结构
	setBox.prototype = {
		constructor:setBox,
		init:function(){
            // 1.初始化将事件都罗列出来
            this.$elem.css({
            	width:this.options.width,
            	height:this.options.height,
            	background:this.options.background,
            	position:'fixed',
                top:this.options.top,
                left:this.options.left
            });
		},
		// 左上角的位置
		LeftTop:function(){
			this.$elem.css({
				left:0,
				top:0,
				right:'',
				bottom:''
			})
		},
		// 右下角的位置
		RightBottom:function(){
			this.$elem.css({
				left:'',
				top:'',
				right:0,
				bottom:0
			})
		},
		// 左上角和右下角移动事件
		bindEvent:function(){
			// offset是获取元素相对于body的偏移值
			this.x = this.$elem.offset().left;  //水平偏移值
			this.y = this.$elem.offset().top;  //垂直偏移值
			// console.log(this.x,this.y);
			if(this.x == 0){
				// 
				this.RightBottom();
			}else if(this.x != 0){
                this.LeftTop();
			}
		},
		onClick:function(){
			this.bindEvent();
		}

	};

    // 静态方法添加属性
    setBox.DEFAULT = {
    	width:100,
    	height:100,
    	background:'red',
    	top:'50px',
    	left:'50px'
    }

    // extend合并对象
	$.fn.extend({
        setBox:function(options){
        	// console.log(this);
        	return this.each(function(){
                // 将DOM对象变为jQuery对象
                var $elem = $(this);
                // 将options进行整合
                options = $.extend({},setBox.DEFAULT,options);
                // 调用函数
                new setBox($elem,options);
                // var oBox = new setBox($elem,options);
                // 添加事件
                /*
                $elem.on('click',function(){
                	// 
                	oBox.onClick();
                })
                */

        	})
        }
	})
})(jQuery);