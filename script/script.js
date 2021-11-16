$(function(){
    //이미지 속성 선택하여 탭 메뉴 제작하기 : 각각의 btn 클릭시 img 속성 변경
    $(".btn1").on("click",function(){
        $(".frame img").attr({"src":"./images/01_responsive.jpg","alt":"반응형 목업"});
    });
    $(".btn2").on("click",function(){
        $(".frame img").attr({"src":"./images/02_logo.jpg","alt":"반응형 목업"});
    });
    $(".btn3").on("click",function(){
        $(".frame img").attr({"src":"./images/03_em1.jpg","alt":"반응형 목업"});
    });
    $(".btn4").on("click",function(){
        $(".frame img").attr({"src":"./images/04_em2.jpg","alt":"반응형 목업"});
    });
    $(".btn5").on("click",function(){
        $(".frame img").attr({"src":"./images/05_em3.jpg","alt":"반응형 목업"});
    });
    
});