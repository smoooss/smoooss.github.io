$(document).ready(function(){
    
    a=$(window).width()

    if(a>=500){
        $('#main .contentwrap ul li').mouseover(function(){
            $(this).find('a').css({'opacity':'1'})
        }).mouseout(function(){
            $(this).find('a').css({'opacity':'0'})
        })
    }
    
    $('#main .contentwrap ul li').click(popup);
    
    let index = 0

    function popup(){
        index = $(this).index()+1;
        let url = 'url(img/content'+index+'.jpg)';
        
        b=$(window).scrollTop()

        $('#main .popup').css({'display':'block','marginTop':b});
        $('#main .popup .popup-cont').css({'backgroundImage':url});
        $('html,body').css({'overflow':'hidden'}).animate({'scrollTop':b});
    }


    $('#main .popup .popup-btn ul li').eq(0).click(function(){
        $('#main .popup').css({'display':'none'})
        $('html,body').css({'overflow':'auto'})
    });

    $('#main .popup .popup-btn ul li').eq(1).click(function(){

        index--;
        let url = 'url(img/content'+index+'.jpg)';
        $('#main .popup .popup-cont').css({'backgroundImage':url});

        if(index==1){
            index = 32;
        }
    });

    $('#main .popup .popup-btn ul li').eq(2).click(function(){

        index++;
        let url = 'url(img/content'+index+'.jpg)';
        $('#main .popup .popup-cont').css({'backgroundImage':url});
        
        if(index==31){
            index = 0;
        }
    });

});
