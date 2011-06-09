function doFCB(){
	var pre = $("pre");
	pre.each(function(){
		var content = $(this).html().split('\n'); //take it line by line
		var html = $("<div class='fcb-pre'></div>");
		for(var i=0;i<content.length;i++){
			var cl = content[i];
			var comment = /\/\/(.*)/i;
			var c = comment.test(cl);
			var span = $("<span class='line'>" + cl.replace(comment, "") + "</span>");

			if(c){ //we have a comment
				var comm = comment.exec(cl);
				var cspan = $("<span class='comment'><span class='c'>" + comm[1] + "</span></span>").hover(
						function(){ $(this).parent('span').addClass('on'); }, 
						function(){ $(this).parent('span').removeClass('on'); }
					);
				cspan.append("<span class='spacer'>?</span>");
				span.append(cspan);
			}
			html.append(span);
		}
		$("#after").after(html);
		//console.log(html.html());
	});
}
