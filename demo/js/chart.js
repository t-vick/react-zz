var lineChart = function(){
	this.can = undefined;		// canvas画布容器
	this.ctx = undefined;
	this.opt = {};				// canvas参数
	this.isInit = false;		// 记录初次加载
	this.canWidth = 0;			// canvas宽度
	this.canHeight = 0;			// canvas高度
	this.cellWidth = 0; 		// canvas单元格宽度
	this.cellHeight = 0; 		// canvas单元格高度
	this.timeCtr = undefined;	// canvas头部位置，用来显示日期
	this.startIndex = 0;		// 记录从什么位置开始画
	this.curIndex = 0;			// 当前索引的位置
	this.startTime = undefined; // 记录开始时间
	this.lineColor = '#ff0000';	// 线的颜色
};

lineChart.prototype = {
	init: function(canId,opt){
		this.can = document.getElementById(canId);
		this.can.height = this.can.parentNode.clientHeight;
		this.can.width = this.can.parentNode.clientWidth;
		this.timeCtr = document.getElementById(opt.timeCtr).children;
		this.ctx = this.can.getContext('2d');
		this.isInit = true;
		this.startIndex = 0;
		this.curIndex = 0;

		this.canWidth = this.can.offsetWidth;
		this.canHeight = this.can.offsetHeight;

		this.cellHeight = this.canHeight / opt.rows,
		this.cellWidth = this.canWidth / opt.cols;
		this.ctx.lineWidth = 1;
		this.redraw(opt);

		this.tempTip = '<div class="mypop" id="myPop"><div class="dotPoint"></div><div class="tip_arrow arrow_left"></div><div class="tip_inner"><div>xAxis:<span class="xDate"></span></div><div>yName:<span class="yName"></span></div><div>yAxis:<span class="yDate"></span></div></div></div>'


		// 绑定事件
		this.can.addEventListener('mousemove', this.showTip(this));
		// this.can.removeEventListener('mousemove',this.showTip,false);
		// this.can.addEventListener('mousemove',this.showTip(this));
		// window.onresize = this.resize(this,opt);

		// this.can.removeEventListener('click',this.showTip,false);
		// this.can.addEventListener('click',this.showTip(this));
	},
	redraw: function(opt){
		this.opt = opt;
		this.ctx.clearRect(0, 0, this.canWidth, this.canHeight);
		// this.ctx.translate(0.5,0.5);
		this.ctx.beginPath();
		// 画横线
		for(var row = 0; row <= opt.rows; row++){
			var y = row * this.cellHeight;
			this.ctx.moveTo(0, y);
			this.ctx.lineTo(this.canWidth, y);
		}
		// 画竖线
		if(opt.showVLine || opt.showVLine === undefined){
			for(var col = 0; col <= opt.cols; col++){
				var x = col * this.cellWidth;
				this.ctx.moveTo(x, 0);
				this.ctx.lineTo(x, this.canHeight);
			}
		}
		this.ctx.strokeStyle = '#e0e0e0';
		this.ctx.stroke();
		this.ctx.closePath();
		this.startTime = new Date(opt.series[this.startIndex].xAxis).getTime();
		
		for(var a = 0; a < this.timeCtr.length; a++){
			this.timeCtr[a].innerText = Format(this.startTime + a * 5 * opt.interval);
		}
	},
	setData: function(canId,opt){
		if(opt.series.length <= 0)
			return;
		if(!this.isInit)
			this.init(canId, opt);
		this.drawXY();
	},
	drawXY: function(){
		var startTime = this.startTime;
		while(this.curIndex < this.opt.series.length){
			var x = this.getCellX(startTime, this.curIndex);
			if(x.curX > this.canWidth){
				this.curIndex -= 1;
				this.startIndex = this.curIndex;
				this.redraw(this.opt);
				this.drawXY();
				return;
			}else{
				for(var a = 0; a < this.opt.series[this.curIndex].yAxis.length; a++){
					if(this.opt.series[0].yAxis[a].color === undefined){
						this.lineColor = this.getColor();
						this.opt.series[0].yAxis[a].color = this.lineColor;
					}
					var lineName = $.trim(this.opt.series[this.curIndex].yAxis[a].name),
					// 获取Y轴坐标位置
						y = this.getcellY(this.curIndex, a, lineName);
					if(this.opt.series[this.curIndex].yAxis[a].point || this.opt.series[this.curIndex].yAxis[a].point === undefined)
						this.drwaDot(x.curX, y.curY);
					this.ctx.beginPath();
					if(x.lastX > -1 && y.lastY > -1){
						this.ctx.moveTo(x.lastX, y.lastY);
						this.ctx.lineTo(x.curX, y.curY);
					}
					this.ctx.strokeStyle = this.lineColor;
					this.ctx.stroke();
					this.ctx.closePath();
				}
				this.curIndex += 1;
			}
		}
	},
	drwaDot: function(x, y){
		this.ctx.beginPath();
		this.ctx.arc(x, y, 3, 0, 2*Math.PI);
		this.ctx.fillStyle = this.lineColor;
		this.ctx.fill();
		this.ctx.closePath();
	},
	getCellX: function(startTime, i){
		var x = { curX: -1, lastX: -1 };
		x.curX = (new Date(this.opt.series[i].xAxis).getTime() - startTime) / this.opt.interval * this.cellWidth;
		if(i > 0 && this.opt.series[i - 1].xAxis != undefined && this.opt.series[i - 1].yAxis != undefined){
			var lastXAxis = this.opt.series[i - 1].xAxis;
			x.lastX = (new Date(lastXAxis).getTime() - startTime) / this.opt.interval * this.cellWidth;
		}
		return x;
	},
	getcellY: function(i, a, name){
		var y = { curY: -1, lastY: -1 };
		y.curY = this.canHeight - this.opt.series[i].yAxis[a].data;
		if(i > 0 && this.opt.series[i - 1].xAxis != undefined && this.opt.series[i - 1].yAxis != undefined){
			var lastYAxis = this.opt.series[i - 1].yAxis;
			if(lastYAxis.name != name ){
				for(var b = 0; b < lastYAxis.length; b++){
					if(lastYAxis[b].name === name){
						y.lastY = this.canHeight - lastYAxis[b].data;
						this.lineColor = this.opt.series[0].yAxis[b].color;
					}
				}
			}else{
				y.lastY = this.canHeight - lastYAxis[a].data;
				this.lineColor = this.lineColor = this.opt.series[0].yAxis[a].color;
			}
		}
		return y;
	},
	getColor: function(){
		return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6);
	},
	showTip: function(_this){
		return function(e){
			var xy = _this.getCellXY(e);
		}
	},
	resize: function(_this,opt){
		return function(e){
			setTimeout(function(){
				_this.can.height = _this.can.parentNode.clientHeight;
				_this.can.width = _this.can.parentNode.clientWidth - 296;
				_this.canWidth = _this.can.offsetWidth;
				_this.canHeight = _this.can.offsetHeight;

				_this.cellHeight = _this.canHeight / opt.rows,
				_this.cellWidth = _this.canWidth / opt.cols;
				_this.ctx.lineWidth = 1;
				_this.redraw(opt);
			},500);
		}
	},
	getCellXY: function(e){
		var x = e.offsetX / this.cellWidth,
			index = Math.round(x);
		if(Math.abs(index - x) <= 0.1){
			var y = this.canHeight - e.offsetY,
				tempOpt = this.opt.series[this.startIndex + index];
			if(tempOpt === undefined)
				return false;
			// $('#myPop').remove();
			for(var a = 0; a < tempOpt.yAxis.length; a++){
				if(Math.abs(y - tempOpt.yAxis[a].data) <= 2){
					// $(this).append($('#myPop'));
					$('#myPop').fadeIn();
					$('#myPop').css({'left': e.pageX + 12, 'top':e.pageY - 34});
					$('#myPop .xDate').empty().text(tempOpt.xAxis);
					$('#myPop .yName').empty().text(tempOpt.yAxis[a].name);
					$('#myPop .yDate').empty().text(tempOpt.yAxis[a].data);
				}
			}
		}else{
			$('#myPop').fadeOut();
		}
	},
	dotStart:function(_this){
		return function(e){
			var x = e.offsetX / _this.cellWidth,
				index = Math.round(x),
				tempOpt = _this.opt.series[_this.startIndex + index];
			if(Math.abs(index - x) <= 0.1 && tempOpt != undefined){
				var y = _this.canHeight - e.offsetY,
					newY = 0,
					drag = false,
					moveObj = $('.dotPoint'),
					moveY = 0,
					tempY = e.offsetTop;
				for(var a = 0; a < tempOpt.yAxis.length; a++){
					newY = tempOpt.yAxis[a].data;
					if(Math.abs(y - newY) <= 2){
						drag = true;
						moveObj.css({'left':e.pageX,'top':e.pageY});
						with(_this){
							moveY = e.offsetY;
							moveObj.onmousemove = function(e){
								if(!drag) return false;
								with(_this){
									moveObj.css({'top': tempY + e.offsetY - moveY});
								}
							}
						}
						// moveObj.onmouseup = new function(false); 
						// _this.can.addEventListener('mousemove', _this.dotMove(_this));
						// _this.can.addEventListener('mouseup', _this.dotEnd(_this));
						// console.log('start', _this.startY);
					}
				}
			}
		}
	}
	// dotMove:function(_this){
	// 	return function(e){
	// 		// _this.moveY = _this.canHeight - e.offsetY
	// 		console.log('move', _this.startY, _this.moveY);
	// 	}
	// },
	// dotEnd:function(_this){
	// 	return function(e){
	// 		_this.can.removeEventListener('mousemove', _this.dotMove, false);
	// 		_this.can.removeEventListener('mouseup', _this.dotEnd, false);
	// 		console.log('end', _this.moveY);
	// 	}
	// }
};

/* 日期格式化
 * eg:format="yyyy-MM-dd hh:mm:ss";
 */
Date.prototype.Format = function(fmt){
	var o = {
		"Y+" : this.getFullYear(),					//年份
		"M+" : this.getMonth()+1,					//月份
		"d+" : this.getDate(),						//日
		"h+" : this.getHours(),						//小时
		"m+" : this.getMinutes(),					//分
		"s+" : this.getSeconds(),					//秒
		"q+" : Math.floor((this.getMonth()+3)/3),	//季度
		"S"  : this.getMilliseconds()				//毫秒
	};
	if(/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
	for(var k in o)
		if(new RegExp("("+ k +")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
	return fmt;
}

// 时间戳转换成日期
function Format(nS){
	var data = new Date(nS).Format('hh:mm:ss');
	return data;
}