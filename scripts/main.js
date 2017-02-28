'use strict';
let logicBoolean = false,
    offAndPlayMusic = false,
    soundLink = $("#sound-link")[0],
    startSound = $("#start-sound")[0],
    topFixedMenu = $('.header'),
    recognizer = new webkitSpeechRecognition();

/*** Инициальзация ***/
recognizer.lang = 'ru-Ru';
recognizer.interimResults = true;

$(function () {
    setInterval(function () {
        let heightScreen = window.pageYOffset;

        setTimeout(function () {
            if (heightScreen === 0) {
                topFixedMenu.css({background:'rgba(0, 0, 0, 1)',padding:'6px auto;'});
            } else {
                topFixedMenu.css({background:'rgba(0, 0, 0, 0.5)',padding: '4px auto;'});
            }
        }, 350);

        /** Отслежка скроллинга **/
        if (heightScreen < 400) {
                $('.scroll-top').fadeOut('slow', function () {
                    $(this).css({'display': 'none'});
                })
        } else {
            setTimeout(function () {
                $('.scroll-top').fadeIn('slow', function () {
                    $(this).css({'display': 'block'});
                })
            }, 1000);
        }
    }, 350)
});

function rightAnimationButton() {
    let rightBlock = $('.right-block'),
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
/** Паралакс **/
$('.section-1').parallax({imageSrc: './img/background-1.jpg'});
$('.section-2').parallax({imageSrc: './img/1.gif'});

/** Музыка **/
//animateOffAndPlayMusic();
function animateOffAndPlayMusic() {
    offAndPlayMusic = !offAndPlayMusic;

    if (offAndPlayMusic) {
        startSound.play();
        $('.block-on-off-value').css({'animation':'borderColor 20s infinite normal ease'});
        $('.scroll-button i').css({'animation':'animationColor 20s infinite normal ease'});
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

$(document).ready(function () {
    /** Виджеты **/
    VK.Widgets.Subscribe("vk_subscribe-block", {mode:2, height:50, width:140}, 85927952);
    VK.Widgets.CommunityMessages("vk_community_messages", 127607773, {expandTimeout: "10000",tooltipButtonText: "Есть вопрос? Задавайте..."});

    /** Скроллинг до нужного элемента **/
    $('.scroll-button').on('click','a', function (event) {
       event.preventDefault();
       let elementId  = $(this).attr('href'),
           elementTop = $(elementId).offset().top;
       $('body,html').animate({scrollTop: elementTop}, 1000);
   });
    $('.scroll-top').on('click','a', function (event) {
        rocketAnimation();
        event.preventDefault();
        let elementId  = $(this).attr('href'),
            elementTop = $(elementId).offset().top;
        $('body,html').animate({scrollTop: elementTop}, 3000);
    });

    /** Ajax форма **/
    $("#mail-message").submit(function() {
        let form_data = $(this).serialize(), //собераем все данные из формы
            messageBlock = document.createElement('p'),
            mainBlockMessage = $('.message-block');

        $.ajax({
            type: "POST",
            url: "scripts/mail.php",
            data: form_data,
            success: function() {
                mainBlockMessage.css({"display": "block"});
                messageBlock = "Сообщение отправлено!";
                mainBlockMessage.append(messageBlock);
                setTimeout(function () {
                    mainBlockMessage.remove();
                    messageBlock.remove();
                }, 3000);
            },
            error: function () {
                mainBlockMessage.css({"display": "block"});
                messageBlock = "Сообщение не отправлено!";
                mainBlockMessage.append(messageBlock);
                setTimeout(function () {
                    mainBlockMessage.remove();
                }, 3000);
            }
        });
    });
});

/** Анимация ракеты **/
function rocketAnimation() {
    let rocket = $('.scroll-top'),
        fireRocket = document.createElement('span'),
        cloud = document.createElement('div');

    cloud.className = 'cloud-animation';
    rocket.css({'animation':'topRocket 3s backwards normal ease-in'});

    rocket.append(fireRocket);
    $('.content').append(cloud);

    setTimeout(function () {
        $('.scroll-top img').attr("src", "img/starFlash.png");
    }, 2700);

    setTimeout(function () {
        fireRocket.remove();
        $('.scroll-top img').attr("src", "img/rocket.png");
        rocket.css({'animation':'none'});
    }, 3050);

    setTimeout(function () {
        cloud.remove();
    }, 6000);
}

/*** Голосовое управление ***/
function speech() {
    let microphone = $('#microphone'),
        resultMicrophone = $('#finalResultVoice');
    microphone.css({'color':'#00cd59'});
    recognizer.start();

    recognizer.onresult = function (event) {
        let result = event.results[event.resultIndex],
            informationStorage = '';

        if (result.isFinal) {
            informationStorage = result[0].transcript;
            setTimeout(function () {
                resultMicrophone.val('').hide();
            }, 5000);
        } else {
            resultMicrophone.val(informationStorage).show();
        }
        switch (informationStorage) {
            case ('найти автора'):
                window.location.href = '//new.vk.com/0nesuch07';
                break;
            default:
                console.log(result[0].transcript);
                setTimeout(function () {
                    microphone.css({'color':'orange'});
                }, 3000)
        }
        resultMicrophone.val(informationStorage);
    }
}