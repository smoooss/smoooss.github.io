$(document).ready(function(){



    $(window).on('mousemove',function(){
        $('.main-cont .text').fadeIn(700)
    });


    let page = 0;
    $(window).on("wheel", function(event){
        
        if(!$('#main').is(":animated")){

        a=$('.main-cont').width();
        if (event.originalEvent.deltaY < 0) {
            //위로
            if(page>0){
                $('#main').animate({'left':"+="+a+"px"})
                page--;
            }
        }else {
            //아래로
            if(page<5){
                $('#main').animate({'left':"-="+a+"px"})
                page++;
                }
            }
        }
        
    });


    $('.next').click(next);

    function next(){
        page++;
        a=$('.main-cont').width();
        if(page>0){
            $('#main').animate({'left':"-="+a+"px"})
            }
    }

    $('.prev').click(prev);

    function prev(){
        page--;
        a=$('.main-cont').width();
        if(page<5){
            $('#main').animate({'left':"+="+a+"px"})
            }
    }
});