$(document).ready(function(){
    
    const totalItems = $('.container ul li').length;

    $('.container ul li').click(modal);
    
    let index = 0

    function modal(){
        index = $(this).index()+1;
        let url = 'url(https://smoooss.github.io/plave/resource/img/gallery/image'+index+'.jpg)';

        $('.modal').css({'display':'block','marginTop':0});
        $('.modal .modal-cont').css({'backgroundImage':url});
        $('html,body').css({'overflow':'hidden'}).animate({scrollTop:0},0);
    }


    $('main .modal .modal-btn ul li').eq(0).click(function(){
        $('main .modal').css({'display':'none'})
        $('html,body').css({'overflow':'auto'})
    });

    $('main .modal .modal-btn ul li').eq(1).click(function(){

        index--;
        let url = 'url(https://smoooss.github.io/plave/resource/img/gallery/image'+index+'.jpg)';
        $('main .modal .modal-cont').css({'backgroundImage':url});

        if(index < 1){
            index = totalItems;

            let url = 'url(https://smoooss.github.io/plave/resource/img/gallery/image'+index+'.jpg)';
            $('main .modal .modal-cont').css({'backgroundImage':url});
        }
    });

    $('main .modal .modal-btn ul li').eq(2).click(function(){

        index++;
        let url = 'url(https://smoooss.github.io/plave/resource/img/gallery/image'+index+'.jpg)';
        $('main .modal .modal-cont').css({'backgroundImage':url});
        
        if(index > totalItems){
            index = 1;

            let url = 'url(https://smoooss.github.io/plave/resource/img/gallery/image'+index+'.jpg)';
            $('main .modal .modal-cont').css({'backgroundImage':url});
        }
    });

});
