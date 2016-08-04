(function() {
	window.newsCell_tmpl = {
		//点击订阅 推荐 公开课 病例
		onClickChnanal: function(string) {
			alert('22');
			alert(string)
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

//点击订阅 推荐 公开课 病例

onClickChnanal: function(string) {
		alert('22');
		alert(string)
};
	(function() {
		window.my_tmpl = {

			//创建item魔板
			itemTmpl: function(obj) {
				if(obj.is_distribution == 0) {
					var distribution = '免配送费';
				} else {
					var distribution = obj.is_distribution + '元配送费';
				}

				//计算分钟
				//比如我们初始化一个配送员的时间1分钟=50米
				var i = 50;
				var distance = obj.distance;
				var p = distance / i;

				var tmpl = '<div class="wm-list-div" id_data="' + obj.id + '">' +
					'	<div class="wm-list-div-l">' +
					'		<img src="images/logo.png" alt="" />' +
					'	</div>' +
					'	<div class="wm-list-div-r">' +
					'		<div class="wm-list-div-r-o">' +
					'			<div class="wm-list-div-r-o-l">' +
					'				<h4>' + obj.title + '</h4>' +
					'			</div>' +
					'			<div class="wm-list-div-r-o-r">' +
					'				<h5><span>¥</span><span class="big-txt">' + obj.price + '</span>元起送</h5>' +
					'			</div>' +
					'		</div>' +
					'		<div class="wm-list-div-r-t">' +
					'			<div class="wm-list-div-r-t-l">' +
					'				<span class="mui-icon mui-icon-star-filled star-ys star-sctive"></span>' +
					'				<span class="mui-icon mui-icon-star-filled star-ys star-sctive"></span>' +
					'				<span class="mui-icon mui-icon-star-filled star-ys star-sctive"></span>' +
					'				<span class="mui-icon mui-icon-star-filled star-ys star-sctive"></span>' +
					'				<span class="mui-icon mui-icon-star-filled star-ys"></span>' +
					'				<span class="small-txt o-txt">4.5</span>' +
					'				<span class="small-txt">月售' + obj.buy_number + '件</span>' +
					'			</div>' +
					'			<div class="wm-list-div-r-t-r">' +
					'				<span class="small-txt">' + distribution + '</span>' +
					'			</div>' +
					'		</div>' +
					'		<div class="wm-list-div-r-tt">' +
					'			<span class="small-txt">大约' + p + '分钟</span>&nbsp;<span class="small-txt">' + obj.distance + '米</span>' +
					'		</div>' +
					'	</div>' +
					'</div>';

				return tmpl;
			},

		};

	})();