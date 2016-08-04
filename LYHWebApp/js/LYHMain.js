(function() {
	window.newsCell_tmpl = {
		//点击订阅 推荐 公开课 病例
		onClickChnanal: function(stringChannal) {
			if (typeof(stringChannal)!="string") {
				return;
			}
			if (stringChannal.length < 1) {
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