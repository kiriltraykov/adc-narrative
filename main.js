function scrollToTop() {
    $('html, body').animate({
        scrollTop: 0
    }, 400);
}
``
$(document).ready(function(){
	
	
    $('.chapter').removeClass('active');
    $('#page0').show();
	$('#page1').hide();
	$('#page2').hide();
	$('#page3').hide();
	$('#page4').hide();
	$('#page5').hide();
	$('#page6').hide();
	$('#page7').hide();
	$('#page8').hide();
	$('#page9').hide();
	$('#page10').hide();
	$('#page11').hide();
	$('#backToTop').hide();
	
	$('#backToStart').on('click', function(){
			scrollToTop();
		    $('.chapter').removeClass('active');
            $(this).addClass('active');
	        $('#page0').show();
		    $('#page1').hide();
		    $('#page2').hide();
		    $('#page3').hide();
		    $('#page4').hide();
		    $('#page5').hide();
		    $('#page6').hide();
		    $('#page7').hide();
		    $('#page8').hide();
		    $('#page9').hide();
		    $('#page10').hide();
		    $('#page11').hide();
			$('#backToTop').hide();
				 }); 
	
	$('#chapter1').on('click', function(){
		    scrollToTop();
			$('.chapter').removeClass('active');
            $(this).addClass('active');
	        $('#page0').hide();
		 	$('#page1').show();
			$('#page2').hide();
			$('#page3').hide();
			$('#page4').hide();
			$('#page5').hide();
			$('#page6').hide();
			$('#page7').hide();
			$('#page8').hide();
			$('#page9').hide();
			$('#page10').hide();
			$('#page11').hide();
			$('#backToTop').show();
				 }); 
	
		
	$('#chapter2').on('click', function(){
		    scrollToTop();
			$('.chapter').removeClass('active');
            $(this).addClass('active');
	        $('#page0').hide();
		 	$('#page1').hide();
			$('#page2').show();
			$('#page3').hide();
			$('#page4').hide();
			$('#page5').hide();
			$('#page6').hide();
			$('#page7').hide();
			$('#page8').hide();
			$('#page9').hide();
			$('#page10').hide();
			$('#page11').hide();
			$('#backToTop').show();
				 }); 
	
		
	$('#chapter3').on('click', function(){
		    scrollToTop();
			$('.chapter').removeClass('active');
            $(this).addClass('active');
		    $('.buttonstyle').removeClass('active3');
            $(this).addClass('active3');
	        $('#page0').hide();
		 	$('#page1').hide();
			$('#page2').hide();
			$('#page3').show();
			$('#page4').hide();
			$('#page5').hide();
			$('#page6').hide();
			$('#page7').hide();
			$('#page8').hide();
			$('#page9').hide();
			$('#page10').hide();
			$('#page11').hide();
		    $('#section31').hide();
			$('#section32').hide();
			$('#section33').hide();
			$('#section34').hide();
		    $('#backToTop').hide();
	
		$('#page31').on('click', function(){
			scrollToTop();
			$('.buttonstyle').removeClass('active3');
            $(this).addClass('active3');
	        $('#section31').show();
			$('#section32').hide();
			$('#section33').hide();
			$('#section34').hide();
			$('#backToTop').show();
				 }); 
		
		$('#page32').on('click', function(){
			scrollToTop();
			$('.buttonstyle').removeClass('active3');
            $(this).addClass('active3');
	        $('#section31').hide();
			$('#section32').show();
			$('#section33').hide();
			$('#section34').hide();
			$('#backToTop').show();
				 });
		
		$('#page33').on('click', function(){
			scrollToTop();
			$('.buttonstyle').removeClass('active3');
            $(this).addClass('active3');
	        $('#section31').hide();
			$('#section32').hide();
			$('#section33').show();
			$('#section34').hide();
			$('#backToTop').show();
				 });
		
		$('#page34').on('click', function(){
			scrollToTop();
			$('.buttonstyle').removeClass('active3');
            $(this).addClass('active3');
	        $('#section31').hide();
			$('#section32').hide();
			$('#section33').hide();
			$('#section34').show();
			$('#backToTop').show();
				 });
	
	}); 
	
		
	$('#chapter4').on('click', function(){
		    scrollToTop();
			$('.chapter').removeClass('active');
            $(this).addClass('active');
		    $('.buttonstyle').removeClass('active4');
            $(this).addClass('active4');
	        $('#page0').hide();
		 	$('#page1').hide();
			$('#page2').hide();
			$('#page3').hide();
			$('#page4').show();
			$('#page5').hide();
			$('#page6').hide();
			$('#page7').hide();
			$('#page8').hide();
			$('#page9').hide();
			$('#page10').hide();
			$('#page11').hide();
		    $('#section41').hide();
			$('#section42').hide();
			$('#section43').hide();
			$('#backToTop').hide();
		
		$('#page41').on('click', function(){
			scrollToTop();
			$('.buttonstyle').removeClass('active4');
            $(this).addClass('active4');
	        $('#section41').show();
			$('#section42').hide();
			$('#section43').hide();
			$('#backToTop').show();
				 }); 
		
		$('#page42').on('click', function(){
			scrollToTop();
			$('.buttonstyle').removeClass('active4');
            $(this).addClass('active4');
	        $('#section41').hide();
			$('#section42').show();
			$('#section43').hide();
			$('#backToTop').show();
				 });
		
		$('#page43').on('click', function(){
			scrollToTop();
			$('.buttonstyle').removeClass('active4');
            $(this).addClass('active4');
	        $('#section41').hide();
			$('#section42').hide();
			$('#section43').show();
			$('#backToTop').show();
				 });
				 }); 
	
		
	$('#chapter5').on('click', function(){
		    scrollToTop();
			$('.chapter').removeClass('active');
            $(this).addClass('active');
		    $('.buttonstyle').removeClass('active5');
            $(this).addClass('active5');
	        $('#page0').hide();
		 	$('#page1').hide();
			$('#page2').hide();
			$('#page3').hide();
			$('#page4').hide();
			$('#page5').show();
			$('#page6').hide();
			$('#page7').hide();
			$('#page8').hide();
			$('#page9').hide();
			$('#page10').hide();
			$('#page11').hide();
		    $('#section51').hide();
			$('#section52').hide();
			$('#section53').hide();
			$('#backToTop').hide();
		
		$('#page51').on('click', function(){
			scrollToTop();
			$('.buttonstyle').removeClass('active5');
            $(this).addClass('active5');
	        $('#section51').show();
			$('#section52').hide();
			$('#section53').hide();
			$('#backToTop').show();
				 }); 
		
		$('#page52').on('click', function(){
			scrollToTop();
			$('.buttonstyle').removeClass('active5');
            $(this).addClass('active5');
	        $('#section51').hide();
			$('#section52').show();
			$('#section53').hide();
			$('#backToTop').show();
				 });
		
		$('#page53').on('click', function(){
			scrollToTop();
			$('.buttonstyle').removeClass('active5');
            $(this).addClass('active5');
	        $('#section51').hide();
			$('#section52').hide();
			$('#section53').show();
			$('#backToTop').show();
				 });
				 });  

	
	$('#chapter6').on('click', function(){
		    scrollToTop();
			$('.chapter').removeClass('active');
            $(this).addClass('active');
		    $('.buttonstyle').removeClass('active6');
            $(this).addClass('active6');
	        $('#page0').hide();
		 	$('#page1').hide();
			$('#page2').hide();
			$('#page3').hide();
			$('#page4').hide();
			$('#page5').hide();
			$('#page6').show();
			$('#page7').hide();
			$('#page8').hide();
			$('#page9').hide();
			$('#page10').hide();
			$('#page11').hide();
		    $('#section61').hide();
			$('#section62').hide();
			$('#backToTop').hide();
		
		$('#page61').on('click', function(){
			scrollToTop();
			$('.buttonstyle').removeClass('active6');
            $(this).addClass('active6');
	        $('#section61').show();
			$('#section62').hide();
			$('#backToTop').show();
				 }); 
		
		$('#page62').on('click', function(){
			scrollToTop();
			$('.buttonstyle').removeClass('active6');
            $(this).addClass('active6');
	        $('#section61').hide();
			$('#section62').show();
			$('#backToTop').show();
				 });
				 }); 
	
	$('#chapter7').on('click', function(){
		    scrollToTop();
			$('.chapter').removeClass('active');
            $(this).addClass('active');
			$('.buttonstyle').removeClass('active7');
            $(this).addClass('active7');
	        $('#page0').hide();
		 	$('#page1').hide();
			$('#page2').hide();
			$('#page3').hide();
			$('#page4').hide();
			$('#page5').hide();
			$('#page6').hide();
			$('#page7').show();
			$('#page8').hide();
			$('#page9').hide();
			$('#page10').hide();
			$('#page11').hide();
			$('#section71').hide();
			$('#section72').hide();
			$('#backToTop').hide();
		
			$('#page71').on('click', function(){
			scrollToTop();
			$('.buttonstyle').removeClass('active7');
            $(this).addClass('active7');
	        $('#section71').show();
			$('#section72').hide();
			$('#backToTop').show();
				 }); 
		
			$('#page72').on('click', function(){
			scrollToTop();
			$('.buttonstyle').removeClass('active7');
            $(this).addClass('active7');
	        $('#section71').hide();
			$('#section72').show();
			$('#backToTop').show();
				 });
				 }); 
	
	$('#chapter8').on('click', function(){
		    scrollToTop();
			$('.chapter').removeClass('active');
            $(this).addClass('active');
	        $('#page0').hide();
		 	$('#page1').hide();
			$('#page2').hide();
			$('#page3').hide();
			$('#page4').hide();
			$('#page5').hide();
			$('#page6').hide();
			$('#page7').hide();
			$('#page8').show();
			$('#page9').hide();
			$('#page10').hide();
			$('#page11').hide();
			$('#backToTop').show();
				 }); 
	
		
	$('#chapter9').on('click', function(){
		    scrollToTop();
		 	$('.chapter').removeClass('active');
            $(this).addClass('active');
	        $('#page0').hide();
		 	$('#page1').hide();
			$('#page2').hide();
			$('#page3').hide();
			$('#page4').hide();
			$('#page5').hide();
			$('#page6').hide();
			$('#page7').hide();
			$('#page8').hide();
			$('#page9').show();
			$('#page10').hide();
			$('#page11').hide();
			$('#backToTop').show();
				 }); 
	
			
	$('#chapter10').on('click', function(){
		    scrollToTop();
			$('.chapter').removeClass('active');
            $(this).addClass('active');
	        $('#page0').hide();
		 	$('#page1').hide();
			$('#page2').hide();
			$('#page3').hide();
			$('#page4').hide();
			$('#page5').hide();
			$('#page6').hide();
			$('#page7').hide();
			$('#page8').hide();
			$('#page9').hide();
			$('#page10').show();
			$('#page11').hide();
			$('#backToTop').hide();
				 }); 
	
		
	$('#chapter11').on('click', function(){
		    scrollToTop();
			$('.chapter').removeClass('active');
            $(this).addClass('active');
	        $('#page0').hide();
		 	$('#page1').hide();
			$('#page2').hide();
			$('#page3').hide();
			$('#page4').hide();
			$('#page5').hide();
			$('#page6').hide();
			$('#page7').hide();
			$('#page8').hide();
			$('#page9').hide();
			$('#page10').hide();
			$('#page11').show();
			$('#backToTop').show();
				 }); 
	
	$('#backToTop').on('click', function(){
    $('html, body').animate({
        scrollTop: 0
    }, 400);
});
	
	
   });

             