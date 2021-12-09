
//banner script

    var slide = document.querySelector('.slide'),
        slide_Li = document.querySelectorAll('.slide li'),
        currentIdx = 0,
        slideWidth = 45,
        slideLength = slide_Li.length,
        nextBtn = document.querySelector('.next'),
        prevBtn = document.querySelector('.prev');

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
        var currentSlides = document.querySelectorAll('.slide li');
        var newSlideCount = currentSlides.length;

        var newWidth = slideWidth*newSlideCount +'vw';
        slide.style.width = newWidth;
    }

    function setPosition(){
        var initialTranslateValue = -(slideWidth*slideLength);
        slide.style.transform = 'translateX(' + initialTranslateValue+'vw)';
    }

    nextBtn.addEventListener('click',function(){
        moveSlide(currentIdx + 1);
    });
    prevBtn.addEventListener('click',function(){
        moveSlide(currentIdx - 1);
    });

    function moveSlide(num){
        slide.style.left = -num * slideWidth + 'vw';
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

    

    




