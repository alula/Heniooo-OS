setTimeout(function(){
	$(".load").fadeOut("slow");
	$(".systemScreen").fadeIn("slow");
}, 2500);

$i = 100;
setInterval(function(){
			$(".loadLogo").css("opacity", "0."+$i++);

}, 5);

$(".beltStartButton").on('click', function(){
	$(".menuStart").fadeToggle("fast");
	return false;
});

$(".menuStart").on('click', function(){
	return false;
});

$("body").on('click', function(){
	$(".menuStart").fadeOut("fast");
});

$( ".gridItem" ).draggable();
