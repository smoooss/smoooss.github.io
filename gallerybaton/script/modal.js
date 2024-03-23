$(document).ready(function(){

    var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0, u=0,v=0,w=0,x=0;
        





    $('#sub-cont .cont ul li').click(function(){
        a=$(window).scrollTop();
        
        $('#modal').css({'display':'block','top':a})
        $('#modal-cont ul li').css({'display':'none'})
        $('body').css({'overflow':'hidden'})

        $('.zoom-btn ul li').find('i').mouseover(function(){
            $(this).stop(3000).css({'color':'#ffffff'})
        }).mouseout(function(){
            $(this).stop(3000).css({'color':'#afafaf'})
        });

        $('.zoom-btn ul li').click(function(){
            $('#modal-cont').css({'overflow':'auto'})
        });

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal').css({'display':'none'})
            $('body').css({'overflow':'auto'})
        });

    });






    $('#sub-cont .cont ul li').eq(0).click(function(){
        $('.c2 ul li').eq(0).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('.c2 ul li').eq(0).css({'width':'920','height':'749'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            b++
            b=b%5
            if(b==1){
                $('.c2 ul li').eq(0).css({'width':'1020','height':'830'})
            }else if(b==2){
                $('.c2 ul li').eq(0).css({'width':'1120','height':'911'})
            }else if(b==3){
                $('.c2 ul li').eq(0).css({'width':'1220','height':'993'})
            }else if(b==4){
                $('.c2 ul li').eq(0).css({'width':'1320','height':'1074'})
            }else{
                $('.c2 ul li').eq(0).css({'width':'920','height':'749'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('.c2 ul li').eq(0).width()
            if(c==1030){
                $('.c2 ul li').eq(0).css({'width':'930','height':'1089'})
            }else if(c==930){
                $('.c2 ul li').eq(0).css({'width':'830','height':'972'})
            }else if(c==830){
                $('.c2 ul li').eq(0).css({'width':'730','height':'855'})
            }else{
                $('.c2 ul li').eq(0).css({'width':'920','height':'749'})
            }
        });
    });





    $('.cont ul li').eq(1).click(function(){
        $('#modal-cont ul li').eq(1).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(1).css({'width':'550','height':'742'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            d++
            d=d%5
            if(d==1){
                $('#modal-cont ul li').eq(1).css({'width':'650','height':'877'})
            }else if(d==2){
                $('#modal-cont ul li').eq(1).css({'width':'750','height':'1011'})
            }else if(d==3){
                $('#modal-cont ul li').eq(1).css({'width':'850','height':'1146'})
            }else if(d==4){
                $('#modal-cont ul li').eq(1).css({'width':'950','height':'1281'})
            }else{
                $('#modal-cont ul li').eq(1).css({'width':'550','height':'742'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(1).width()
            if(c==950){
                $('#modal-cont ul li').eq(1).css({'width':'850','height':'1146'})
            }else if(c==850){
                $('#modal-cont ul li').eq(1).css({'width':'750','height':'1011'})
            }else if(c==750){
                $('#modal-cont ul li').eq(1).css({'width':'650','height':'877'})
            }else{
                $('#modal-cont ul li').eq(1).css({'width':'550','height':'742'})
            }
        });
    });




    $('.cont ul li').eq(2).click(function(){
        $('#modal-cont ul li').eq(2).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(2).css({'width':'550','height':'742'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            e++
            e=e%5
            if(e==1){
                $('#modal-cont ul li').eq(2).css({'width':'650','height':'877'})
            }else if(e==2){
                $('#modal-cont ul li').eq(2).css({'width':'750','height':'1011'})
            }else if(e==3){
                $('#modal-cont ul li').eq(2).css({'width':'850','height':'1146'})
            }else if(e==4){
                $('#modal-cont ul li').eq(2).css({'width':'950','height':'1281'})
            }else{
                $('#modal-cont ul li').eq(2).css({'width':'550','height':'742'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(2).width()
            if(c==950){
                $('#modal-cont ul li').eq(2).css({'width':'850','height':'1146'})
            }else if(c==850){
                $('#modal-cont ul li').eq(2).css({'width':'750','height':'1011'})
            }else if(c==750){
                $('#modal-cont ul li').eq(2).css({'width':'650','height':'877'})
            }else{
                $('#modal-cont ul li').eq(2).css({'width':'550','height':'742'})
            }
        });
    });




    $('.cont ul li').eq(3).click(function(){
        $('#modal-cont ul li').eq(3).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(3).css({'width':'1000','height':'743'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            f++
            f=f%5
            if(f==1){
                $('#modal-cont ul li').eq(3).css({'width':'1100','height':'820'})
            }else if(f==2){
                $('#modal-cont ul li').eq(3).css({'width':'1200','height':'892'})
            }else if(f==3){
                $('#modal-cont ul li').eq(3).css({'width':'1300','height':'966'})
            }else if(f==4){
                $('#modal-cont ul li').eq(3).css({'width':'1400','height':'1040'})
            }else{
                $('#modal-cont ul li').eq(3).css({'width':'1000','height':'743'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(3).width()
            if(c==1400){
                $('#modal-cont ul li').eq(3).css({'width':'1300','height':'966'})
            }else if(c==1300){
                $('#modal-cont ul li').eq(3).css({'width':'1200','height':'892'})
            }else if(c==1200){
                $('#modal-cont ul li').eq(3).css({'width':'1100','height':'820'})
            }else{
                $('#modal-cont ul li').eq(3).css({'width':'1000','height':'743'})
            }
        });
    });




    $('.cont ul li').eq(4).click(function(){
        $('#modal-cont ul li').eq(4).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(4).css({'width':'1000','height':'743'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            g++
            g=g%5
            if(g==1){
                $('#modal-cont ul li').eq(4).css({'width':'1100','height':'820'})
            }else if(g==2){
                $('#modal-cont ul li').eq(4).css({'width':'1200','height':'892'})
            }else if(g==3){
                $('#modal-cont ul li').eq(4).css({'width':'1300','height':'966'})
            }else if(g==4){
                $('#modal-cont ul li').eq(4).css({'width':'1400','height':'1040'})
            }else{
                $('#modal-cont ul li').eq(4).css({'width':'1000','height':'743'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(4).width()
            if(c==1400){
                $('#modal-cont ul li').eq(4).css({'width':'1300','height':'966'})
            }else if(c==1300){
                $('#modal-cont ul li').eq(4).css({'width':'1200','height':'892'})
            }else if(c==1200){
                $('#modal-cont ul li').eq(4).css({'width':'1100','height':'820'})
            }else{
                $('#modal-cont ul li').eq(4).css({'width':'1000','height':'743'})
            }
        });
    });






    $('.cont ul li').eq(5).click(function(){
        $('#modal-cont ul li').eq(5).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(5).css({'width':'1000','height':'660'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            h++
            h=h%5
            if(h==1){
                $('#modal-cont ul li').eq(5).css({'width':'1100','height':'726'})
            }else if(h==2){
                $('#modal-cont ul li').eq(5).css({'width':'1200','height':'792'})
            }else if(h==3){
                $('#modal-cont ul li').eq(5).css({'width':'1300','height':'858'})
            }else if(h==4){
                $('#modal-cont ul li').eq(5).css({'width':'1400','height':'924'})
            }else{
                $('#modal-cont ul li').eq(5).css({'width':'1000','height':'660'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(5).width()
            if(c==1400){
                $('#modal-cont ul li').eq(5).css({'width':'1300','height':'858'})
            }else if(c==1300){
                $('#modal-cont ul li').eq(5).css({'width':'1200','height':'792'})
            }else if(c==1200){
                $('#modal-cont ul li').eq(5).css({'width':'1100','height':'726'})
            }else{
                $('#modal-cont ul li').eq(5).css({'width':'1000','height':'660'})
            }
        });
    });




    $('.cont ul li').eq(6).click(function(){
        $('#modal-cont ul li').eq(6).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(6).css({'width':'530','height':'742'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            i++
            i=i%5
            if(i==1){
                $('#modal-cont ul li').eq(6).css({'width':'630','height':'882'})
            }else if(i==2){
                $('#modal-cont ul li').eq(6).css({'width':'730','height':'1022'})
            }else if(i==3){
                $('#modal-cont ul li').eq(6).css({'width':'830','height':'1162'})
            }else if(i==4){
                $('#modal-cont ul li').eq(6).css({'width':'930','height':'1302'})
            }else{
                $('#modal-cont ul li').eq(6).css({'width':'530','height':'742'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(6).width()
            if(c==930){
                $('#modal-cont ul li').eq(6).css({'width':'830','height':'1162'})
            }else if(c==830){
                $('#modal-cont ul li').eq(6).css({'width':'730','height':'1022'})
            }else if(c==730){
                $('#modal-cont ul li').eq(6).css({'width':'630','height':'882'})
            }else{
                $('#modal-cont ul li').eq(6).css({'width':'530','height':'742'})
            }
        });
    });





    $('.cont ul li').eq(7).click(function(){
        $('#modal-cont ul li').eq(7).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(7).css({'width':'1000','height':'660'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){  
            j++
            j=j%5
            if(j==1){
                $('#modal-cont ul li').eq(7).css({'width':'1100','height':'726'})
            }else if(j==2){
                $('#modal-cont ul li').eq(7).css({'width':'1200','height':'792'})
            }else if(j==3){
                $('#modal-cont ul li').eq(7).css({'width':'1300','height':'858'})
            }else if(j==4){
                $('#modal-cont ul li').eq(7).css({'width':'1400','height':'924'})
            }else{
                $('#modal-cont ul li').eq(7).css({'width':'1000','height':'660'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(7).width()
            if(c==1400){
                $('#modal-cont ul li').eq(7).css({'width':'1300','height':'858'})
            }else if(c==1300){
                $('#modal-cont ul li').eq(7).css({'width':'1200','height':'792'})
            }else if(c==1200){
                $('#modal-cont ul li').eq(7).css({'width':'1100','height':'726'})
            }else{
                $('#modal-cont ul li').eq(7).css({'width':'1000','height':'660'})
            }
        });
    });




    $('.cont ul li').eq(8).click(function(){
        $('#modal-cont ul li').eq(8).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(8).css({'width':'1000','height':'660'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            k++
            k=k%5
            if(k==1){
                $('#modal-cont ul li').eq(8).css({'width':'1100','height':'726'})
            }else if(k==2){
                $('#modal-cont ul li').eq(8).css({'width':'1200','height':'792'})
            }else if(k==3){
                $('#modal-cont ul li').eq(8).css({'width':'1300','height':'858'})
            }else if(k==4){
                $('#modal-cont ul li').eq(8).css({'width':'1400','height':'924'})
            }else{
                $('#modal-cont ul li').eq(8).css({'width':'1000','height':'660'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(8).width()
            if(c==1400){
                $('#modal-cont ul li').eq(8).css({'width':'1300','height':'858'})
            }else if(c==1300){
                $('#modal-cont ul li').eq(8).css({'width':'1200','height':'792'})
            }else if(c==1200){
                $('#modal-cont ul li').eq(8).css({'width':'1100','height':'726'})
            }else{
                $('#modal-cont ul li').eq(8).css({'width':'1000','height':'660'})
            }
        });
    });





    $('.cont ul li').eq(9).click(function(){
        $('#modal-cont ul li').eq(9).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(9).css({'width':'530','height':'742'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            l++
            l=l%5
            if(l==1){
                $('#modal-cont ul li').eq(9).css({'width':'630','height':'882'})
            }else if(l==2){
                $('#modal-cont ul li').eq(9).css({'width':'730','height':'1022'})
            }else if(l==3){
                $('#modal-cont ul li').eq(9).css({'width':'830','height':'1162'})
            }else if(l==4){
                $('#modal-cont ul li').eq(9).css({'width':'930','height':'1302'})
            }else{
                $('#modal-cont ul li').eq(9).css({'width':'530','height':'742'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(9).width()
            if(c==930){
                $('#modal-cont ul li').eq(9).css({'width':'830','height':'1162'})
            }else if(c==830){
                $('#modal-cont ul li').eq(9).css({'width':'730','height':'1022'})
            }else if(c==730){
                $('#modal-cont ul li').eq(9).css({'width':'630','height':'882'})
            }else{
                $('#modal-cont ul li').eq(9).css({'width':'530','height':'742'})
            }
        });
    });





    $('.cont ul li').eq(10).click(function(){
        $('#modal-cont ul li').eq(10).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(10).css({'width':'1000','height':'660'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            m++
            m=m%5
            if(m==1){
                $('#modal-cont ul li').eq(10).css({'width':'1100','height':'726'})
            }else if(m==2){
                $('#modal-cont ul li').eq(10).css({'width':'1200','height':'792'})
            }else if(m==3){
                $('#modal-cont ul li').eq(10).css({'width':'1300','height':'858'})
            }else if(m==4){
                $('#modal-cont ul li').eq(10).css({'width':'1400','height':'924'})
            }else{
                $('#modal-cont ul li').eq(10).css({'width':'1000','height':'660'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(10).width()
            if(c==1400){
                $('#modal-cont ul li').eq(10).css({'width':'1300','height':'858'})
            }else if(c==1300){
                $('#modal-cont ul li').eq(10).css({'width':'1200','height':'792'})
            }else if(c==1200){
                $('#modal-cont ul li').eq(10).css({'width':'1100','height':'726'})
            }else{
                $('#modal-cont ul li').eq(10).css({'width':'1000','height':'660'})
            }
        });
    });





    $('.cont ul li').eq(11).click(function(){
        $('#modal-cont ul li').eq(11).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(11).css({'width':'1000','height':'667'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            m++
            m=m%5
            if(m==1){
                $('#modal-cont ul li').eq(11).css({'width':'1100','height':'734'})
            }else if(m==2){
                $('#modal-cont ul li').eq(11).css({'width':'1200','height':'800'})
            }else if(m==3){
                $('#modal-cont ul li').eq(11).css({'width':'1300','height':'867'})
            }else if(m==4){
                $('#modal-cont ul li').eq(11).css({'width':'1400','height':'934'})
            }else{
                $('#modal-cont ul li').eq(11).css({'width':'1000','height':'667'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(11).width()
            if(c==1400){
                $('#modal-cont ul li').eq(11).css({'width':'1300','height':'867'})
            }else if(c==1300){
                $('#modal-cont ul li').eq(11).css({'width':'1200','height':'800'})
            }else if(c==1200){
                $('#modal-cont ul li').eq(11).css({'width':'1100','height':'734'})
            }else{
                $('#modal-cont ul li').eq(11).css({'width':'1000','height':'667'})
            }
        });
    });





    $('.cont ul li').eq(12).click(function(){
        $('#modal-cont ul li').eq(12).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(12).css({'width':'1000','height':'667'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            n++
            n=n%5
            if(n==1){
                $('#modal-cont ul li').eq(12).css({'width':'1100','height':'734'})
            }else if(n==2){
                $('#modal-cont ul li').eq(12).css({'width':'1200','height':'800'})
            }else if(n==3){
                $('#modal-cont ul li').eq(12).css({'width':'1300','height':'867'})
            }else if(n==4){
                $('#modal-cont ul li').eq(12).css({'width':'1400','height':'934'})
            }else{
                $('#modal-cont ul li').eq(12).css({'width':'1000','height':'667'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(12).width()
            if(c==1400){
                $('#modal-cont ul li').eq(12).css({'width':'1300','height':'867'})
            }else if(c==1300){
                $('#modal-cont ul li').eq(12).css({'width':'1200','height':'800'})
            }else if(c==1200){
                $('#modal-cont ul li').eq(12).css({'width':'1100','height':'734'})
            }else{
                $('#modal-cont ul li').eq(12).css({'width':'1000','height':'667'})
            }
        });
    });





    $('.cont ul li').eq(13).click(function(){
        $('#modal-cont ul li').eq(13).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(13).css({'width':'1000','height':'667'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            o++
            o=o%5
            if(o==1){
                $('#modal-cont ul li').eq(13).css({'width':'1100','height':'734'})
            }else if(o==2){
                $('#modal-cont ul li').eq(13).css({'width':'1200','height':'800'})
            }else if(o==3){
                $('#modal-cont ul li').eq(13).css({'width':'1300','height':'867'})
            }else if(o==4){
                $('#modal-cont ul li').eq(13).css({'width':'1400','height':'934'})
            }else{
                $('#modal-cont ul li').eq(13).css({'width':'1000','height':'667'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(13).width()
            if(c==1400){
                $('#modal-cont ul li').eq(13).css({'width':'1300','height':'867'})
            }else if(c==1300){
                $('#modal-cont ul li').eq(13).css({'width':'1200','height':'800'})
            }else if(c==1200){
                $('#modal-cont ul li').eq(13).css({'width':'1100','height':'734'})
            }else{
                $('#modal-cont ul li').eq(13).css({'width':'1000','height':'667'})
            }
        });
    });





    $('.cont ul li').eq(14).click(function(){
        $('#modal-cont ul li').eq(14).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(14).css({'width':'540','height':'745'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            p++
            p=p%5
            if(p==1){
                $('#modal-cont ul li').eq(14).css({'width':'640','height':'884'})
            }else if(p==2){
                $('#modal-cont ul li').eq(14).css({'width':'740','height':'1022'})
            }else if(p==3){
                $('#modal-cont ul li').eq(14).css({'width':'840','height':'1160'})
            }else if(p==4){
                $('#modal-cont ul li').eq(14).css({'width':'940','height':'1298'})
            }else{
                $('#modal-cont ul li').eq(14).css({'width':'540','height':'745'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(14).width()
            if(c==940){
                $('#modal-cont ul li').eq(14).css({'width':'840','height':'1160'})
            }else if(c==840){
                $('#modal-cont ul li').eq(14).css({'width':'740','height':'1022'})
            }else if(c==740){
                $('#modal-cont ul li').eq(14).css({'width':'640','height':'884'})
            }else{
                $('#modal-cont ul li').eq(14).css({'width':'540','height':'745'})
            }
        });
    });





    $('.cont ul li').eq(15).click(function(){
        $('#modal-cont ul li').eq(15).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(15).css({'width':'540','height':'745'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            q++
            q=q%5
            if(q==1){
                $('#modal-cont ul li').eq(15).css({'width':'640','height':'884'})
            }else if(q==2){
                $('#modal-cont ul li').eq(15).css({'width':'740','height':'1022'})
            }else if(q==3){
                $('#modal-cont ul li').eq(15).css({'width':'840','height':'1160'})
            }else if(q==4){
                $('#modal-cont ul li').eq(15).css({'width':'940','height':'1298'})
            }else{
                $('#modal-cont ul li').eq(15).css({'width':'540','height':'745'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(15).width()
            if(c==940){
                $('#modal-cont ul li').eq(15).css({'width':'840','height':'1160'})
            }else if(c==840){
                $('#modal-cont ul li').eq(15).css({'width':'740','height':'1022'})
            }else if(c==740){
                $('#modal-cont ul li').eq(15).css({'width':'640','height':'884'})
            }else{
                $('#modal-cont ul li').eq(15).css({'width':'540','height':'745'})
            }
        });
    });





    $('.cont ul li').eq(16).click(function(){
        $('#modal-cont ul li').eq(16).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(16).css({'width':'540','height':'745'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            r++
            r=r%5
            if(r==1){
                $('#modal-cont ul li').eq(16).css({'width':'640','height':'884'})
            }else if(r==2){
                $('#modal-cont ul li').eq(16).css({'width':'740','height':'1022'})
            }else if(r==3){
                $('#modal-cont ul li').eq(16).css({'width':'840','height':'1160'})
            }else if(r==4){
                $('#modal-cont ul li').eq(16).css({'width':'940','height':'1298'})
            }else{
                $('#modal-cont ul li').eq(16).css({'width':'540','height':'745'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(16).width()
            if(c==940){
                $('#modal-cont ul li').eq(16).css({'width':'840','height':'1160'})
            }else if(c==840){
                $('#modal-cont ul li').eq(16).css({'width':'740','height':'1022'})
            }else if(c==740){
                $('#modal-cont ul li').eq(16).css({'width':'640','height':'884'})
            }else{
                $('#modal-cont ul li').eq(16).css({'width':'540','height':'745'})
            }
        });
    });




    $('.cont ul li').eq(16).click(function(){
        $('#modal-cont ul li').eq(16).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(16).css({'width':'540','height':'745'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            r++
            r=r%5
            if(r==1){
                $('#modal-cont ul li').eq(16).css({'width':'640','height':'884'})
            }else if(r==2){
                $('#modal-cont ul li').eq(16).css({'width':'740','height':'1022'})
            }else if(r==3){
                $('#modal-cont ul li').eq(16).css({'width':'840','height':'1160'})
            }else if(r==4){
                $('#modal-cont ul li').eq(16).css({'width':'940','height':'1298'})
            }else{
                $('#modal-cont ul li').eq(16).css({'width':'540','height':'745'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(16).width()
            if(c==940){
                $('#modal-cont ul li').eq(16).css({'width':'840','height':'1160'})
            }else if(c==840){
                $('#modal-cont ul li').eq(16).css({'width':'740','height':'1022'})
            }else if(c==740){
                $('#modal-cont ul li').eq(16).css({'width':'640','height':'884'})
            }else{
                $('#modal-cont ul li').eq(16).css({'width':'540','height':'745'})
            }
        });
    });






    $('.cont ul li').eq(17).click(function(){
        $('#modal-cont ul li').eq(17).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(17).css({'width':'1000','height':'720'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            s++
            s=s%5
            if(s==1){
                $('#modal-cont ul li').eq(17).css({'width':'1100','height':'792'})
            }else if(s==2){
                $('#modal-cont ul li').eq(17).css({'width':'1200','height':'864'})
            }else if(s==3){
                $('#modal-cont ul li').eq(17).css({'width':'1300','height':'936'})
            }else if(s==4){
                $('#modal-cont ul li').eq(17).css({'width':'1400','height':'1008'})
            }else{
                $('#modal-cont ul li').eq(17).css({'width':'1000','height':'720'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(17).width()
            if(c==1400){
                $('#modal-cont ul li').eq(17).css({'width':'1300','height':'936'})
            }else if(c==1300){
                $('#modal-cont ul li').eq(17).css({'width':'1200','height':'864'})
            }else if(c==1200){
                $('#modal-cont ul li').eq(17).css({'width':'1100','height':'792'})
            }else{
                $('#modal-cont ul li').eq(17).css({'width':'1000','height':'720'})
            }
        });
    });







    $('.cont ul li').eq(18).click(function(){
        $('#modal-cont ul li').eq(18).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(18).css({'width':'535','height':'744'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            t++
            t=t%5
            if(t==1){
                $('#modal-cont ul li').eq(18).css({'width':'635','height':'883'})
            }else if(t==2){
                $('#modal-cont ul li').eq(18).css({'width':'735','height':'1022'})
            }else if(t==3){
                $('#modal-cont ul li').eq(18).css({'width':'835','height':'1161'})
            }else if(t==4){
                $('#modal-cont ul li').eq(18).css({'width':'935','height':'1300'})
            }else{
                $('#modal-cont ul li').eq(18).css({'width':'535','height':'744'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(18).width()
            if(c==935){
                $('#modal-cont ul li').eq(18).css({'width':'835','height':'1161'})
            }else if(c==835){
                $('#modal-cont ul li').eq(18).css({'width':'735','height':'1022'})
            }else if(c==735){
                $('#modal-cont ul li').eq(18).css({'width':'635','height':'883'})
            }else{
                $('#modal-cont ul li').eq(18).css({'width':'535','height':'744'})
            }
        });
    });






    $('.cont ul li').eq(19).click(function(){
        $('#modal-cont ul li').eq(19).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(19).css({'width':'535','height':'744'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            u++
            u=u%5
            if(u==1){
                $('#modal-cont ul li').eq(19).css({'width':'635','height':'883'})
            }else if(u==2){
                $('#modal-cont ul li').eq(19).css({'width':'735','height':'1022'})
            }else if(u==3){
                $('#modal-cont ul li').eq(19).css({'width':'835','height':'1161'})
            }else if(u==4){
                $('#modal-cont ul li').eq(19).css({'width':'935','height':'1300'})
            }else{
                $('#modal-cont ul li').eq(19).css({'width':'535','height':'744'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(19).width()
            if(c==935){
                $('#modal-cont ul li').eq(19).css({'width':'835','height':'1161'})
            }else if(c==835){
                $('#modal-cont ul li').eq(19).css({'width':'735','height':'1022'})
            }else if(c==735){
                $('#modal-cont ul li').eq(19).css({'width':'635','height':'883'})
            }else{
                $('#modal-cont ul li').eq(19).css({'width':'535','height':'744'})
            }
        });
    });





    $('.cont ul li').eq(20).click(function(){
        $('#modal-cont ul li').eq(20).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(20).css({'width':'535','height':'744'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            v++
            v=v%5
            if(v==1){
                $('#modal-cont ul li').eq(20).css({'width':'635','height':'883'})
            }else if(v==2){
                $('#modal-cont ul li').eq(20).css({'width':'735','height':'1022'})
            }else if(v==3){
                $('#modal-cont ul li').eq(20).css({'width':'835','height':'1161'})
            }else if(v==4){
                $('#modal-cont ul li').eq(20).css({'width':'935','height':'1300'})
            }else{
                $('#modal-cont ul li').eq(20).css({'width':'535','height':'744'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(20).width()
            if(c==935){
                $('#modal-cont ul li').eq(20).css({'width':'835','height':'1161'})
            }else if(c==835){
                $('#modal-cont ul li').eq(20).css({'width':'735','height':'1022'})
            }else if(c==735){
                $('#modal-cont ul li').eq(20).css({'width':'635','height':'883'})
            }else{
                $('#modal-cont ul li').eq(20).css({'width':'535','height':'744'})
            }
        });
    });





    $('.cont ul li').eq(21).click(function(){
        $('#modal-cont ul li').eq(21).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(21).css({'width':'535','height':'744'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            w++
            w=w%5
            if(w==1){
                $('#modal-cont ul li').eq(21).css({'width':'635','height':'883'})
            }else if(w==2){
                $('#modal-cont ul li').eq(21).css({'width':'735','height':'1022'})
            }else if(w==3){
                $('#modal-cont ul li').eq(21).css({'width':'835','height':'1161'})
            }else if(w==4){
                $('#modal-cont ul li').eq(21).css({'width':'935','height':'1300'})
            }else{
                $('#modal-cont ul li').eq(21).css({'width':'535','height':'744'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(21).width()
            if(c==935){
                $('#modal-cont ul li').eq(21).css({'width':'835','height':'1161'})
            }else if(c==835){
                $('#modal-cont ul li').eq(21).css({'width':'735','height':'1022'})
            }else if(c==735){
                $('#modal-cont ul li').eq(21).css({'width':'635','height':'883'})
            }else{
                $('#modal-cont ul li').eq(21).css({'width':'535','height':'744'})
            }
        });
    });






    $('.cont ul li').eq(22).click(function(){
        $('#modal-cont ul li').eq(22).css({'display':'block'})

        $('.zoom-btn ul li').eq(0).click(function(){
            $('#modal-cont ul li').eq(22).css({'width':'1000','height':'720'})
        });

        $('.zoom-btn ul li').eq(1).click(function(){
            x++
            x=x%5
            if(x==1){
                $('#modal-cont ul li').eq(22).css({'width':'1100','height':'792'})
            }else if(x==2){
                $('#modal-cont ul li').eq(22).css({'width':'1200','height':'864'})
            }else if(x==3){
                $('#modal-cont ul li').eq(22).css({'width':'1300','height':'936'})
            }else if(x==4){
                $('#modal-cont ul li').eq(22).css({'width':'1400','height':'1008'})
            }else{
                $('#modal-cont ul li').eq(22).css({'width':'1000','height':'720'})
            }
        });

        $('.zoom-btn ul li').eq(2).click(function(){
            c=$('#modal-cont ul li').eq(22).width()
            if(c==1400){
                $('#modal-cont ul li').eq(22).css({'width':'1300','height':'936'})
            }else if(c==1300){
                $('#modal-cont ul li').eq(22).css({'width':'1200','height':'864'})
            }else if(c==1200){
                $('#modal-cont ul li').eq(22).css({'width':'1100','height':'792'})
            }else{
                $('#modal-cont ul li').eq(22).css({'width':'1000','height':'720'})
            }
        });
    });


});