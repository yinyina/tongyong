// JavaScript Document
window.onload = function(){
	
	document.getElementById("series").innerHTML = CourseName
	document.title = CourseName;
	
	var curlm;
	if(arrLeftChildName1){
		oDl1.getElementsByTagName("dd")[0].getElementsByTagName("div")[0].style.display="block";
		curlm=arrLeftFileName[0]+"01";
		patharea.innerHTML="当前位置："+arrLeftColumnName[0]+" > "+arrLeftChildName1[0];
	}else{
		curlm=arrLeftFileName[0];
		patharea.innerHTML="当前位置："+arrLeftColumnName[0];
	};
	brightena(1,"l")
	
	//判断二级栏目
	function pderji(){
		if(arrLeftChildStype1[0]=="video"){
				//第一个是视频时
				playvideo(curlm,1);	
			}else if(arrLeftChildStype1[0]=="swf"){
				//第一个是文本时
				playswf(curlm);
			}else if(arrLeftChildStype1[0]=="word"){
				//第一个是html时
				showword(curlm);
			}else if(arrLeftChildStype1[0]=="download"){
				//第一个是下载时，填写不管下载栏目有一个还是多个，都要在二级栏目
				playdown(curlm,arrLeftChildName1[0]);
		}	
	}
	
	//判断一级栏目
	function pdyiji(){
		//判断一级栏目
		if(arrLeftStype[0]=="video"){
			//第一个是视频时
			playvideo(curlm,1);	
		}else if(arrLeftStype[0]=="swf"){
			//第一个是文本时
			playswf(curlm);
		}else if(arrLeftStype[0]=="word"){
			//第一个是html时
			showword(curlm);
		}else if(arrLeftStype[0]=="download"){
			//第一个是下载时，填写不管下载栏目有一个还是多个，都要在二级栏目
			playdown(curlm,arrLeftColumnName[0]);
		}
	}
	
	if(arrLeftChildName1){
		if(arrLeftChildStype1){
			pderji()
		}else{
			pdyiji()		
		}
	}else{
		pdyiji()
	}

	if(arrLeftChildName1){brightenb(1,1,"l")};
	
	//---------------页面加载完成后计时器相关begin---------------
	//获取url中参数
	function getUrlParam(name)
	{
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); 
		var r = window.location.search.substr(1).match(reg); 
		if (r!=null) return unescape(r[2]); return null; 
	} 
	
	var platformiframeurl;
	platformiframeurl = getUrlParam('callParentIframeUrl');
	
	//平台已传参,添加iframe嵌套父级页面,用于跨主域访问
	if(platformiframeurl){	
		//向body创建div
		var yy_div=document.createElement("div");
		document.body.appendChild(yy_div);
		yy_div.id="yy_iframe";
		//添加iframe
		document.getElementById("yy_iframe").innerHTML='<iframe name="iframeRight" id="iframeRight" style="display:none;" src="'+ platformiframeurl +'"></iframe>'
	}
	//---------------页面加载完成后计时器相关end---------------		
}

function brightena(aIndex,lorr){
	oA1.style.backgroundImage="url(images/ct.png)";
	oA1.style.color="#000000";
	oA1.style.fontWeight="normal";
	oldFlag=aIndex;
	oldlorr=lorr;
	if(lorr=="l"){oDlnum=oDl1}else{oDlnum=oDl2};
	oA1=oDlnum.getElementsByTagName("dd")[aIndex-1].getElementsByTagName("a")[0];
	oA1.style.backgroundImage="url(images/cur.png)";
	oA1.style.color="#FFFFFF";
	oA1.style.fontWeight="bold";
	var allLi=document.getElementsByTagName("Li");
	for(var i=0; i<allLi.length; i++){
		allLi[i].style.fontWeight="normal";
		allLi[i].style.color="#000000";
	}	
}
function brightenb(aIndex,bIndex,lorr){
	if(lorr=="l"){oDlnum=oDl1}else{oDlnum=oDl2};
	oLi1=oDlnum.getElementsByTagName("dd")[aIndex-1].getElementsByTagName("Li")[bIndex-1];
	oLi1.style.fontWeight="bold";
	oLi1.style.color="#2a59d0";
}

