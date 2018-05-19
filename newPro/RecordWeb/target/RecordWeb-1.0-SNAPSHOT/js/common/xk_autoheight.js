$(function() {
	var scrollheight = 16;
	var docwidth = document.documentElement.clientWidth;
	var docheight = parseInt(document.documentElement.clientHeight);
	var docheightbody = document.body.offsetHeight;
	//自适应屏幕高度 70是头部导航高度26是底部高度47是操作按钮部分高度（返回，编辑，删除等）117是系统设置界面保存按钮部分高度647为界面最小高度
	if (docwidth > 1200) {
		if (docheight > 799) {
			$(".iframe").css({
				"height": (docheight - 70 - 47 - 27) + "px"
			});
			var xkright = $(".public_right").height() - 47;
			$("#otp_vedeoabout_rvideo").css({
					"height": xkright + "px"
				})
				//录像计划
			$("#vipt_video,.vipt_video_content").height(docheight - 70 - 26 - 57 - 1);
			$(".vip").css("height", (docheight - 70 - 26 - 1) + "px");
			//设备管理
			$(".mm_right,.mm_left").height(docheight - 70 - 26 - 57 - 1);
			$("#mm_right_video,#mm_nogroup_video,#mm_nas_video").height(docheight - 70 - 26 - 57 - 1);
			$("#mm_nas_videonogroup").height(docheight - 70 - 26 - 57 - 1 - 50);
			//资源管理
			var height = $(".table_recycle tr").length * 45;
			if (height > (docheight - 70 - 26)) {
				$(".res_center").height(height + 49 + 15);
				$(".res").height(height + 49 + 15 + 57 - 1);

			} else {
				$(".res").css("height", (docheight - 70 - 26 - 1) + "px")
			}
			//用户管理
			$(".user").height(docheight - 70 - 26 - 1);
			//系统设置
			$(".set").height(docheight - 70 - 26 - 1);
			$(".tabs,.tab_content").height(docheight - 70 - 26 - 117 - 57 - 2);
		} else {
			//巡课界面iframe
			$(".iframe").css({
				"height": "647px"
			});
			//巡课左侧树
			$("#otp_vedeoabout_rvideo").css({
					"height": "647px"
				})
				//录像计划
			$("#vipt_video,.vipt_video_content").height(647);
			//设备管理
			$(".mm_right,.mm_left").height(647);
			$("#mm_right_video,#mm_nogroup_video,#mm_nas_video").height(647);
			$("#mm_nas_videonogroup").height(597)
				//资源管理
			var height = $(".table_recycle tr").length * 45;
			$(".res_center").height(height + 49 + 15);
			$(".res").height(height + 49 + 15 + 57);
			$(".res").css("min-height", "704px")
				//用户管理
			$(".user").height(docheight - 70 - 26);
		}
	} else {
		if (docheight > 680) {
			if (screen.height > 768) {
				$(".obj").height(docheight - 70 - 27 - 57);
				$(".directview").attr("height", (docheight - 70 - 27 - 57));
			} else {
				$(".obj").height(768);
				$(".directview").attr("height", "768");
			}
		} else {
			if (screen.height > 768) {
				$(".obj").height(docheight - 70 - 27 - 57);
				$(".directview").attr("height", (docheight - 70 - 27 - 57));
			} else {
				$(".obj").height(768);
				$(".directview").attr("height", "768");
			}
		}
		if (docheight > 799) {
			$(".iframe").css({
				"height": (docheight - 70 - 47 - 27) + "px"
			});
			var xkright = $(".public_right").height() - 47;
			$("#otp_vedeoabout_rvideo").css({
					"height": xkright + "px"
				})
				//录像计划
			$("#vipt_video,.vipt_video_content").height(docheight - 70 - 26 - 57 - 1);
			$(".vip").css("height", (docheight - 70 - 26 - 1) + "px");
			//设备管理
			$(".mm_right,.mm_left").height(docheight - 70 - 26 - 57 - 1);
			$("#mm_right_video,#mm_nogroup_video,#mm_nas_video").height(docheight - 70 - 26 - 57 - 1);
			$("#mm_nas_videonogroup").height(docheight - 70 - 26 - 57 - 1 - 50);
			//资源管理
			var height = $(".table_recycle tr").length * 45;
			if (height > (docheight - 70 - 26)) {
				$(".res_center").height(height + 49 + 15);
				$(".res").height(height + 49 + 15 + 57 - 1);

			} else {
				$(".res").css("height", (docheight - 70 - 26 - 1) + "px")
			}
			//用户管理
			$(".user").height(docheight - 70 - 26 - 1);
			//系统设置
			$(".set").height(docheight - 70 - 26 - 1);
			$(".tabs,.tab_content").height(docheight - 70 - 26 - 117 - 57 - 2);
		} else {
			//巡课界面iframe
			$(".iframe").css({
				"height": "647px"
			});
			//巡课左侧树
			$("#otp_vedeoabout_rvideo").css({
				"height": "647px"
			})

			//集控消息发布
			$("#jk_messagelist").css({
					"height": "360px"
				})
				//录像计划
			$("#vipt_video,.vipt_video_content").height(647);
			//设备管理
			$(".mm_right,.mm_left").height(647);
			$("#mm_right_video,#mm_nogroup_video,#mm_nas_video").height(647);
			$("#mm_nas_videonogroup").height(597)
				//资源管理
			var height = $(".table_recycle tr").length * 45;
			$(".res_center").height(height + 49 + 15);
			$(".res").height(height + 49 + 15 + 57);
			$(".res").css("min-height", "704px")
				//用户管理
			$(".user").height(docheight - 70 - 26);
		}
	}

	$(window).resize(function() {
		//自适应屏幕高度 70是头部导航高度26是底部高度47是操作按钮部分高度（返回，编辑，删除等）117是系统设置界面保存按钮部分高度647为界面最小高度
		var docwidth = document.body.offsetWidth;
		var docheight = document.body.offsetHeight;
		if (docheight > 768) {
			var docwidth = document.documentElement.clientWidth;
			var docheight = document.documentElement.clientHeight;
		} else {
			var docwidth = document.body.offsetWidth;
			var docheight = document.body.offsetHeight;
		}
		if (docwidth > 1200) {
			if (docheight > 799) {
				$(".iframe").css({
					"height": (docheight - 70 - 47 - 27) + "px"
				});
				var xkright = $(".public_right").height() - 47;
				$("#otp_vedeoabout_rvideo").css({
						"height": xkright + "px"
					})
					//录像计划
				$("#vipt_video,.vipt_video_content").height(docheight - 70 - 26 - 57 - 1);
				$(".vip").css("height", (docheight - 70 - 26 - 1) + "px");
				//设备管理
				$(".mm_right,.mm_left").height(docheight - 70 - 26 - 57 - 1);
				$("#mm_right_video,#mm_nogroup_video,#mm_nas_video").height(docheight - 70 - 26 - 57 - 1);
				$("#mm_nas_videonogroup").height(docheight - 70 - 26 - 57 - 1 - 50);
				//资源管理
				var height = $(".table_recycle tr").length * 45;
				if (height > (docheight - 70 - 26)) {
					$(".res_center").height(height + 49 + 15);
					$(".res").height(height + 49 + 15 + 57 - 1);

				} else {
					$(".res").css("height", (docheight - 70 - 26 - 1) + "px")
				}
				//用户管理
				$(".user").height(docheight - 70 - 26 - 1);
				//系统设置
				$(".set").height(docheight - 70 - 26 - 1);
				$(".tabs,.tab_content").height(docheight - 70 - 26 - 117 - 57 - 2);
			} else {
				//巡课界面iframe
				$(".iframe").css({
					"height": "647px"
				});
				//巡课左侧树
				$("#otp_vedeoabout_rvideo").css({
						"height": "647px"
					})
					//录像计划
				$("#vipt_video,.vipt_video_content").height(647);
				//设备管理
				$(".mm_right,.mm_left").height(647);
				$("#mm_right_video,#mm_nogroup_video,#mm_nas_video").height(647);
				$("#mm_nas_videonogroup").height(597)
					//资源管理
				var height = $(".table_recycle tr").length * 45;
				$(".res_center").height(height + 49 + 15);
				$(".res").height(height + 49 + 15 + 57);
				$(".res").css("min-height", "704px")
					//用户管理
				$(".user").height(docheight - 70 - 26);
			}
		} else {
			if (docheight > 799) {
				$(".iframe").css({
					"height": (docheight - 70 - 47 - 27) + "px"
				});
				var xkright = $(".public_right").height() - 47;
				$("#otp_vedeoabout_rvideo").css({
						"height": xkright + "px"
					})
					//录像计划
				$("#vipt_video,.vipt_video_content").height(docheight - 70 - 26 - 57 - 1);
				$(".vip").css("height", (docheight - 70 - 26 - 1) + "px");
				//设备管理
				$(".mm_right,.mm_left").height(docheight - 70 - 26 - 57 - 1);
				$("#mm_right_video,#mm_nogroup_video,#mm_nas_video").height(docheight - 70 - 26 - 57 - 1);
				$("#mm_nas_videonogroup").height(docheight - 70 - 26 - 57 - 1 - 50);
				//资源管理
				var height = $(".table_recycle tr").length * 45;
				if (height > (docheight - 70 - 26)) {
					$(".res_center").height(height + 49 + 15);
					$(".res").height(height + 49 + 15 + 57 - 1);

				} else {
					$(".res").css("height", (docheight - 70 - 26 - 1) + "px")
				}
				//用户管理
				$(".user").height(docheight - 70 - 26 - 1);
				//系统设置
				$(".set").height(docheight - 70 - 26 - 1);
				$(".tabs,.tab_content").height(docheight - 70 - 26 - 117 - 57 - 2);
			} else {
				//巡课界面iframe
				$(".iframe").css({
					"height": "647px"
				});
				//巡课左侧树
				$("#otp_vedeoabout_rvideo").css({
						"height": "647px"
					})
					//集控消息发布
				$("#jk_messagelist").css({
						"height": "360px"
					})
					//录像计划
				$("#vipt_video,.vipt_video_content").height(647);
				//设备管理
				$(".mm_right,.mm_left").height(647);
				$("#mm_right_video,#mm_nogroup_video,#mm_nas_video").height(647);
				$("#mm_nas_videonogroup").height(597)
					//资源管理
				var height = $(".table_recycle tr").length * 45;
				$(".res_center").height(height + 49 + 15);
				$(".res").height(height + 49 + 15 + 57);
				$(".res").css("min-height", "704px")
					//用户管理
				$(".user").height(docheight - 70 - 26);
			}
		}
	})

	//自适应屏幕高度--登录
	var heightlogin = document.documentElement.clientHeight - 206 - 3;
	if (heightlogin < 590) {
		$(".n_login").css("height", "590px");
	} else if (heightlogin >= 590) {
		$(".n_login").css("height", heightlogin + "px");
	}
	$(window).resize(function() {
			if (heightlogin < 590) {
				$(".n_login").css("height", "590px");
			}
			if (heightlogin >= 590) {
				$(".n_login").css("height", heightlogin + "px");
			}
			if ($("#fullscreen").val() == "fullscreen") {

			} else {
				location.href = location.href
			}
		})
		//搜索框高亮
	$(".user_search").mouseover(function() {
			$(this).css("border", "1px solid #28B779");
			$(this).find(".user_search_input").focus();
		}).mouseout(function() {
			$(this).css("border", "1px solid #dbdbdb");
			$(this).find(".user_search_input").blur();
		})
		//登录框高亮
	$(".login_input").mouseover(function() {
		$(this).css("border", "1px solid #28B779");
		$(this).focus();
	}).mouseout(function() {
		$(this).css("border", "1px solid #dbdbdb");
		//$(this).blur();
	})
})

$(window).resize(function() {
	if ((navigator.userAgent.match(/(iPhone|Android|iPad)/i))) {

	} else {
		location.href = location.href
	}
})