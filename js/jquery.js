
        
        
        // var tab_Btn = $(".tab_button ul");
        // var tab_Btn_li = $(".tab_button ul li");
        // var tab_Icon = $(".tab_icon ul");
        // var tab_Icon_li = $(".tab_icon ul li");
        // var tab_Cont = $(".tab_cont ul")

        // tab_Cont.hide().eq(0).show();

        // tab_Btn_li.on("click",function(){
            
        // });



        // //cont2 텍스트
        // var tab_Menu =$(".menu>ul>li");
        // var tab_Text =$(".menu_text>ul>li");
        // tab_Text.hide().eq(0).show();
        
        // tab_Icon.show(function(e){
        //     // e.preventDefault();
        //     // var target = $(this);
        //     // var index =target.index();
        //     // tab_Icon.removeClass("active");
        //     // target.addClass("active");
        //     // tab_Text.hide();
        //     // tab_Text.eq(index).show();
        // });



        //배너 스크립트
        // let slides = document.querySelector(".slide");
        // let slideImg = document.querySelectorAll(".slide li");
        // currentIdx = 0;
        // slideCount = slideImg.length;
        // prev = document.querySelector(".prev");//이전 버튼
        // next = document.querySelector(".next");//다음 버튼
        // slideWidth = 45;//슬라이드이미지 넓이
        // slideMargin = 0;
        // //슬라이드 끼리의 마진값
        // makeClone();
        // // 처음이미지와 마지막 이미지 복사 함수
        // initfunction();
        // //슬라이드 넓이와 위치값 초기화 함수
        // function makeClone(){
        //     // slideImg.firstElementChild.cloneNode(true);
        //     let cloneSlide_first = slideImg[0].cloneNode(true);
        //     let cloneSlide_last = slides.lastElementChild.cloneNode(true);
        //     slides.append(cloneSlide_first); slides.insertBefore(cloneSlide_last,slides.firstElementChild);
        // }
        // function initfunction(){ 
        //     slides.style.width = (slideWidth + slideMargin) * (slideCount+2) + "vw";
        //     slides.style.left = -(slideWidth + slideMargin) + "vw";
        // }
        // next.addEventListener('click', function () { //다음 버튼 눌렀을때
        //     if (currentIdx <= slideCount-1) {
        //     //슬라이드이동
        //     slides.style.left = -(currentIdx+2) * (slideWidth+slideMargin) + "vw";
        //     slides.style.transition = `${0.5}s ease-out`;//이동 속도
        //     }
        //     if (currentIdx === slideCount-1){ //마지막 슬라이드 일때
        //         setTimeout(function(){
        //             //0.5초동안 복사한 첫번째 이미지에서, 진짜 첫번째 위치로 이동
        //             slides.style.left = -(slideWidth + slideMargin) + "vw";
        //             slides.style.transition = `${0}s ease-out`;
        //         },500);
        //         currentIdx = -1;
        //         }
        //         currentIdx+=1;
        //     }
        // );
        // prev.addEventListener('click', function () {//이전 버튼 눌렀을때
        //     console.log(currentIdx);
        //     if (currentIdx >= 0) {
        //         slides.style.left = -(currentIdx) * (slideWidth + slideMargin) + "vw";
        //         slides.style.transition = `${0.5}s ease-out`;
        //     }if (currentIdx === 0){
        //         setTimeout(function(){
        //             slides.style.left = -(slideCount) * (slideWidth + slideMargin)+ "vw";
        //             slides.style.transition = `${0}s ease-out`;
        //         },500);
        //         currentIdx=slideCount;
        //      }
        //      currentIdx-=1;
        //     }
        // );
    
       
        // var ul = document .querySelector('.slide_box');

        // function move(){

        //     var curIndex = 0;

        //     setInterval(function(){
        //         ul.style.transition = '0.2s';
        //         ul.style.transform = "translate3d(-"+9*(curIndex+1)+"%, 0%, 0px)";

        //         curIndex++;

        //         if(curIndex === 4){
        //             curIndex = -1; 
        //         }

        //     },1000);
        // }

        // document.addEventListener("DOMContentLoaded",function(){
        //     move();
        // }); 
        // > 다 불러온 다음에 실행시켜라

        const slideList = document.querySelector('.slide_list');
        const slideContents = document.querySelectorAll('.sl_img');
        const slideBtnPrev = document.querySelector('.controller .prev');
        const slideBtnNext = document.querySelector('.controller .next');

        const slideLen = slideContents.length;
        const slideWidth = 578;
        const slideSpeed = 300;

        const startNum = 0;

        

        slideList.style.width = slideWidth * (slideLen + 2) + "px";

        let firstChild = slideList.firstElementChild;
        let lastChild = slideList.lastElementChild;
        let clonedFirst = firstChild.cloneNode(true);
        let clonedLast = lastChild.cloneNode(true);
        
        // let curIndex = 0;

        // slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 1)) + "px, 0px, 0px)"
        // slideList.style.transform = `translate3d(-${ slideWidth * ( curIndex - 1 )}px, 0px, 0px)`;

        slideBtnNext.addEventListener('click', function(){
            if (curIndex <= slideLen -1){
                slideList.style.transition = slideSpeed + "ms";
                // slideList.style.transition = slideSpeed + "ms";
                
                slideList.style.transform = `translate3d(-${ slideWidth * ( curIndex -1 )}px, 0px, 0px)`;
            }



            
            curSlide = slideContents[++curIndex];


            // console.log(curIndex);
            
        });




    




