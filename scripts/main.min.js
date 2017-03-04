'use strict';
let logicBoolean = false,
    offAndPlayMusic = false,
    soundLink = $('#sound-link')[0],
    startSound = $('#start-sound')[0],
    topFixedMenu = $('.header'),
    recognizer = new webkitSpeechRecognition();

/*** Проверка ширины браузера ***/
$(function() {
    let widthWindowBrowser = innerWidth,
        blockTeamManagement = document.createElement('div');

    if (widthWindowBrowser < 650) {
        blockTeamManagement.remove();
    } else {
        blockTeamManagement.className = 'block-team-management';
        blockTeamManagement.innerHTML = '<a>Голосовые команды</a>';
        setInterval(function () {
            let arr = ['отправить сообщение', 'найти автора'],
                rand = Math.floor(Math.random() * arr.length),
                arrTextResult = document.createElement('p');

            arrTextResult.innerText = arr[rand];
            setInterval(function () {
                arrTextResult.innerText = '';
            }, 2495);
            blockTeamManagement.append(arrTextResult);
        },2500);
        $('.all-message-block').append(blockTeamManagement);
    }
});

$(function () {
    /** Фон Header **/
    setInterval(function () {
        let heightScreen = window.pageYOffset;

        setTimeout(function () {
            if (heightScreen === 0) {
                topFixedMenu.css({background:'rgba(0, 0, 0, 1)',padding:'6px auto;'});
            } else {
                topFixedMenu.css({background:'rgba(0, 0, 0, 0.5)',padding:'4px auto;'});
            }
        }, 350);

        /** Отслежка скроллинга **/
        if (heightScreen < 400) {
                $('.scroll-top').fadeOut('100', function () {
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

/*** Инициальзация ***/
recognizer.lang = 'ru-Ru';
recognizer.interimResults = true;

/** Паралакс **/
$('.section-1').parallax({imageSrc: 'img/night-mac.jpg'});
$('.section-2').parallax({imageSrc: 'img/day-mac.jpg'});

/** Виджеты **/
VK.Widgets.Subscribe('vk_subscribe-block', {mode:2, height:50, width:140}, 85927952);
VK.Widgets.CommunityMessages('vk_community_messages', 127607773, {expandTimeout: '10000',tooltipButtonText: 'Есть вопрос? Задавайте...'});

/** Скролинг до нужного элемента **/
$('.scroll-button').on('click','a', function (event) {
    event.preventDefault();
    let elementId = $(this).attr('href'),
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

/** Выдвигающиеся блоки **/
function rightAnimationButton() {
    let rightBlock = $('.right-block'),
        leftBlock = $('.left-block');

        $('#clickMusic').click(function() {
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
        $('#one').css({margin:'0 auto','border-radius':'0'}).rotate({animateTo: 0});
        $('#two').fadeIn('2500', function () {$(this).css({'display':'flex', 'margin':'2px auto'});});
        $('#three').css({margin:'0 auto','border-radius':'0'}).rotate({animateTo: 0});
    }
}

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
        $('.block-on-off-value span:nth-child(-n+5)').css({'animation-name':'oneAnimate,twoAnimate,threeAnimate', 'animation-play-state': 'paused'});
    }
}

/** Ajax форма **/
$('#mail-message').submit(function() {
    let form_data = $(this).serialize(),
        messageBlock = document.createElement('div');

    messageBlock.className = 'message-block';

    $.ajax({
        url: 'mail.php',
        type: 'GET',
        data: form_data,
        async: true,
        success: function() {
            messageBlock.style.display = 'block';
            messageBlock.innerHTML = '<p>Сообщение отправлено</p>';
            setTimeout(function () {
                $('#user_name').val('');
                $('#user_message').val('');
            }, 500)
        },
        error: function () {
            messageBlock.style.display = 'block';
            messageBlock.innerHTML = '<p>Ошибка</p>';
        }
    });
    setTimeout(function() {
        messageBlock.style.opacity = '.2';
    }, 4000);
    setTimeout(function() {
        messageBlock.remove()
    }, 5000);
    $('.all-message-block').append(messageBlock);
    rightAnimationButton();
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
        $('.scroll-top img').attr('src', 'img/starFlash.png');
    }, 2700);

    setTimeout(function () {
        fireRocket.remove();
        $('.scroll-top img').attr('src', 'img/rocket.png');
        rocket.css({'animation':'none'});
    }, 3100);

    setTimeout(function () {
        cloud.remove();
    }, 6000);
}

/*** Голосовое управление ***/
function speech() {
    let microphone = $('#microphone'),
        resultMicrophone = $('#finalResultVoice');

    microphone.css({'color':'#7cfc00'});
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
            case ('Отправить сообщение'):
                if (!logicBoolean) {
                    rightAnimationButton();
                } else {
                    return false;
                }
                break;
            default:
                console.log(result[0].transcript);
                resultMicrophone.val('Команда не найдена');
                setTimeout(function () {
                    microphone.css({'color':'orange'});
                }, 3000);
            resultMicrophone.val(result[0].transcript);
        }
        resultMicrophone.val(informationStorage);
    }
}