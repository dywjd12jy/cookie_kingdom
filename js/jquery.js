

        
//변수 지정
var cookieType = $(".tab_button>ul>li");    //위에있는 탭 (쿠키 종류)
var cookeTab =$(".tab_icon>ul");            //왼쪽에있는 탭 (쿠키 아이콘)
var cookieDesc = $(".menu_text>ul>li");     //개별 쿠키 설명
var cookieIndex = $(".tab_icon>ul>li");     //개별 쿠키 아이콘
var cookiePicture =$(".menu>ul>li");        //중간 큰 사진

var tabIndex = 0;                            //탭 번호 (0~3)

// 페이지 기본 세팅
cookeTab.hide().eq(0).show();               
cookieDesc.hide().eq(0).show();
cookiePicture.hide().eq(0).show();

// 개별 쿠키 종류 만졌을때 발동
cookieType.click(function(e){
    tabIndex = $(this).index();             //선택한 index 가져오기
    cookeTab.hide().eq(tabIndex).show();    //선택한 쿠키 탭만 show()
    
    if(tabIndex < 2){                       //새로운 쿠키/ 영웅 쿠키일때 (종류index*3)
        tabIndex = tabIndex * 3;
    }else{                                  //나머지 (종류index*4)-1
        tabIndex = tabIndex * 4 - 1;
    }
    
    $(this).toggleClass('tabBtn_active');
    // this.addClass("tabBtn_active");
    // $('.tab_button>ul>li').toggleClass('tabBtn_active');
});
cookieType.click( function(){
    // $('.tab_button>ul>li').toggleClass('tabBtn_active');
    // $(this).toggleClass('tabBtn_active');
    // $(this).addClass('tabBtn_active');
});



// 개별 쿠키 아이콘 만졌을때 발동
cookieIndex.click(function(e){
    var index1 = $(this).index();            //선택한 쿠키의 index (0~2 아니면 0~3)
    cookiePicture.hide().eq(index1+tabIndex).show(); //선택한 쿠키만 show()
    cookieDesc.hide().eq(index1+tabIndex).show(); 
    this.toggleClass("tabIcon_active");
});


//cont2 텍스트
// var tab_Text =$(".menu_text>ul>li");
// tab_Text.hide().eq(0).show();

// tab_Icon.click(function(e){
//     e.preventDefault();
//     var target = $(this);
//     var index =target.index();
//     tab_Icon.removeClass("active");
//     target.addClass("active");
//     tab_Text.hide();
//     tab_Text.eq(index).show();
// });

