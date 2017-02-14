'use strict';
var logicBoolean = false,
    offAndPlayMusic = false,
    soundLink = $("#sound-link")[0],
    startSound = $("#start-sound")[0],
    topFixedMenu = $('.header');

$(function () {
    setInterval(function () {
        var heightScreen = window.pageYOffset;

        setTimeout(function () {
            var shadowingHeightScreen;
            shadowingHeightScreen = heightScreen;

            if (shadowingHeightScreen > heightScreen || heightScreen === 0) {
                topFixedMenu.css({background:'rgba(0, 0, 0, 1)',padding:'6px auto;'});
            } else {
                topFixedMenu.css({background:'rgba(0, 0, 0, 0.5)',padding: '4px auto;'});
            }
        }, 350);
    }, 350)
});

function rightAnimationButton() {
    var rightBlock = $('.right-block'),
        leftBlock = $('.left-block');

        $("#clickMusic").click(function() {
            soundLink.play();
        });

        logicBoolean = !logicBoolean;

    if (logicBoolean) {
        leftBlock.css({'flex-grow':'1','width': '55%'});
        rightBlock.show('slow').css({'display':'inherit','flex-grow':'2.5','width': '45%'});
        $('#one').css({margin:'-3px auto','border-radius':'100%'}).rotate({animateTo: 235});
        $('#two').css({'display':'none'});
        $('#three').css({margin:'-3px auto','border-radius':'100%'}).rotate({animateTo: 305});
    } else {
        rightBlock.hide('slow').css({'flex-grow':'0'});
        leftBlock.css({'width':'0'});
        $('#one').css({margin:'0 auto', 'border-radius':'0'}).rotate({animateTo: 0});
        $('#two').fadeIn('2500', function () {$(this).css({'display':'flex', 'margin':'2px auto'});});
        $('#three').css({margin:'0 auto', 'border-radius':'0'}).rotate({animateTo: 0});
    }
}

$('.parallax-window').parallax({imageSrc: './img/content/background-1.jpg'});

animateOffAndPlayMusic();
function animateOffAndPlayMusic() {
    offAndPlayMusic = !offAndPlayMusic;

    if (offAndPlayMusic) {
        startSound.play();
        $('.block-on-off-value').css({'animation': 'borderColor 20s infinite normal ease'});
        $('.block-on-off-value span:nth-child(1)').css({'animation':'oneAnimate 1s infinite alternate ease'});
        $('.block-on-off-value span:nth-child(2)').css({'animation':'twoAnimate 1s infinite normal ease'});
        $('.block-on-off-value span:nth-child(3)').css({'animation':'threeAnimate 1s infinite normal ease'});
        $('.block-on-off-value span:nth-child(4)').css({'animation':'twoAnimate 1s infinite normal ease'});
        $('.block-on-off-value span:nth-child(5)').css({'animation':'oneAnimate 1s infinite normal ease'});
    } else {
        startSound.pause();
        $('.block-on-off-value span:nth-child(-n+5)').css({'animation-name': 'oneAnimate, twoAnimate,threeAnimate', 'animation-play-state': 'paused'});
    }
}