function showcnt(obj,aIndex,bIndex,level,lorr){
	var sIndex=bIndex.toString();
	if (sIndex.length==1){
		sIndex="0"+bIndex;
		}
	if (lorr=="l"){
		slorr="Left";
		}else{
		slorr="Right";	
	}
	var arrChildMenu=eval("arr"+slorr+"ChildName"+aIndex);
	var arrChildStype=eval("arr"+slorr+"ChildStype"+aIndex);
	var arrStype=eval("arr"+slorr+"Stype");
	var arrColumnName=eval("arr"+slorr+"ColumnName");
	var arrFileName=eval("arr"+slorr+"FileName");
	var arrAllDiv=oDl1.getElementsByTagName("div");
	if(obj.tagName=="A"){
		brightena(aIndex,lorr);
		if(arrChildMenu){
				for(var i=0; i<arrAllDiv.length; i++){
					arrAllDiv[i].style.display="none";
					document.getElementsByTagName("dd")[aIndex-1].getElementsByTagName("div")[0].style.display="block";
				}
		}
		else{
			for(var i=0; i<arrAllDiv.length; i++){
					arrAllDiv[i].style.display="none";
				}
			brightena(aIndex,lorr);
			patharea.innerHTML="当前位置："+arrColumnName[aIndex-1]
			if(arrStype[aIndex-1]=="video"){
				var zid=arrFileName[aIndex-1];
				playvideo(zid);			
			}
			if(arrStype[aIndex-1]=="swf"){
				var zid=arrFileName[aIndex-1];
				playswf(zid);
			}
			if(arrStype[aIndex-1]=="word"){
				var zid=arrFileName[aIndex-1];
				showword(zid);
			}
			if(arrStype[aIndex-1]=="download"){
				var zid=arrFileName[aIndex-1];
				playdown(zid,arrColumnName[aIndex-1]);
			}
		}
		
	}
	else{
		brightena(aIndex,lorr);
		brightenb(aIndex,bIndex,lorr)
		patharea.innerHTML="当前位置："+arrColumnName[aIndex-1]+" > "+arrChildMenu[bIndex-1];
		var zid=arrFileName[aIndex-1]+sIndex;
		if(arrChildStype){
			curChildStype=eval("arr"+slorr+"ChildStype"+aIndex);
			switch(curChildStype[bIndex-1]){
				case "swf":
					playswf(zid);
					break;
				case "video":
					playvideo(zid,1);
					break;
				case "word":
					showword(zid);
					break;
				case "download":
					playdown(zid,arrChildMenu[bIndex-1]);
					break;
				default:
			}
		}

		else{
			if(arrStype[aIndex-1]=="video"){
				playvideo(zid,1);
			}
			if(arrStype[aIndex-1]=="swf"){
				playswf(zid);
			}
			if(arrStype[aIndex-1]=="word"){
				showword(zid);
			}
			if(arrStype[aIndex-1]=="download"){
				playdown(zid,arrChildMenu[bIndex-1]);
			}
		}
	};
};

//视频播放函数	
function playvideo(zid,e){
	jsqplay(true);
	imgpath = "images/beforevideo";
	var StrPath = location.href;
	var bool = StrPath.indexOf("http");
	if (bool>=0){
		var arrVid=eval("arrVid"+zid.substring(0,2))
		
		if(zid.substring(4,5)){
			arrVid=eval("arrVid"+zid.substring(0,3))
		}

		var nVidIndex=parseInt(zid.substring(2,5));
		
		if(nVidIndex){}else{
			nVidIndex=1;
		}
		
		var myVid=arrVid[nVidIndex-1];
		var mstr='<div style="margin:33px 0 0 25px;" id="myvideo"></div>'
		document.getElementById("videocnt").innerHTML = mstr;
		
		function creatV(obj){
			var oScript= document.createElement("script");
			oScript.type = "text/javascript";
			oScript.src="https://p.bokecc.com/player?vid="+myVid+"&siteid=039C1380CF417F50&autoStart=true&width=640&height=360&playerid=9223C66477962A2F&playertype=1";
			obj.appendChild(oScript);
		};
		creatV(myvideo)
	}
	else {
		var mp4path = "video/" + CourseCode + zid;
		var imgpath = "images/beforevideo";
		var mstr = "<table style='margin:33px 0 0 25px;' width='642' height='362' cellpadding='0' cellspacing='1' bgcolor='#eceaea'>";
		mstr = mstr + "<tr>";
		mstr = mstr + "<td bgcolor=#ffffff valign=top><EMBED width=640 height=360 id=objF type=application/x-shockwave-flash src=player.swf flashvars='file="+mp4path+".mp4&amp;type=http&amp;image="+imgpath+".jpg&amp;repeat=list&amp;bufferlength=1&amp;volume=100&amp;autostart=0&amp;controlbar=bottom&amp;displayclick=play&amp;logo.position=top-left' allowfullscreen='true' allowscriptaccess='always' bgcolor='#000000' wmode='transparent'></EMBED></td>";
		mstr = mstr + "  </tr>";
		mstr = mstr + "</table>";
		document.getElementById("videocnt").innerHTML = mstr
	}
	

}

