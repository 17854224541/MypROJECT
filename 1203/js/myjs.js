$(document).ready(function() {
	//left
	$(".menu ul li").eq(0).css("background-color", "#2F456D");
	$(".menu ul li").click(function() {
		$(".menu ul li").css("background-color", "Transparent");
		$(this).css("background-color", "#2F456D");
	})
	//离开
	$(".likai").click(function() {
		$(".light-box").css("display", "block");
		$(".switch").css("display", "block");
		//投影仪关
		projectoroff($(".projector"));
		//灯关
		lightoff1($(".light1 .light"));
		lightoff2($(".light2 .light"))
		//窗帘
		curtainon($(".curtain"))
	})
	//会客
	$(".huike").click(function() {
		$(".light-box").css("display", "block");
		$(".switch").css("display", "block");
		//投影仪关
		projectoroff($(".projector"));
		//灯开
		lighton1($(".light1 .light"));
		lighton2($(".light2 .light"));
		//窗帘
		curtainon($(".curtain"))
		curtainoff($(".curtain-6"))
		curtainoff($(".curtain-5"))
		curtainoff($(".curtain-4"))
		curtainoff($(".curtain-3"))
	})
	//会议
	$(".huiyi").click(function() {
		$(".light-box").css("display", "block");
		$(".switch").css("display", "block");
		//投影仪关
		projectoroff($(".projector"));
		//灯开
		lighton1($(".light1 .light"));
		lighton2($(".light2 .light"));
		//窗帘开
		curtainon($(".curtain"))
	})
	//投影
	$(".touying").click(function() {
		$(".light-box").css("display", "block");
		$(".switch").css("display", "block");
		//投影仪开
		projectoron($(".projector"));
		//灯
		lightoff1($(".light1 .light"));
		lightoff2($(".light2 .light"))
		lighton2($(".part-4 .light"))
		//窗帘关
		curtainoff($(".curtain"))
	})
	//娱乐
	$(".yule").click(function() {
		$(".light-box").css("display", "block");
		$(".switch").css("display", "block");
		//投影仪开
		projectoron($(".projector"));
		//灯
		lightoff1($(".light1 .light"));
		lightoff2($(".light2 .light"))
		lighton2($(".part-4 .light"))
		//窗帘关
		curtainoff($(".curtain"))
	})
	//灯
	$(".btn-light").click(function() {
		$(".light-box").css("display", "block");
		$(".switch").css("display", "none");
		$(".light").css("display", "block");
	})
	//窗帘
	$(".btn-curtain").click(function() {
		$(".light-box").css("display", "none");
		$(".switch").css("display", "none");
		$(".curtain").css("display", "block");
	})
	//上下按钮
	$(".more-top").click(function() {
		$(".menu ul").animate({
			"top": "0"
		}, 200);
		$(".more-top").css("opacity", "0");
		$(".more-btm").css("opacity", "1");
	})
	$(".more-btm").click(function() {
		$(".menu ul").animate({
			"top": "-40%"
		}, 200);
		$(".more-top").css("opacity", "1");
		$(".more-btm").css("opacity", "0");
	})
	//right

	//开灯function
	function lighton1(light1) {
		olight = light1.parent(".light-box").find(".light");
		kd0 = setTimeout(function() {
			olight.eq(0).removeClass("light-off");
			olight.eq(0).addClass("light-on");
		}, 0);
		kd1 = setTimeout(function() {
			olight.eq(1).removeClass("light-off");
			olight.eq(1).addClass("light-on");
		}, 50);
		kd2 = setTimeout(function() {
			olight.eq(2).removeClass("light-off");
			olight.eq(2).addClass("light-on");
		}, 100);
		kd3 = setTimeout(function() {
			olight.eq(3).removeClass("light-off");
			olight.eq(3).addClass("light-on");
		}, 150);
		kd4 = setTimeout(function() {
			olight.eq(4).removeClass("light-off");
			olight.eq(4).addClass("light-on");
		}, 200);
		kd5 = setTimeout(function() {
			olight.eq(5).removeClass("light-off");
			olight.eq(5).addClass("light-on");
		}, 250);
		kd6 = setTimeout(function() {
			olight.eq(6).removeClass("light-off");
			olight.eq(6).addClass("light-on");
		}, 300);
		kd7 = setTimeout(function() {
			olight.eq(7).removeClass("light-off");
			olight.eq(7).addClass("light-on");
		}, 350);
		kd8 = setTimeout(function() {
			olight.eq(8).removeClass("light-off");
			olight.eq(8).addClass("light-on");
		}, 400);
		kd9 = setTimeout(function() {
			olight.eq(9).removeClass("light-off");
			olight.eq(9).addClass("light-on");
		}, 450);
		kd10 = setTimeout(function() {
			olight.eq(10).removeClass("light-off");
			olight.eq(10).addClass("light-on");
		}, 500);
		kd11 = setTimeout(function() {
			olight.eq(11).removeClass("light-off");
			olight.eq(11).addClass("light-on");
		}, 550);
		kd12 = setTimeout(function() {
			olight.eq(12).removeClass("light-off");
			olight.eq(12).addClass("light-on");
		}, 600);
		kd13 = setTimeout(function() {
			olight.eq(13).removeClass("light-off");
			olight.eq(13).addClass("light-on");
		}, 650);
		kd14 = setTimeout(function() {
			olight.eq(14).removeClass("light-off");
			olight.eq(14).addClass("light-on");
		}, 700);
		kd15 = setTimeout(function() {
			olight.eq(15).removeClass("light-off");
			olight.eq(15).addClass("light-on");
		}, 750);
		olight.find("input").val("on");
		light1.parent(".light-box").css("border-color", "#f78a06")
	}
	//开灯2
	function lighton2(light2) {
		olight2 = light2.parent(".light-box").find(".light");
		olight2.removeClass("light-off");
		olight2.addClass("light-on");
		olight2.find("input").val("on");
		light2.parent(".light-box").css("border-color", "#f78a06");
	}
	//关灯function
	function lightoff1(light) {
		clearTimeout(kd0);
		clearTimeout(kd1);
		clearTimeout(kd2);
		clearTimeout(kd3);
		clearTimeout(kd4);
		clearTimeout(kd5);
		clearTimeout(kd6);
		clearTimeout(kd7);
		clearTimeout(kd8);
		clearTimeout(kd9);
		clearTimeout(kd10);
		clearTimeout(kd11);
		clearTimeout(kd12);
		clearTimeout(kd13);
		clearTimeout(kd14);
		clearTimeout(kd15);
		olight = light.parent(".light-box").find(".light");
		olight.removeClass("light-on");
		olight.addClass("light-off");
		olight.find("input").val("off");
		light.parent(".light-box").css("border-color", "#716866");
	}
	//关灯2
	function lightoff2(light2) {
		olight2 = light2.parent(".light-box").find(".light");
		olight2.removeClass("light-on");
		olight2.addClass("light-off");
		olight2.find("input").val("off");
		light2.parent(".light-box").css("border-color", "#716866");
	}
	//点击灯开关
	$(".light1").find(".light").click(function() {
		console.log($(this))
		var la = $(this).find("input").val();
		if(la == "off") {
			lighton1($(this));
		} else {
			lightoff1($(this));
		}
	})
	$(".light2").find(".light").click(function() {
		var la2 = $(this).find("input").val();
		if(la2 == "off") {
			lighton2($(this));
		} else {
			lightoff2($(this));
		}
	})

	//投影仪开function
	function projectoron(projector) {
		projector.removeClass("projector-off");
		projector.addClass("projector-on");
		projector.find("input").val("on");
		$(".motaikuang").stop().show(200);
		$(".motaikuang").html("投影开");
		$(".motaikuang").delay(1000).hide(200);

	}
	//投影仪关function
	function projectoroff(projector) {
		projector.removeClass("projector-on");
		projector.addClass("projector-off");
		projector.find("input").val("off");
		$(".motaikuang").stop().show(200);
		$(".motaikuang").html("投影关");
		$(".motaikuang").delay(1000).hide(200);
	}
	//投影仪开关function
	function projectorswitch(projector) {
		var la = projector.find("input").val();
		if(la == "off") {
			projectoron(projector);
		} else {
			projectoroff(projector)
		}
	}
	//点击投影仪开关事件
	$(".projector").click(function() {
		projectorswitch($(this));
	})
	//窗帘开icon变换
	function curtainon(curtain) {
		curtain.removeClass("curtain-off")
		curtain.removeClass("curtain-stop")
		curtain.addClass("curtain-on")
		curtain.find("input").val(100)
	}
	//窗帘关icon变换
	function curtainoff(curtain) {
		curtain.removeClass("curtain-on")
		curtain.removeClass("curtain-stop")
		curtain.addClass("curtain-off")
		curtain.find("input").val(0)
	}
	//窗帘停icon变换
	function curtainstop(curtain) {
		curtain.removeClass("curtain-on")
		curtain.removeClass("curtain-off")
		curtain.addClass("curtain-stop")
	}
	//点击窗帘开关
	$(".curtain").click(function() {
		var t1;
		var index = $(this).index() - 6;
		$(".zhezhao1").css("display", "block");
		$(".popup1").eq(index).css("display", "block");
		var curtain = $(this);
		var ca = curtain.find("input").val();
		ca = parseInt(ca);
		//百分比
		$(".popup1").eq(index).find(".kuang").html(ca + "%");
		//进度条
		$(".popup1").eq(index).find(".progress-bar").css("width", ca / 100 * 400 + "px");
		//窗帘
		$(".popup1").eq(index).find(".icon-curtain img").css("height", (1 - ca / 100) * 60 + "px");
		//开
		$(".popup1").eq(index).find(".c-btn-on").click(function() {
			if(t1) {
				clearInterval(t1);
			}
			//该按钮禁用，其他按钮启用
			$(".popup1").eq(index).find(".c-btn-stop")[0].disabled = false;
			$(".popup1").eq(index).find(".c-btn-off")[0].disabled = false;
			$(this)[0].disabled = true;
			$(this).siblings("button").removeClass("button");
			$(this).addClass("button");
			//
			var cb = $(".popup1").eq(index).find(".progress-bar").css("width");
			cb = parseInt(cb);
			//循环执行，每隔100ms执行一次  
			t1 = setInterval(refreshCount1, 100);

			function refreshCount1() {
				if(ca == 100) {
					clearInterval(t1);
				} else {
					cb = cb + 4;
					//进度条
					$(".popup1").eq(index).find(".progress-bar").css("width", cb + "px");
					ca = ca + 1;
					//百分比 
					$(".popup1").eq(index).find(".kuang").html(ca + "%");
					//窗帘
					$(".popup1").eq(index).find(".icon-curtain img").css("height", (1 - ca / 100) * 60 + "px");
				}
				return ca;
			}
		})
		//关
		$(".popup1").eq(index).find(".c-btn-off").click(function() {
			if(t1) {
				clearInterval(t1);
			}
			//该按钮禁用，其他按钮启用
			$(".popup1").eq(index).find(".c-btn-on")[0].disabled = false;
			$(".popup1").eq(index).find(".c-btn-stop")[0].disabled = false;
			$(this)[0].disabled = true;
			$(this).siblings("button").removeClass("button");
			$(this).addClass("button");
			var cb = $(".popup1").eq(index).find(".progress-bar").css("width");
			cb = parseInt(cb);
			//循环执行，每隔100ms执行一次 
			t1 = setInterval(refreshCount2, 100);

			function refreshCount2() {
				if(ca == 0) {
					clearInterval(t1);
				} else {
					cb = cb - 4;
					//进度条
					$(".popup1").eq(index).find(".progress-bar").css("width", cb + "px");
					ca = ca - 1;
					//百分比 
					$(".popup1").eq(index).find(".kuang").html(ca + "%");
					//窗帘
					$(".popup1").eq(index).find(".icon-curtain img").css("height", (1 - ca / 100) * 60 + "px");
				}
				return ca;
			}
		})
		//暂停
		$(".popup1").eq(index).find(".c-btn-stop").click(function() {
			clearInterval(t1);
			//该按钮禁用，其他按钮启用
			$(".popup1").eq(index).find(".c-btn-on")[0].disabled = false;
			$(".popup1").eq(index).find(".c-btn-off")[0].disabled = false;
			$(this)[0].disabled = true;
			$(this).siblings("button").removeClass("button");
			$(this).addClass("button");
		})
		//点击空白处关闭
		$(".zhezhao1").mouseup(function(e) {
			var pop1 = $(this).find('.popup1');
			if(!pop1.is(e.target) && pop1.has(e.target).length === 0) {
				// 可以在这里关闭弹窗
				$(".zhezhao1").css("display", "none");
				$(".popup1").css("display", "none");
				//百分比
				$(".kuang").html(0 + "%");
				//进度条
				$(".progress-bar").css("width", 0 / 100 * 400 + "px");
				//窗帘
				$(".popup1 .icon-curtain img").css("height", (1 - 0 / 100) * 60 + "px");
				//
				$(".curtain").eq(index).find("input").val(ca);
				if(ca == 0) {
					curtainoff($(".curtain").eq(index))
				}
				if(ca > 0 && ca < 100) {
					curtainstop($(".curtain").eq(index))
				}
				if(ca == 100) {
					curtainon($(".curtain").eq(index))
				}
			}
		});
	})
	//点击空调开关
	$(".btn-kongtiao").click(function() {
		$(".light-box").css("display", "block");
		$(".switch").css("display", "block");
		$(".zhezhao2").css("display", "block");
		$(".popup2").css("display", "block");
		//点击空白处关闭
		$(".zhezhao2").mouseup(function(e) {
			var pop2 = $('.popup2');
			if(!pop2.is(e.target) && pop2.has(e.target).length === 0) {
				// 可以在这里关闭弹窗
				$(".zhezhao2").css("display", "none");
				$(".popup2").css("display", "none");
				$(".btn-kongtiao").css("background-color", "transparent")
			}
		});
	})
	//按钮动态效果
	$(".popup2 .btn-box .icon-btn").click(function() {
		$(this).find("img").animate({
			width: "80%",
		}, 100, function() {
			$(this).animate({
				width: "100%",
			}, 100)
		})
	})
	//调节温度
	$(".a-btn-jian").click(function() {
		var t = $("#t-num").html();
		t--;
		$("#t-num").html(t)
	})
	$(".a-btn-jia").click(function() {
		var t = $("#t-num").html();
		t++;
		$("#t-num").html(t)
	})
	//锁屏
	$(".a-btn-ls").click(function() {
		if($(this).find("input").val() == "off") {
			$(this).find("img").attr("src", "img/icon-ls-on.png");
			$(this).find("input").val("on");
			$(".icon-btn").each(function() {
				this.disabled = false;
				this.style.opacity = 1;
			})
		} else {
			$(this).find("img").attr("src", "img/icon-ls-off.png");
			$(this).find("input").val("off");
			$(".icon-btn").each(function() {
				this.disabled = true;
				this.style.opacity = 0.5;
			})
			$(".a-btn-ls")[0].disabled = false;
			$(".a-btn-ls")[0].style.opacity = 1;
		}
	})
	//空调开关
	$(".a-btn-power").click(function() {
		if($(this).find("input").val() == "off") {
			//关→开
			$(this).siblings("h1").html("开")
			$(this).find("input").val("on")
			$(".icon-btn").each(function() {
				this.disabled = false;
				this.style.opacity = 1;
			})
		} else {
			//开→关
			$(this).siblings("h1").html("关")
			$(this).find("input").val("off")
			$(".icon-btn").each(function() {
				this.disabled = true;
				this.style.opacity = 0.5;
			})
			$(".a-btn-power")[0].disabled = false;
			$(".a-btn-power")[0].style.opacity = 1;
		}
	})
	//空调模式
	$(".a-btn-moshi").click(function() {
		if($(this).find("input").val() == "制冷") {
			//切换到制热
			$(this).find("img").attr("src", "img/icon-zhire.png");
			$(this).find("input").val("制热");
			$(".moshi-img").attr("src", "img/icon-zhire-s.png");
		} else if($(this).find("input").val() == "制热") {
			//切换到除湿
			$(this).find("img").attr("src", "img/icon-chushi.png");
			$(this).find("input").val("除湿");
			$(".moshi-img").attr("src", "img/icon-chushi-s.png");
		} else if($(this).find("input").val() == "除湿") {
			//切换到通风
			$(this).find("img").attr("src", "img/icon-tongfeng.png");
			$(this).find("input").val("通风");
			$(".moshi-img").attr("src", "img/icon-tongfeng-s.png");
		} else if($(this).find("input").val() == "通风") {
			//切换到制冷
			$(this).find("img").attr("src", "img/icon-zhileng.png");
			$(this).find("input").val("制冷");
			$(".moshi-img").attr("src", "img/icon-zhileng-s.png");
		}
	})
	//空调风速
	$(".a-btn-fengsu").click(function() {
		if($(this).find("input").val() == "小风") {
			//切换到中风
			$(this).find("img").attr("src", "img/icon-fengsu-zhongfeng.png");
			$(this).find("input").val("中风");
			$(".fengsu-text").text("中风");
		} else if($(this).find("input").val() == "中风") {
			//切换到大风
			$(this).find("img").attr("src", "img/icon-fengsu-dafeng.png");
			$(this).find("input").val("大风");
			$(".fengsu-text").text("大风");
		} else if($(this).find("input").val() == "大风") {
			//切换到小风
			$(this).find("img").attr("src", "img/icon-fengsu-xiaofeng.png");
			$(this).find("input").val("小风");
			$(".fengsu-text").text("小风");
		}
	})
})