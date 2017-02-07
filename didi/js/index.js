$(function() {
    // 音乐按钮
   function audio(){
   	var audio = $('#media')[0];
   $('.play').click(function() {
        $('.stop').css({ 'display': 'block' });
        $('.play').css({ 'display': 'none' });
       	audio.pause();
    })
    $('.stop').click(function() {
        $('.play').css({ 'display': 'block' });
        $('.stop').css({ 'display': 'none' });

        audio.play();

    }); 
}

audio();
    // 翻页按钮
    var count = 0;

    $('.downBtn').click(function() {
        // 第一页
        if (count == 0) {
            count++;
            $('.floor').hide();
            $('.upBtn').show();
            $('.bgBox').addClass('bgBox1');//背景同比扩大
            $('.earthLines').eq(1).addClass('earthRowani');
            $('.downBtn').css({ 'top': '14.5rem' }); //向下按钮的高度
            $('.earthBd').css({ 'display': 'block' }); //橘黄色的框框
            $('.earthLines').addClass('earthLines11'); //橘黄色的border
            $('#floor2').css({ 'display': 'block', "zIndex": "6" }); //第二页的中间的文字
            $('#floor2>h2').show();
            $('#floor4>h2').hide();
        }
        // 第二次点击
        else if (count == 1) {
            count++;
            $('.page1>.bg>.earth').css({ 'width': '12rem', 'height': '12rem' }) //地球变大第三张时
            $('.earthBd').css({ 'display': 'none' }); //橘黄色的框框消消失
            $('.earthLines').removeClass('earthLines11'); //橘黄色的border消失
            $('#floor2').css({ 'display': 'none', "zIndex": "0" }); //第二页的中间的文字消失
            // 显示第三张的内容
            $('#floor3').css({ 'display': 'block' }); //, "zIndex": "7"
            $('#floor3>h2').show();
            $('#floor3 .floor3Ul').css({ 'display': 'block' });
        } else if (count == 2) {
            count++;
            $('#floor3>h2').css({ 'display': 'none' });
            $('.floor3Ul').css({ 'display': 'none' });
            $('#floor4>h2').show();
            $('#floor4').show();
            $('#floor4>.floor3Ul').show();
        } else if (count == 3) {
            count++;
            $('#floor4').hide();
            $('#floor4>.floor3Ul').hide();
            $('#floor5').show();
            $('#floor5>h2').show();
        } else if (count == 4) {
            count++;
            $('#floor5').hide();
            $('#floor6').show();
            $('#floor6>h2').show();       
        }
        else if(count==5){
        	count++;
        	$('#floor6').hide();
        	$('#floor7').show();
        	$('.page1>.bg>.earth').css({ 'width': '8.453rem', 'height': '8.453rem' })//地球变小
        	$('.bgBox').removeClass('bgBox1');//背景同比缩小
      }
    });
/*向上按钮*/
    $('.upBtn').click(function() {
        // 第一次点击
        if (count == 1) {
            count--;
            $('#floor11').show();
            $('#floor2').hide();
            $('#floor2>h2').hide();
            $('#floor3').hide();
            $('.page1>.bg>.earth').css({ 'width': '8.453rem', 'height': '8.453rem' }) //地球变小第三张时$('.earth')
           $('.downBtn').css({ 'top': '12.9rem' }); //向下的按钮
        }
        // 第二次点击
        else if (count == 2) {
            count--;
            $('#floor2').show();
            $('#floor11').hide();
            $('.bgBox').removeClass('bgBox1');
            $('.earthLines').eq(1).removeClass('earthRowani');
            $('.downBtn').css({ 'top': '14.5rem' }); //向下的按钮
            $('.earthBd').css({ 'display': 'block' }); //橘黄色的框框
            $('.earthLines').addClass('earthLines11'); //橘黄色的border
            $('#floor3').hide();
            $('#floor3>h2').hide();
        }

        // 第三次点击
        else if (count == 3) {
            count--;
            $('#floor3 h2').show();
            $('#floor3 .floor3Ul').show();
            $('#floor4').hide();
            $('#floor4>h2').hide();
            $('#floor4 .floor3Ul').hide();
        }
        // 第四次点击
        else if (count == 4) {
            count--;
            $('#floor4').show();
            $('#floor4 .floor3Ul').show();
            $('#floor5').hide();
            $('#floor5>h2').hide();
        }
        // 第五次点击
        else if (count == 5) {
            count--;
            $('#floor6').hide();
            $('#floor6>h2').hide();
            $('#floor5').show();
        } 
        else if(count==6){
        	count--;
        	$('#floor6').show();
        	$('#floor7').hide();
        	$('.page1>.bg>.earth').css({'width':'12rem','height':'12rem'})//地球变大
        	$('.bgBox').addClass('bgBox1');//背景同比缩小
        }
        	else if (count == 0) {
            count--;
            if (count < 0) {
                count = 0;
            }

        }
    })

});
