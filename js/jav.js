$('.seg').slick({
    centerMode:false,
    slidesToShow:1,
    arrows:false,
    dots:true,
    responsive:[
        {
            breakpoint:834,
            settings:{
                centerMode:false,
                slidesToShow:1,
                arrows:false,
                dots:true,
            }
        }
    ]
});

/*função click menu*/

$('.meni').click(function(){
    $('.vent').find('ul').slideToggle();
});


