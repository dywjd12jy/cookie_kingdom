
//banner script

    var slide = document.querySelector('.slide_list'),
        slide_Li = document.querySelectorAll('.slide_list li'),

        slideWidth = document.querySelector('.slide_list li').offsetWidth,
        // slideWidth = 90,

        currentIdx = 0,
        slideLength = slide_Li.length,

        nextBtn = document.querySelector('.next'),
        prevBtn = document.querySelector('.prev');
        
        // console.log (slideWidth);
        console.log (slideWidth);

    makeClone();

    function makeClone(){
        for(var i = 0; i<slideLength; i++){
            var cloneSlide = slide_Li[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slide.appendChild(cloneSlide);
        }
        for(var i = slideLength -1; i>=0; i--){
            var cloneSlide = slide_Li[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slide.prepend(cloneSlide);
        }
        updateWidth();
        setPosition();
        setTimeout(function(){
            slide.classList.add('animated');
        },100);

    }

    function updateWidth(){
        var currentSlides = document.querySelectorAll('.slide_list li');
        var newSlideCount = currentSlides.length;

        var newWidth = slideWidth*newSlideCount +'px';
        slide.style.width = newWidth;
    }

    function setPosition(){
        var initialTranslateValue = -(slideWidth*slideLength);
        slide.style.transform = 'translateX(' + initialTranslateValue+'px)';
    }

    nextBtn.addEventListener('click',function(){
        moveSlide(currentIdx + 1);
    });
    prevBtn.addEventListener('click',function(){
        moveSlide(currentIdx - 1);
    });

    function moveSlide(num){
        slide.style.left = -num * slideWidth + 'px';
        currentIdx = num;

        if(currentIdx == slideLength || currentIdx == -slideLength){
            setTimeout(function(){
                slide.classList.remove('animated');
                slide.style.left = '0px';
                currentIdx = 0;
            },500);
            setTimeout(function(){
                slide.classList.add('animated');
            },600);
        }
    }

//Hamberger (max-width:1024px)

var hamberger = document.querySelector('.hamberger');
var hdDown = document.getElementById('hd_down');

hamberger.addEventListener("click",function(){
    // hdDown.style.right = '0%';
    // var hamActive= document.querySelector('.ham_active');
    // var hdDownActive= document.querySelector('.hd_down_active');
    hamberger.classList.toggle('ham_active');
    hdDown.classList.toggle('hd_down_active');
});
console.log(hamberger);

// var nav = $("#nav ul li");
// var cont = $("#contents > div");

// nav.click(function(e){
//   e.preventDefault();
//   var target = $(this);
//   var index = target.index();
//   //alert(index);
//   var section = cont.eq(index);
//   var offset = section.offset().top;
//   //alert(offset);
//   $("html,body").animate({ scrollTop:offset },600,"easeInOutBack");
// });
    




