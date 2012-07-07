// JavaScript Document

$(document).ready(function() {

	$('#menuu1').hover(function(e) {
		if($('#header').hasClass("on"))
		{ 
			if($('#menuu1').hasClass("n"))
			{ 
				//$('#panel').animate({opacity:0},"fast");
				 setTimeout(function() 
		{ReplaceContentInContainer('panel','This is sympo');},300);
				 $('#panel').animate({opacity:1},"slow");
			 	 $('#menuu4').removeClass("y").addClass("n");
				 $('#menuu2').removeClass("y").addClass("n");
				 $('#menuu3').removeClass("y").addClass("n");
				 $('#menuu1').removeClass("n").addClass("y");
			}
		}
    });
	
		$('#menuu2').hover(function(e) {
		if($('#header').hasClass("on"))
		{ 
			if($('#menuu2').hasClass("n"))
			{ 
				//$('#panel').animate({opacity:0},"fast");
				 setTimeout(function() 
		{ReplaceContentInContainer('panel','This is WORKSHOPS.');},300);
				 $('#panel').animate({opacity:1},"slow");
			 	 $('#menuu4').removeClass("y").addClass("n");
				 $('#menuu1').removeClass("y").addClass("n");
				 $('#menuu3').removeClass("y").addClass("n");
				 $('#menuu2').removeClass("n").addClass("y");
			}
		}
    });	
	
	$('#menuu3').hover(function(e) {
		if($('#header').hasClass("on"))
		{ 
			if($('#menuu3').hasClass("n"))
			{ 
				//$('#panel').animate({opacity:0},"fast");
				 setTimeout(function() 
		{ReplaceContentInContainer('panel','This is CONFERENCES.');},300);
				 $('#panel').animate({opacity:1},"slow");
			 	 $('#menuu4').removeClass("y").addClass("n");
				 $('#menuu1').removeClass("y").addClass("n");
				 $('#menuu2').removeClass("y").addClass("n");
				 $('#menuu3').removeClass("n").addClass("y");
			}
		}
    });
	
	$('#menuu4').hover(function(e) {
		if($('#header').hasClass("on"))
		{ 
			if($('#menuu4').hasClass("n"))
			{ 
				//$('#panel').animate({opacity:0},"fast");
				 setTimeout(function() 
		{ReplaceContentInContainer('panel','This is CULTURALS.');},300);
				 $('#panel').animate({opacity:1},"slow");
			 	 $('#menuu2').removeClass("y").addClass("n");
				 $('#menuu1').removeClass("y").addClass("n");
				 $('#menuu3').removeClass("y").addClass("n");
				 $('#menuu4').removeClass("n").addClass("y");
			}
		}
    });
	
	
	
	
	$('#menuu1').click(function(e) {
		 if($('#header').hasClass("off"))
		{
			$('#panel').slideToggle("slow"); 
			 ReplaceContentInContainer('panel','This is <a href="#">Symposiums</a>');
			
		  $('#header').removeClass("off").addClass("on"); 
					  $('#menuu2').removeClass("n").addClass("y");
		}
		else
		{
			
			$('#panel').slideToggle("slow");
				 $('#menuu1').removeClass("y").addClass("n");
				 $('#menuu2').removeClass("y").addClass("n");
				 $('#menuu3').removeClass("y").addClass("n");
				 $('#menuu4').removeClass("y").addClass("n");	 
			 $('#header').removeClass("on").addClass("off");
		
		}
    });
	
		$('#menuu2').click(function(e) {
		 if($('#header').hasClass("off"))
		{
			$('#panel').slideToggle("slow"); 
			 ReplaceContentInContainer('panel','This is <a href="#">Workshops.</a>');
		
		
		
		  $('#header').removeClass("off").addClass("on"); 
					  $('#menuu2').removeClass("n").addClass("y");
		}
		else
		{
			
			$('#panel').slideToggle("slow");
				 $('#menuu1').removeClass("y").addClass("n");
				 $('#menuu2').removeClass("y").addClass("n");
				 $('#menuu3').removeClass("y").addClass("n");
				 $('#menuu4').removeClass("y").addClass("n");	 
			 $('#header').removeClass("on").addClass("off");
		
		}
    });
	
		$('#menuu3').click(function(e) {
		 if($('#header').hasClass("off"))
		{ 
			$('#panel').slideToggle("slow"); 
			ReplaceContentInContainer('panel','This is Conferences.'); 
		
			$('#header').removeClass("off").addClass("on");
			 $('#menuu3').removeClass("n").addClass("y");
	    }
		else
		{
			
			$('#panel').slideToggle("slow");
				 $('#menuu1').removeClass("y").addClass("n");
				 $('#menuu2').removeClass("y").addClass("n");
				 $('#menuu3').removeClass("y").addClass("n");
				 $('#menuu4').removeClass("y").addClass("n");
				$('#header').removeClass("on").addClass("off");
		
		}
    });
	
		$('#menuu4').click(function(e) {
		 if($('#header').hasClass("off"))
		{ 
		$('#panel').slideToggle("slow"); 
			ReplaceContentInContainer('panel','This is Culturals.');
	
		  	$('#header').removeClass("off").addClass("on");
			$('#menuu4').removeClass("n").addClass("y");
	 	 }
		else
		{
			
			 $('#panel').slideToggle("slow");
				 $('#menuu1').removeClass("y").addClass("n");
				 $('#menuu2').removeClass("y").addClass("n");
				 $('#menuu3').removeClass("y").addClass("n");
				 $('#menuu4').removeClass("y").addClass("n");
				$('#header').removeClass("on").addClass("off");
		
		}
    });
	
	$('#about').click(function(e) {
		 if($('#header').hasClass("on"))
		 { $('#panel').slideToggle("slow");
				 $('#menuu1').removeClass("y").addClass("n");
				 $('#menuu2').removeClass("y").addClass("n");
				 $('#menuu3').removeClass("y").addClass("n");
				 $('#menuu4').removeClass("y").addClass("n");
				$('#header').removeClass("on").addClass("off");		 
		}
		 
	    });
});