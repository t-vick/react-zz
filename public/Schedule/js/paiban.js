			var ope=null;
			var i=0;
			$(function(){
				$(".div4 table tr:even").css({"background": "#FAEBD7 "});
				$(".div4 table tr:odd").css({"background": "#FFEFD5"});
				$(".type").click(function(){
					$("#pat table tr td").unbind( "click" );
					$("#doc1 table tr td").unbind( "click" );
					$("#doc2 table tr td").unbind( "click" );
					$("#hur1 table tr td").unbind( "click" );
					$("#hur2 table tr td").unbind( "click" );
					i--;
					$("#"+(i+1)+"").css('background','none');
					$(this).attr({id:i});
					$(this).css({"background": "#FFCC22 ","padding":"0px"});
					ope=$(this);
					$("#pat table tr td").bind('click', function() {
					  var pat_id = $("p[name='pat']").attr("id");
					  var id = $(this).children().attr("id");
					  if(pat_id==id){
						 alert("该病人已排班！"); 
						 return false;
					  }
					  var pat='病人:'+$(this).text();
					  var p = $('<p>').attr({ id: id,name: "pat" }).append(pat).css({"margin-bottom":"0px"});
					  $(this).css({"background": "#A9A9A9"});
					  $("#pat table tr td").unbind( "click" );
					  ope.append(p);
					});
					
					$("#doc1 table tr td").bind('click', function() {
					   var flat=false;
					   var pat='麻醉医生:'+$(this).text();
					   var che='巡视医生:'+$(this).text();
					   var id = $(this).children().attr("id");
					   var thid = ope.parent().attr("id");
					   $("#home4 table tr").eq(thid).children().each(function(){
					   		$(this).children().each(function(){
					   			if($(this).attr("id")==id){
					   				alert("该医生在此时间段已有排班!");
					   				flat=true;
					   				return;
					   			}
					   		});
					   });
					   $("#home5 table tr").eq(thid).children().each(function(){
					   		$(this).children().each(function(){
					   			if($(this).attr("id")==id){
					   				alert("该医生在此时间段已有排班!");
					   				flat=true;
					   				return;
					   			}
					   		});
					   });
					   $("#home6 table tr").eq(thid).children().each(function(){
					   		$(this).children().each(function(){
					   			if($(this).attr("id")==id){
					   				alert("该医生在此时间段已有排班!");
					   				flat=true;
					   				return;
					   			}
					   		});
					   });
					   var home4Item = $("#home4 table tr").eq(thid).children();
					   home4Item.each(function(k,v){
					   		$(v).children().each(function(k1,v1){
								if($(v1).text() == che){
									alert("该医生在此时间段为巡回医生!");
									flat = true;
									return false;
								}
					   		});
					   		if(flat){
					   			return false;
					   		}
					   });
					   var home5Item = $("#home5 table tr").eq(thid).children();
					   home5Item.each(function(k,v){
					   		$(v).children().each(function(k1,v1){
								if($(v1).text() == che){
									alert("该医生在此时间段为巡回医生!");
									flat = true;
									return false;
								}
					   		});
					   		if(flat){
					   			return false;
					   		}
					   });
					  var home6Item = $("#home6 table tr").eq(thid).children();
					   home6Item.each(function(k,v){
					   		$(v).children().each(function(k1,v1){
								if($(v1).text() == che){
									alert("该医生在此时间段为巡回医生!");
									flat = true;
									return false;
								}
					   		});
					   		if(flat){
					   			return false;
					   		}
					   });
					   if(flat){
					   		return;
					   }
					   var p = $('<p>').attr({ id: id}).append(pat).css({"margin-bottom":"0px"});
					   ope.append(p);
					   p.mouseenter(function(){
							$(this).append("<i id='del' class='icon-trash bigger-130'></i>");
							$("#del").bind('click',function(){
								$(this).parent().remove();
							});
						});
					  p.mouseleave(function(){
							$("i").remove(".icon-trash");
						});
					});
					
					$("#doc2 table tr td").bind('click', function() {
					   var flat;
					   var pat='巡视医生:'+$(this).text();
					   var che='麻醉医生:'+$(this).text();
					   var id = $(this).children().attr("id");
					   var thid = ope.parent().attr("id");
					   $("#home4 table tr").eq(thid).children().each(function(){
					   		$(this).children().each(function(){
					   			if($(this).text()==che){
					   				alert("该医生在此时间段为麻醉医生!");
					   				flat=true;
					   				return;
					   			}
					   		});
					   });
					   $("#home5 table tr").eq(thid).children().each(function(){
					   		$(this).children().each(function(){
					   			if($(this).text()==che){
					   				alert("该医生在此时间段为麻醉医生!");
					   				flat=true;
					   				return;
					   			}
					   		});
					   });
					   $("#home6 table tr").eq(thid).children().each(function(){
					   		$(this).children().each(function(){
					   			if($(this).text()==che){
					   				alert("该医生在此时间段为麻醉医生!");
					   				flat=true;
					   				return;
					   			}
					   		});
					   });
					   if(flat){
					   		return;
					   }
					   var p = $('<p>').attr({ id: id}).append(pat).css({"margin-bottom":"0px"});
					   ope.append(p);
					   p.mouseenter(function(){
							$(this).append("<i id='del' class='icon-trash bigger-130'></i>");
							$("#del").bind('click',function(){
								$(this).parent().remove();
							});
						});
					  p.mouseleave(function(){
							$("i").remove(".icon-trash");
						});
					});
					
					$("#hur1 table tr td").bind('click', function() {
						var flat;
					   var pat='器械护士:'+$(this).text();
					   var che='巡视护士:'+$(this).text();
					   var id = $(this).children().attr("id");
					   var thid = ope.parent().attr("id");
					   $("#home4 table tr").eq(thid).children().each(function(){
					   		$(this).children().each(function(){
					   			if($(this).attr("id")==id){
					   				alert("该护士在此时间段已有排班!");
					   				flat=true;
					   				return;
					   			}
					   		});
					   });
					   $("#home5 table tr").eq(thid).children().each(function(){
					   		$(this).children().each(function(){
					   			if($(this).attr("id")==id){
					   				alert("该护士在此时间段已有排班!");
					   				flat=true;
					   				return;
					   			}
					   		});
					   });
					   $("#home6 table tr").eq(thid).children().each(function(){
					   		$(this).children().each(function(){
					   			if($(this).attr("id")==id){
					   				alert("该护士在此时间段已有排班!");
					   				flat=true;
					   				return;
					   			}
					   		});
					   });
					   $("#home4 table tr").eq(thid).children().each(function(){
					   		$(this).children().each(function(){
					   			if($(this).text()==che){
					   				alert("该护士在此时间段为巡视护士!");
					   				flat=true;
					   				return false;
					   			}
					   		});
					   		if(flat){
					   			return false;
					   		}
					   });
					   $("#home5 table tr").eq(thid).children().each(function(){
					   		$(this).children().each(function(){
					   			if($(this).text()==che){
					   				alert("该护士在此时间段为巡视护士!");
					   				flat=true;
					   				return false;
					   			}
					   		});
					   		if(flat){
					   			return false;
					   		}
					   });
					   $("#home6 table tr").eq(thid).children().each(function(){
					   		$(this).children().each(function(){
					   			if($(this).text()==che){
					   				alert("该护士在此时间段为巡视护士!");
					   				flat=true;
					   				return false;
					   			}
					   		});
					   		if(flat){
					   			return false;
					   		}
					   });
					   if(flat){
					   		return;
					   }
					   var p = $('<p>').attr({ id: id}).append(pat).css({"margin-bottom":"0px"});
					   ope.append(p);
					   p.mouseenter(function(){
							$(this).append("<i id='del' class='icon-trash bigger-130'></i>");
							$("#del").bind('click',function(){
								$(this).parent().remove();
							});
						});
					  p.mouseleave(function(){
							$("i").remove(".icon-trash");
						});
					});
					
					$("#hur2 table tr td").bind('click', function() {
						var flat;
					   var pat='巡视护士:'+$(this).text();
					   var che='器械护士:'+$(this).text();
					   var id = $(this).children().attr("id");
					   var thid = ope.parent().attr("id");
					   $("#home4 table tr").eq(thid).children().each(function(){
					   		$(this).children().each(function(){
					   			if($(this).text()==che){
					   				alert("该护士在此时间段为器械护士!");
					   				flat=true;
					   				return;
					   			}
					   		});
					   });
					   $("#home5 table tr").eq(thid).children().each(function(){
					   		$(this).children().each(function(){
					   			if($(this).text()==che){
					   				alert("该护士在此时间段为器械护士!");
					   				flat=true;
					   				return;
					   			}
					   		});
					   });
					   $("#home6 table tr").eq(thid).children().each(function(){
					   		$(this).children().each(function(){
					   			if($(this).text()==che){
					   				alert("该护士在此时间段为器械护士!");
					   				flat=true;
					   				return;
					   			}
					   		});
					   });
					   if(flat){
					   		return;
					   }
					   var p = $('<p>').attr({ id: id}).append(pat).css({"margin-bottom":"0px"});
					   p.mouseenter(function(){
						   $(this).append("<i id='del' class='icon-trash bigger-130'></i>");
						   $("#del").bind('click',function(){
								$(this).parent().remove();
						   });
					   }).mouseleave(function(){
						   console.log(1111);
						   $("i").remove(".icon-trash");
					   });
					   ope.append(p);
					});
				});
			});
			/*
			取消一台手术排程的函数事件。
			*/
			function dbclick(e){
			if($(e).children().length != 0){
					{
					  var r=confirm("你确定移除本台手术吗？")
					  if (r==true)
					    {
							var pat_id = $("p[name='pat']").attr("id");
							$(e).empty();
							$("#"+pat_id+"").parent().removeAttr("style");
					    }
					  else
					    {
						  return false;
					    }
					  }
				}
			}