//swf播放函数
function playswf(zid){
	jsqplay(true);
	tpath = "txt/" + zid + ".swf";
	var ptr = "<table width='675' height='430' cellpadding='0' cellspacing='1' bgcolor='#eceaea'>";
	ptr = ptr + "<tr>";
	ptr = ptr + "<td valign=top><object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width='691' height='428' id='123'  align='middle'><param name='allowScriptAccess' value='always' /><param name='movie' value="+tpath+"><param name='quality' value='high'><param name='wmode' value='transparent' /><param name='wmode' value='opaque'><embed src="+tpath+" name='123' quality='high' allowScriptAccess='always'  swLiveConnect='true' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash'  width='691' height='428' wmode='transparent'></embed></object></td>";
	ptr = ptr + "  </tr>";
	ptr = ptr + "</table>";
	document.getElementById("videocnt").innerHTML = ptr;
}

//文本显示函数
function showword(zid){
	jsqplay(true);
	document.getElementById("videocnt").innerHTML="<iframe name=myframe id=myframe width=693 height=430 frameborder=0 border=0 scrolling=auto src='txt/"+zid+".html'>";
}

//下载函数
function playdown(zid,downtxt){
	jsqplay(true);
	document.getElementById("videocnt").innerHTML="<table width='656' height='377' bgcolor='#ffffff'><tr><td valign='middle' align='center'><a href=txt/"+zid+".zip target=_blank style='color:#000000; font-size:12px;'><img src=images/down.png width=180px height=180px><br/>下载："+ downtxt +"</a></td></tr></table>"
}



//---------------计时器相关begin---------------
function getSWF( swfID ) {
if (window.document[ swfID ]) {
	return window.document[ swfID ];
} else if (navigator.appName.indexOf("Microsoft") == -1) {
	if (document.embeds && document.embeds[ swfID ]) {
	return document.embeds[ swfID ];
	}
} else {
	return document.getElementById( swfID );
	}
}

var videovid;
var objectid;

//播放器界面元素初始化时
function on_cc_player_init( vid, objectID ){
	videovid=vid;
	objectid=objectID;
	var ccplayer = getSWF( objectID );
	var config = {};
	ccplayer.setConfig(config);
}

//开始播放
function on_spark_player_start(){
	jsqplay(true);
}

//暂停播放
function on_spark_player_pause(){
	jsqplay(false);
}

//恢复播放
function on_spark_player_resume(){
	jsqplay(true);
}

//结束播放
function on_spark_player_stop(){
	jsqplay(false);
}

//设置页面加载完成后是否开始计时
var videoifplay=true;

//计时器回调函数
function jsqplay(videoifplay){
	changeVideoFlag(videoifplay)
}

//与平台交互的函数
function changeVideoFlag(videoifplay) {
	var ifr = document.getElementById('iframeRight');
	if(ifr){
		//iframe嵌套添加成功
		var targetOrigin = '*';
		if(typeof(videoifplay)=="undefined"){
			//未设置videoifplay跳过不处理
		}else{
			//设置videoifplay执行
			var func = {name:"callParentFun",value:videoifplay};
			var str
			if(typeof(JSON)=="undefined"){
				//当浏览器不支持JSON时,如IE7,则使用此方法将JSON对象转化为字符串
				str = "'name':"+"'"+func.name+"','value':"+func.value
				str = "{" + str +"}";
			}else{
				//当浏览器支持JSON时,则使用此方法将JSON对象转化为字符串
				str = JSON.stringify(func);
			}
			ifr.contentWindow.postMessage(str, targetOrigin);
		}
	}
}
//---------------计时器相关end---------------