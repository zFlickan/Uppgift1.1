$(document).ready(function() {

	// Checking Modernizr
	if (Modernizr.websockets){
		$("#result").html('Your browser has support for Web Sockets');
	}
	else{
		$("#result").html('Your browser does not support Web Sockets');
	}
      
	// Touch Content
	$("#touchContent").on('click', 'p', function() {
		$(this).text("This element requires Touch");
	});
	
	// Add with jQeury
	$("#footer-btn").on('click', function(){
		$("footer").removeClass("hidden");
	});
});