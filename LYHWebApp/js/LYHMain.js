(function() {
	//数据请求的相关模板
	window.request_temp = {

		creatRequestDataForNews: function(pageIndex, pageSize) {
			if (typeof(pageIndex)!="number") {
				alert('您出传入的参数pageIndex必须是number')
					return;			
			}
			
			if (typeof(pageSize)!="number") {
				alert('您出传入的参数pageSize必须是number')
					return;			
			}
			var jsonData = '{"head":{"sid":"Model:iPod touch---Version:9.0.2","extensions":[{"name":"platform","value":"iOS"}],"cver":"2.0.2","cid":"61B711D4-0087-4C94-9D7F-2632A9BC43B5"},"filters":[{"items":[{"filterId":1}],"filterGroupId": 1}],"sort":{"pageIdx":0,"pageSize":25,"startTime":1469696344.835954}}'
			return jsonData;
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
			var markCell = 'mark';
			var timeCell = '这是时间time';
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