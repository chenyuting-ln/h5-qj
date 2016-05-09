$(function(){
		
    var mySwiper = new Swiper('.swiper-container',{
        paginationClickable: true,
        slidesPerView: 1,
        mode: 'vertical',
     
        onTouchEnd:function(){
        	var info = $(mySwiper.activeSlide()).find('.info');
        	var fenc= info.find('.fenc');
        	var info1 = info.find('.info1');
        	var info2 = info.find('.info2');
        	var info3 = info.find('.info3');
        	var info4 = info.find('.info4');
        	var info5 = info.find('.info5');
        	info.find('.img1').removeClass('imgfd')
        	info.find('.font1').removeClass('.fonta')
        	fenc.removeClass('ac');
        	info.find('.img2').removeClass('imgf2')
        	info.find('.font2').removeClass('opacityMove')
        		info.find('.img_lit2').removeClass('topimove')
        /*	$(".info1,.info2,.info3,.info4,.info5").css('opacity','0');
        	$('.info1').css('width','100%');*/
        	setTimeout(function(){
        		//alert(info1.find('img').attr('class'))
        		fenc.addClass('ac');
        		//alert(info1.find('img').attr('class'))
        	
        	},200);
        	setTimeout(function(){
        		//alert(info1.find('img').attr('class'))
        		info.find('.img1').addClass('imgfd');
        		//alert(info1.find('img').attr('class'))
        		info.find('.font1').addClass('fonta')
        	},200);
      
        		
        		
        	setTimeout(function(){
        		info.find('.img2').addClass('imgf2')
        		info.find('.font2').addClass('opacityMove')
        	},200);
        	setTimeout(function(){
        		info.find('.img_lit2').addClass('topimove')
        	},200);
        	setTimeout(function(){
        		info4.animate({"opacity":"1"},800);
        	},200);
        	setTimeout(function(){
        		info5.animate({"opacity":"1"},800);
        	},200);
        }
    })
    $('.press img').on('click',function(){
    	var new_html = '<div class="info">';
    	new_html += '<div class="invite"><img src="images/14-1.png" /></div>';
    	new_html += '</div>';
    	$(this).parents(".n13").css("background","url(images/14.png) center center no-repeat").html(new_html);
    	$('.invite img').on('click',function(){
        	var new_html = '<div class="share"></div>';
        	$(this).parents(".n13").removeClass('n13').addClass('foot').html(new_html);
        })
    })
   
    //
      $('.music').on('click',function(){
        if($(this).hasClass('music_d')){
            $('audio').get(0).pause();
          
            $(this).removeClass('music_d');
            $(this).attr('src','images/off.png');
            

        }else {
            $('audio').get(0).play();
            $(this).addClass('music_d');
            $(this).attr('src','images/on.png');
        }  
    })
    
   var h01=$(".fenc").width();
   var h02=h01*0.25;
      $(".fc01").css('width',h02);
     $(".fc02").css('width',h02);
			$(".fc03").css('width',h02);
      /*alert(h01)*/
    var h11=h02*1.25;
/*   alert(h11)*/
	$(".fc01").css('height',h11);
		$(".fc02").css('height',h11);
			$(".fc03").css('height',h11);
	 
     $(".ec").css({
     	'top':h02*0.9,
     	'left':-h02*0.55
     	
     });
	 $(".sc").css({
     	'top':h02*1.8,
     	'left':0
     	
     });
     var heardh =$(".head").height();
     /*alert(heardh);*/
     $(".info").css('height',heardh);
    
})

   