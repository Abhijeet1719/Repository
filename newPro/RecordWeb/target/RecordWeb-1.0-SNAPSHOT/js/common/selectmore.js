$(function(){
    var slen=$(".sall").length;//获取当前所属div(分组)长度
    //alert(slen)
    for(j=0;j<slen;j++){
        changeselect(j)//循环调用赋值方法
    }
})
//jquery模拟select
function changeselect(args){
    var sdefault=$("#select"+args).find("option:selected");//获取默认选中值
    $("#selectdiv"+args).text(sdefault.text())//赋值给模拟div的text
    $("#selectdiv"+args).attr("title",sdefault.text())//赋值给模拟div的text
    var optlen=$("#select"+args).find("option").length;//获取option的长度
    for(i=0;i<optlen;i++)
    {
        var optval=$("#select"+args).find("option").eq(i).text();//获取每一个select的值
        var value = $("#select"+args).find("option").eq(i).val();
        var htmlto="<a title="+optval+" value="+value+">"+optval+"</a>";//赋值给a标签
        //var htmlto="<a title="+optval+" value="++">"+optval+"</a>";//赋值给a标签
        $("#selectdivul"+args).append(htmlto);//将a标签添加到模拟div
    }
    //点击模拟下拉框，显示或隐藏内容
    $("#selectdiv"+args).click(function()
    {
        var display=$("#selectdivul"+args).css("display");//判断当前模拟下拉菜单的显示属性
        if(display=="none"){//隐藏，则显示
            $("#selectdivul"+args).css("display","block");
//		$("#selectdivul"+args).find("a").eq(0).css("display","none");
        }else{//显示，则隐藏
            $("#selectdivul"+args).css("display","none");
        }
    })
    $("#selectdivul"+args).find("a").eq(0).css({"color":"#fff","background":"#28b779"}).siblings().css({"color":"#333","background":"#fff"});
    //点击模拟a标签，重新选定原生select选项
    $("#selectdivul"+args+" a").click(function(){
        var index=$(this).index();//获取a标签的索引值
        $("#select"+args).find("option").eq(index).prop("selected","selected");//根据a标签的索引值选择select原生的值
        $("#selectdivul"+args).find("a").eq(index).css({"color":"#fff","background":"#28b779"}).siblings().css({"color":"#333","background":"#fff"});
        $("#selectdivul"+args).css("display","none");//选中模拟值后，隐藏该div
        $("#selectdiv"+args).text($("#select"+args).find("option").eq(index).text());//把选中的值赋值到模拟div默认值选项
        $("#selectdiv"+args).attr("title",$("#select"+args).find("option").eq(index).text());//把选中的值赋值到模拟div默认值选项
//		alert("a")
        var gettext=$("#select"+args).find("option").eq(index).text();
        if(args==0){
            var sdefault=$("#select"+args).find("option:selected");//获取默认选中值
            $("#pagesize").val(sdefault.val());
            var sdefault=$("#select"+args).find("option:selected");//获取默认选中值
            var groupid=$("#group_id").val();
            var pagesize = $("#pagesize").val();
            var root_path = $("#root_path").val();
            if(gettext=="九屏显示"){
                var path = root_path+'/viewclass/Viewclass_viewClass9.do?groupid='+groupid+'&pagesize='+pagesize+'&currentPage=1';
                $("#go").attr("src",path);
                //alert($("#go").attr("src"))
            }else if(gettext=="四屏显示"){
                $("#go").attr("src",root_path+'/viewclass/Viewclass_viewClass4.do?groupid='+groupid+'&pagesize='+pagesize+'&currentPage=1');
                //alert($("#go").attr("src"))
            }
        }
    })
    $("#selectdivul"+args).find("a").mouseover(function(){
				//alert($(this).css("background-color"))
				if($(this).css("background-color")=="#fff"||$(this).css("background-color")=="rgb(255, 255, 255)"){
					$(this).css({"background":"#dbdbdb","color":"#333"})
				}else if($(this).css("background-color")=="#28b779"||$(this).css("background-color")=="rgb(40, 183, 121)"){
					return false;
				}
			}).mouseout(function(){
				if($(this).css("background-color")=="#333"||$(this).css("background-color")=="rgb(219, 219, 219)"){
					$(this).css({"background":"#fff","color":"#333"})
				}else if($(this).css("background-color")=="#28b779"||$(this).css("background-color")=="rgb(40, 183, 121)"){
					return false;
				}
			})
    //点击空白区域，隐藏select模拟
    $(document).bind("click",function(e){
        var target = $(e.target);//获取点击时间
        if(target.closest("#selectdivall"+args).length == 0)
        {
            $("#selectdivul"+args).hide();//隐藏divli
        }
    })
}