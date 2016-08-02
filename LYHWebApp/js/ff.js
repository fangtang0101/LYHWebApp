//主要是方春高封装的一些 很多公用的东西（任何app都可以用的）
//1.网络请求
function ff_get(url_request, jsonData) {
	
	alert('444');
	
	//1.类型检查
	if(typeof(url_request) != "string") {
		alert("您传入的url类型不对，应该为string，请检查")
	}
	if(typeof(jsonData) != "string") {
		alert("您传入的jsonData类型不对，应该为string，请检查")
	}
	//原生的ajax的请求 ======================================		
	//1.创建request 请求对象
	var xmlhttp;
	if(window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else { // code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			//将返回的值变成json 传回去
			var data = JSON.parse(xmlhttp.responseText);
			if (typeof(data)!="object") {
				alert("返回类型出错");
				return null;
			}
			return data;
		}
	}
	xmlhttp.open("POST", url_request, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.send(jsonData);

}