//***************************************scroll***************************************
let mainHead = $('.main-head').offset().top;
let home = $('#home').offset().top;
$(window).scroll(function () {
    if ($(window).scrollTop() > mainHead) {
        $('.navbar').css({ 'backgroundColor': '#574444', 'transition': '.5s' });
        $('.navbar').addClass('shadow','box-shadow-full');
        $('.nav-link').css({ 'color': 'black', 'transition': '.5s' });
    }
    else {
        $('.navbar').css({ 'backgroundColor': '#F5F5F5', 'transition': '.5s' });
        $('.navbar').removeClass('shadow','box-shadow-full');
        $('.nav-link').css({ 'color': 'white', 'transition': '.5s' });
    }
    if ($(window).scrollTop() > home) {
        $('.up-icon').fadeIn(500);
    }
    else{
        $('.up-icon').fadeOut(200);
    }
});
$('.up-icon').click(function () {
    $('body,html').animate({scrollTop: 0},100)
})
//***************************************statistics***************************************
let statistics = document.querySelectorAll(".statics .number");
let div = document.querySelector(".statics");

statistics.forEach((number) => startCount(number));
function startCount(el)
{
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal)
        {
            clearInterval(count)
        }
    }, 2500 / goal);
};
//***************************************typed***************************************
var typed = new Typed('.element', {
    strings: ['عزل وصيانة وتسريبات وتنظيف رواسب الخزان', 'وتعقيم الخزان قبل وبعد الغسيل', 'بأفضل جودة وأقل سعر'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});
var typed = new Typed('.element2', {
    strings: ['أفضل شركة نظافة منازل وشقق وفلل ' , 'بأفضل جودة وأقل سعر'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});
var typed = new Typed('.element3', {
    strings: ['أقوي شركة لرش المنازل من الداخل ومن الخارج' , 'ورش الحدائق والشركات وجنائن المنزل' , 'بأفضل جودة وأقل سعر'],
    typeSpeed: 100,
    backSpeed: 100,
    loop:true,
});

//***************************************loading***************************************
$(document).ready(function () {
    $('.loadinger').fadeOut(1500, function () {
        $('body').css('overflow','visible')
    })
})
//***************************************skitter***************************************
$(document).ready(function() {
    $(".skitter-large").skitter({
        interval:1000,
        with_animations:["cube","directionLeft","circlesRotate","cubeStopRandom","glassBlock","cut"]
    });
    
});
//***************************************contextmenu***************************************
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    $('#alert').removeClass('d-none');
});
document.addEventListener('scroll', function (e) {
    e.preventDefault();
    $('#alert').addClass('d-none');
});