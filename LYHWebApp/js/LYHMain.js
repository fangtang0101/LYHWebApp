(function() {
	//数据请求的相关模板
	window.request_temp = {
		//推荐（综合）
		creatRequestDataForNews: function(pageIndex, pageSize) {
			if(typeof(pageIndex) != "number") {
				alert('您出传入的参数pageIndex必须是number')
				return;
			}
			if(typeof(pageSize) != "number") {
				alert('您出传入的参数pageSize必须是number')
				return;
			}
			var jsonData = {
				"head": {
					"sid": "Model:iPod touch---Version:9.0.2",
					"extensions": [{
						"name": "platform",
						"value": "iOS"
					}],
					"cver": "2.0.2",
					"cid": "61B711D4-0087-4C94-9D7F-2632A9BC43B5"
				},
				"filters": [{
					"items": [{
						"filterId": 1
					}],
					"filterGroupId": 1
				}],
				"sort": {
					"pageIdx": 0,
					"pageSize": 25,
					"startTime": 1469696344.835954
				}
			}
			jsonData.sort.pageIdx = pageIndex;
			jsonData.sort.pageSize = pageSize;
			var obj = JSON.stringify(jsonData);
			return obj;
		},
		//公开课
		creatRequestDataForNewsOfOpenClass: function(pageIndex, pageSize) {
			if(typeof(pageIndex) != "number") {
				alert('您出传入的参数pageIndex必须是number')
				return;
			}
			if(typeof(pageSize) != "number") {
				alert('您出传入的参数pageSize必须是number')
				return;
			}
			var jsonData = {
				"head": {
					"sid": "Model:iPhone---Version:9.3",
					"extensions": [{
						"name": "platform",
						"value": "iOS"
					}],
					"cver": "2.0.5",
					"cid": "03D25FDC-CFF5-44D5-9662-3C957133C23D"
				},
				"filters": [{
					"items": [{
						"filterId": 8
					}],
					"filterGroupId": 1
				}],
				"sort": {
					"pageIdx": 0,
					"pageSize": 25,
					"startTime": 1470728140.433903
				}
			}
			jsonData.sort.pageIdx = pageIndex;
			jsonData.sort.pageSize = pageSize;
			var obj = JSON.stringify(jsonData);
			return obj;
		},
		//病例
		creatRequestDataForNewsOfOfSick: function(pageIndex, pageSize) {
			if(typeof(pageIndex) != "number") {
				alert('您出传入的参数pageIndex必须是number')
				return;
			}
			if(typeof(pageSize) != "number") {
				alert('您出传入的参数pageSize必须是number')
				return;
			}
			var jsonData = {
				"head": {
					"sid": "Model:iPhone---Version:9.3",
					"extensions": [{
						"name": "platform",
						"value": "iOS"
					}],
					"cver": "2.0.5",
					"cid": "444AD7D5-23AE-4DFB-942D-B19D2A7333D9"
				},
				"filters": [{
					"items": [{
						"filterId": 10,
						"type": 1
					}],
					"filterGroupId": 1
				}],
				"sort": {
					"pageIdx": 0,
					"pageSize": 25,
					"startTime": 1470729208.550684
				}
			}
			jsonData.sort.pageIdx = pageIndex;
			jsonData.sort.pageSize = pageSize;
			var obj = JSON.stringify(jsonData);
			return obj;
		},
	};

	window.newsCell_tmpl = {
		//点击订阅 推荐 公开课 病例
		onClickChnanal: function(stringChannal) {
			if(typeof(stringChannal) != "string") {
				return;
			}
			if(stringChannal.length < 1) {
				return;
			}
		},
		//创item 模板
		itemTmpl: function(obj) {
			var imageUrl = obj.picUrl;
			var titleCell = obj.title;
			var contentCell = '这是内容';
			var markCell = 'markNull';
			var timeCell = 'time + readCount';
			//便签
			var arrayLabel = obj.labels;
			if(arrayLabel.length > 0) {
				var objLabel = arrayLabel[0];
				markCell = objLabel.name;
			}
			//时间
			var date = new Date(obj.releaseTime);
			Y = date.getFullYear() + '-';
			M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
			D = date.getDate() + ' ';		
			var dateArctile = M + D ;
			timeCell = dateArctile + '阅'+obj.readAmount ;
			var tmpl = '<ul class="mui-table-view" >' +
				'<li class="mui-table-view-cell mui-media">' +
				'<a href="javascript:;">' +
				'<img class="mui-media-object mui-pull-left" src="' + imageUrl + '">' +
				'<div class="mui-media-body">' +
				'<div>' + titleCell + '</div>' +
				'<p class="mui-ellipsis">' + contentCell + '</p>' +
				'<div class="LYHMark">' + markCell + '</div>' +
				'<div class="LYHLabelTimeCountRead">' + timeCell + '</div>' +
				'</div>' +
				'</a>' +
				'</li>' +
				'</ul>';
			return tmpl;
		},
	};
})();