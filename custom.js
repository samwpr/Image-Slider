'use strict';

$(function(){

    /*Code below is assigning values with variables which can be confusing*/

    /*
    setInterval(function(){
        $('#slider .slides').animate({'margin-left': '-=720px'}, 1000);
    }, 3000);
    */

    /*Code with variables*/

    //Slider configuration variables
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //Cache DOM allows us to not have to look for #slider .slides all the time. 
    //Cache DOM allows us to look for it once and then just reference it 

    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');

    var interval;

    function startSlider(){
        interval = setInterval(function(){
        $slideContainer.animate({'margin-left': '-=' +width}, animationSpeed, function(){
            currentSlide++;
            if (currentSlide === $slides.length){
                currentSlide = 1;
                $slideContainer.css('margin-left', 0);
            }
        });
        }, pause);
    }

    function stopSlider(){
        clearInterval(interval);
    }

    $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

    startSlider();


});