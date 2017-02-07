$(document).ready(function() {

    var mySwiper = new Swiper('.swiper-container', {
                direction: 'vertical',
                mousewheelControl: true,
                watchSlidesProgress: true,
                mousewheelForceToAxis: true,

                // 如果需要分页器
                pagination: '.swiper-pagination',
                // 点击分页器的指示点分页器会控制Swiper切换
                paginationClickable: true,

                // 如果需要滚动条
                // scrollbar: '.swiper-scrollbar',
                onSlideChangeEnd: function(swiper) {

                   	var count=swiper.activeIndex;


                   	if(count==0){
                   		
                   		// a运动
                   		$('.a1-img1').animate({ 'right': '2.188rem' }, 500, function() {
                        	$('.a1-img2').animate({ 'left': '2.5rem' }, function() {
                            	$('.a1-img3').animate({ 'left': '1.562rem' }, function() {
                                	$('.a1-img2').animate({ 'left': '1.219rem' })
                            	})
                       		})
                    	})
                   				// 还原b
                    			$('.b1-img1').css({'left':'0.638rem'})
	              				$('.b1-img2').animate({'right':'0.562rem'})
	              				$('.b1-img3').animate({'bottom':'1.044rem'})

                   	}else if(count==1){
                   		// b运动
                   		  	$('.b1-img1').animate({'left':'0.938rem'},500,function(){
	              				$('.b1-img2').animate({'right':'1.562rem'},function(){
	              					$('.b1-img3').animate({'bottom':'2.344rem'})
              					})
              				})

              				// 还原a
          				   $('.a1-img1').css({ 'right': '1.25rem' })
                   		   $('.a1-img2').css({ 'left': '1.0rem' })
                           $('.a1-img3').css({ 'left': '1.0rem' })
                           // 还原c
						 	      	$('.c1-img1').animate({'right':'2.038rem'})
          						$('.c1-img2').animate({'bottom':'2.5rem'})
          						$('.c1-img3').animate({'left':'2.0rem'})
                   	
                   	}else if(count==2){
                   		// c运动
               			 $('.c1-img1').animate({'right':'2.438rem'},500,function(){
          						$('.c1-img2').animate({'bottom':'4.688rem'},function(){
          							$('.c1-img3').animate({'left':'2.5rem'})
          						})
         				 })
         				 // 还原b
         				 		$('.b1-img1').css({'left':'0.638rem'})
	              				$('.b1-img2').animate({'right':'0.562rem'})
	              				$('.b1-img3').animate({'bottom':'1.044rem'})
	              	// 还原d

                   		$('.d1-img4').hide().css({'left':'0rem'})
          						$('.d1-img1').hide().css({'right':'1.062rem'})
          						$('.d1-img2').hide().removeClass('d1-img2-d');
          						$('.d1-img3').hide().removeClass('d1-img3-d');
          						$('.d1-img5').hide().css({'bottom':'2.525rem'})

						

                   	}else if(count==3){
                   		// d运动
                      $('.d1-img4').show().animate({'left':'0.625rem'},600,function(){
          						$('.d1-img1').show().animate({'right':'1.562rem'},function(){
          						$('.d1-img2').show().addClass('d1-img2-d');
          						$('.d1-img3').show().addClass('d1-img3-d');
          						$('.d1-img5').show().animate({'bottom':'3.125rem'})
          						})
          						}); 



						        // 还原c
						 		     $('.c1-img1').animate({'right':'2.038rem'})
          						$('.c1-img2').animate({'bottom':'2.5rem'})
          						$('.c1-img3').animate({'left':'2.0rem'})
          				// 还原e
                   		$('.e1-img1').hide().css({'right':'0.406rem'})
      						    $('.e1-img2').hide().css({'left':'1.25rem'})
      			        	$('.e1-img3').hide().css({'bottom':'2.125rem'});

                   	}else if(count==4){
                   			// e运动
                   		$('.e1-img1').show().animate({'right':'1.406rem'},500,function(){
        						  $('.e1-img2').show().animate({'left':'2.25rem'},function(){
					        		$('.e1-img3').show().animate({'bottom':'3.125rem'});
  					        	});
  				            })
                   		// 还原d

                   		$('.d1-img4').hide().css({'left':'0rem'})
          						$('.d1-img1').hide().css({'right':'1.062rem'})
          						$('.d1-img2').hide().removeClass('d1-img2-d');
          						$('.d1-img3').hide().removeClass('d1-img3-d');
          						$('.d1-img5').hide().css({'bottom':'2.525rem'})
          						// 还原f
                   		$('.f1-img1').hide().css({'top':'1.188rem'})
      		        		$('.f1-img2').hide().removeClass('f1img2')
      		        		$('.f1-img3').hide().css({'right':'0.25rem'})

                   	}else if(count==5){
                   		// f运动
                       $('.f1-img1').show().animate({'top':'2.188rem'},600,function(){
        		        		$('.f1-img2').show().addClass('f1img2')
        		        		$('.f1-img3').show().animate({'right':'1.25rem'})
                				})

                   		// 还原e
                   		$('.e1-img1').hide().css({'right':'0.406rem'})
						          $('.e1-img2').hide().css({'left':'1.25rem'})
			        	      $('.e1-img3').hide().css({'bottom':'2.125rem'});
					        
				       	      // 还原g
                   		 $('.g1-img1').hide().removeClass('g1img1');
        				        $('.g1-img2').hide().css({'bottom':'1.125rem'});

                   	}else if(count==6){
                   		// g运动
                   		 $('.g1-img1').show().addClass('g1img1');
        				       $('.g1-img2').show().animate({'bottom':'3.125rem'},300);

                   		// 还原f
                   		$('.f1-img1').hide().css({'top':'1.188rem'})
      		        		$('.f1-img2').hide().removeClass('f1img2')
      		        		$('.f1-img3').hide().css({'right':'0.25rem'})
		        	
        			
                   	}else if(count==7){
                   		// h运动
                   		$('.h1-img1').show().addClass('h1img1');
      				        $('.h1-img2').show().animate({'top':'5.781rem'},500,function(){
      				        	$('.h1-img3').show().animate({'bottom':'3.125rem'})
      				        })

                   		// 还原g
                   		 $('.g1-img1').hide().removeClass('g1img1');
        				       $('.g1-img2').hide().css({'bottom':'1.125rem'});

            				 // 还原i
            				   $('.i1-img1').hide().removeClass('i1img1');
    					        $('.i1-img2').hide().css({'left':'1.188rem'})
    					        	$('.i1-img3').hide().css({'right':'2.438rem'})
					        		$('.i1-img4').hide().css({'left':'0.562rem'});
					        		$('.i1-img5').hide().css({'right':'0.562rem'});
					       
                   	}else if(count==8){
                   		// i运动
                   		  $('.i1-img1').show().addClass('i1img1');
    					        $('.i1-img2').show().animate({'left':'2.188rem'},500,function(){
    					        	$('.i1-img3').show().animate({'right':'3.438rem'},function(){
					        		$('.i1-img4').show().animate({'left':'1.562rem'});
					        		$('.i1-img5').show().animate({'right':'1.562rem'});
					        	})
					          })


                   		// 还原h
                   		$('.h1-img1').hide().removeClass('h1img1');
      				        $('.h1-img2').hide().css({'top':'4.781rem'})
      				        $('.h1-img3').hide().css({'bottom':'2.125rem'})
				        
                   	}
       			 }

    });

    			// slide1
    				// a运动
                   		$('.a1-img1').animate({ 'right': '2.188rem' }, 500, function() {
                        	$('.a1-img2').animate({ 'left': '2.5rem' }, function() {
                            	$('.a1-img3').animate({ 'left': '1.562rem' }, function() {
                                	$('.a1-img2').animate({ 'left': '1.219rem' })
                            	})
                       		})
                    	})
                
	
	$('.lingsheng').addClass('lingsheng2');
    $('.lingsheng').click(function(){
       var Dio=$('#auDio')[0];
      if(Dio.paused){
          Dio.play();
          $('.lingsheng').addClass('lingsheng2');
      }else{
          Dio.pause();
          $('.lingsheng').removeClass('lingsheng2');
      }
         
         

         

    })


})
