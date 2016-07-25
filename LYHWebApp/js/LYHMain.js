(function() {
		window.newsCell_tmpl = {
			//创建item魔板
			itemTmpl: function(obj) {
				var tmpl = '<li class="mui-table-view-cell mui-media">'
				'<a href="javascript:;">'
				'<img class="mui-media-object mui-pull-left" src="http://placehold.it/40x30">'
				'<div class="mui-media-body">'
				'肺癌（title)'
				'<p class="mui-ellipsis">这是肺癌的sunmmy；能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>'
				'<div class="LYHMark">'
				'乳腺癌'
				'</div>'
				'<div class="LYHLabelTimeCountRead">'
				'06-24 阅读30 评论9'
				'</div>'
				'</div>'
				'</a>'
				'</li>'
				return tmpl;
			},
		};