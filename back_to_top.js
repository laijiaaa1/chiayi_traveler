$(function() {
	window.onscroll = function() {scrollFunction()};

	//判斷>100出現top
	function scrollFunction() {
	  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
	   $("#myBtn").css("display","block");
	  } else {
	   $("#myBtn").css("display","none");
	  }
	}

	//點擊回到頂部
	$(function(){
	    $("#myBtn").click(function(e){
	        e.preventDefault();
	        $("html, body").animate(
	        	{"scrollTop": "0"}, 500);
	    })
	});
});