$(document).ready(function(){

    let openContent = null; // 현재 열려 있는 콘텐츠
    
    $('.title').click(function(event) {
        event.stopPropagation(); // 부모 요소로 이벤트 전파 방지
        const content = $(this).find('.content'); // 클릭된 타이틀의 콘텐츠

        // 이미 열려 있는 콘텐츠라면 변화 없음
        if (content.is(openContent)) {
            return;
        }

        // 열려 있는 콘텐츠가 있으면 slideUp()
        if (openContent) {
            openContent.slideUp(300);
        }

        // 클릭된 타이틀의 콘텐츠를 slideDown()
        content.slideDown();
        openContent = content; // 현재 열려 있는 콘텐츠로 업데이트
    });

    // main 영역 클릭 시 열려 있는 콘텐츠를 slideUp()
    $('main').click(function() {
        if (openContent) {
            openContent.slideUp(300);
            openContent = null; // 열려 있는 콘텐츠 초기화
        }
    });
    

    a=$('main .container .cont.c4 ul li > img').height()
            
    $('main .container .cont.c4 ul li').find('a').css({'height':a})
        

    $('main .container .cont.c4 ul li').mouseover(function(){
        $(this).find('a').css({'opacity':'1'})
    }).mouseout(function(){
        $(this).find('a').css({'opacity':'0'})
    })

    $(window).on('resize',function(){

        b=$('main .container .cont.c4 ul li > img').height()

        $('main .container .cont.c4 ul li').find('a').css({'height':b})
        
    });

});
