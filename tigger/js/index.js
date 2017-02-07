$(function() {
// header nav（ok）
    function nav() {
        $('.chioceLanguage').hover(function() {
            $(this).css({ "display": "block" })
        }, function() {
            $(this).slideUp();
        })
        $('.navposition>a').hover(function() {
            $('.chioceLanguage').slideDown();
        });
    }

// 轮播图
    var index = 0;
    show();
    var timer = setInterval(show, 2000);
    function show() {
        $('.slides>ul>li').eq(index).fadeIn().siblings().fadeOut();
        $('.indicator>div').eq(index).addClass('active').siblings().removeClass('active');
        // 显示动画效果
        $('.slides>ul>li').eq(index).find('.img2').show().animate({ 'bottom': '100px' }, 1000);
        $('.slides>ul>li').eq(index).find('.img1').animate({ 'top': '100px' }, 1000, function() {
             index++;
            if (index == 5) {
                index = 0;
            }
        });
            $('.slides>ul>li').eq(index).siblings().find('.img1').css({
                'top': '-130px'
            });
            $('.slides>ul>li').eq(index).siblings().find('.img2').css({
                'bottom': '-140px'
            });
    }
    $('.indicator>div').hover (function() {
        clearInterval(timer);
        index = $(this).index();
        $('.slides>ul>li').eq(index).find('.img2').show().animate({ 'bottom': '100px' }, 100);
        $('.slides>ul>li').eq(index).find('.img1').animate({ 'top': '100px' }, 100);
        // 图片
        $('.slides>ul>li').eq(index).stop(true, true).fadeIn().siblings('li').stop(true, true).fadeOut();
        // 指示符的运动情况
        $('.indicator>div').eq(index).addClass('active').siblings().removeClass('active');
    },function(){
        timer = setInterval(show, 2000);
         $('.slides>ul>li').eq(index).siblings().find('.img1').css({
            'top': '-130px'
        });
        $('.slides>ul>li').eq(index).siblings().find('.img2').css({
            'bottom': '-140px'
        });
    })


//floor1
    var flag1 = true;
    function show1(){
        $('.pageTitle').stop(true, false).animate({'left':'200px'},2000,function() {
                flag1 = true;
            });
        $('.floor1Ul').stop(true, false).animate({'top':'106px'},2000);
    }
/*----floor4----*/
    var timer4 = setInterval(show4, 2000);
    var showIndex = 0;

    function show4() {
        $('.exchange').eq(showIndex).fadeIn().siblings('div').fadeOut();
        showIndex++;
        if (showIndex == 3) {
            showIndex = 0;
        }
    }

/*---------------floor7人物--------------------*/
    function show7() {
        var ulLeft = 242;
        $('.floor7 .left').click(function() {
            $('.floor7>.show>ul').animate({ 'left': '0px' },500);
        });
        $('.floor7 .right').click(function() {
            $('.floor7>.show>ul').animate({ 'left': '-242px' },500);
        });

    }
    // show1();
    show7();
    nav();



//屏幕滚动的时候显示动画
    $(window).scroll(function() {
        // scrollfun();
        var curTop = $(window).scrollTop();
        console.log(curTop);
// floor1
        if(curTop>200){
            if(flag1){
                flag1 = false;
                show1();
            }
        }
        if(curTop<150){
            $('.pageTitle').stop(true, true).animate({'left':'300px'},0);
            $('.floor1Ul').stop(true, true).animate({'top':'170px'},0);
        }
//floor2
        if(curTop>540){
            if( $('.f2mainImg:not(animated)')){
                $('.f2mainImg').animate({'top':'60px'},2000);
                $('.text-box').animate({'top':'614px'},2000);
                $('.btn-box').animate({'top':'614px'},2000);
            }
        }
        if(curTop<530){
            $('.f2mainImg').stop(true, true).animate({'top':'0px'},0);
            $('.text-box').stop(true, true).animate({'top':'671px'},0);
            $('.btn-box').stop(true, true).animate({'top':'671px'},0);
        }

// floor6
         if (curTop > 3600) {
            if($('.f6ullogo:not(:animated)') ){
                $('.f6ullogo').animate({ 'bottom': '200px' }, 1500);
                $('.f6titleBox').animate({ 'top': '115px' }, 1500);
                $('.f6btn').animate({ 'bottom': '132px' }, 1500);
            }
        }
       /* if($(element).is(":animated")){    
        //判断元素是否正处于动画状态
        //如果当前没有进行动画，则添加新动画
        $('.f6ullogo').animate({ 'bottom': '200px' }, 1500);
        
        $('.f6ullogo:not(:animated)').animate({ 'bottom': '200px' }, 1500)
}*/
//--------floor3-----
    if(curTop>1438){
        $('.f3main>h3').addClass('f3mainTitle1');
        $('.f3main>.f3ul').addClass('f3ul1');
    }
//--------floor4------
    if(curTop>2432){
        $('.text-area>h2').addClass('f4title1');
        $('.text-area .f4text').addClass('f4text1');
        $('.text-area .tip').addClass('tip1')
    }
//------floor5------
    if(curTop>2780){
        $('.f5ul1').addClass('f5ul11');
        $('.f5ul2').addClass('f5ul22');
        // $('#f5ulli2').addClass('f5ul22');
    }


    });
});
