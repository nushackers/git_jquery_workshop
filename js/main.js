// console.log("main.js is loaded");
$(document).ready(function(){
	
	$("img").on("dblclick", function(){
		//here.
		$("img").width(200);

		$("h1").fadeOut();

		$(".booboo").slideUp();

		$("#rahul").hide();
	});

	// $("img").click(function(){
	// 	//here.
	// 	$("img").width(200);
	// });
});