$(document).ready(function() {
	createGrid(10);

});

function createGrid(size) {
	for (i=0; i<size; i++) {
		for (j=0; j<size; j++) {
			$(".container").append($("<div class=\"cell\"><div>"));
		}	
	}
	var dim = Math.round(600/size);
	$(".container").css({"height" : (dim * size) + "px", "width" : (dim * size) + "px"});
	$(".cell").css({"height": dim +"px","width": dim +"px"});
	//alert("cells = " + $(".cell").length);
	$(".cell").on('mouseenter', function() {
		$(this).css('background-color','black');
	});
};

function newGrid() {
	var n = prompt("Enter new grid size",1)
	if (n !== '0' && n !== null) {
		$(".container").empty();
		createGrid(n);
		return;
	} else if (n === null) {
		alert("Cancelled!");
		return;
	} else if (n === '0') {
		alert("Cannot create grid of 0!");
		return;
	}
};