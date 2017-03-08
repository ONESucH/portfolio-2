'use strict';
let logicBoolean = false,
    offAndPlayMusic = false,
    soundLink = $('#sound-link')[0],
    startSound = $('#start-sound')[0],
    topFixedMenu = $('.header');

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
            let arr = ['отправить сообщение', 'найти автора', 'узнать статистику', 'посмотреть работы'],
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
    }, 1000);

    /** Информация о пользователе **/
    setTimeout(function () {
        $.getJSON('//freegeoip.net/json/?callback=?', function(data) {
            let dataUsers = JSON.stringify(data, null, 2);

            $.ajax({
                url: 'scripts/dataUsers.php',
                type: 'POST',
                data: 'locationUsers=' + dataUsers,
                error: function () {
                    console.log('Не получено');
                }
            });
        });
    }, 5000)
});

/** Паралакс **/
$('.section-1').parallax({imageSrc: 'img/night-mac.jpg'});
$('.section-2').parallax({imageSrc: 'img/day-mac.jpg'});

/** Виджеты **/
VK.Widgets.Subscribe('vk_subscribe-block', {mode:2, height:50, width:140}, 85927952);
VK.Widgets.CommunityMessages('vk_community_messages', 127607773, {expandTimeout: '40000',tooltipButtonText: 'Есть вопрос? Задавайте...'});

/** Скролинг до нужного элемента **/
$('.scroll-button').on('click', function () {
    $('body,html').animate({scrollTop: $('.section-2').offset().top}, 1400);
});
$('.scroll-top').on('click', function () {
    rocketAnimation();
    $('body,html').animate({scrollTop: $('.content').offset().top}, 3000);
});

/** Выдвигающиеся блоки **/
function rightAnimationButton() {
    let rightBlock = $('.right-block'),
        leftBlock = $('.left-block');

    $('#clickMusic').click(function() {
        soundLink.play();
    });

    if (!logicBoolean) {
        leftBlock.css({'width':'65%'});
        rightBlock.css({'width':'35%'}).show('2000');
        $('#one').css({margin:'-3px auto','border-radius':'100%'}).rotate({animateTo: 235});
        $('#two').hide();
        $('#three').css({margin:'-3px auto','border-radius':'100%'}).rotate({animateTo: 305});
        return setTimeout(function () {
            logicBoolean = true;
        }, 1100);
    } else {
        leftBlock.css({'width':'100%'});
        rightBlock.css({'width':'0'}).hide('2000');
        $('#one').css({margin:'0 auto','border-radius':'0'}).rotate({animateTo: 0});
        $('#two').show();
        $('#three').css({margin:'0 auto','border-radius':'0'}).rotate({animateTo: 0});
        return setTimeout(function () {
            logicBoolean = false;
        }, 1100);
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
        url: 'scripts/mail.php',
        type: 'POST',
        data: form_data,
        success: function() {
            messageBlock.style.display = 'block';
            messageBlock.innerHTML = '<p>Сообщение отправлено</p>';
            setTimeout(function () {
                $('#user_name, #user_message').val('');
            }, 500)
        },
        error: function () {
            messageBlock.style.display = 'block';
            messageBlock.innerHTML = '<p>Ошибка при отправке</p>';
            console.log('Не получено');
            setTimeout(function () {
                $('#user_name, #user_message').val('');
            }, 30000)
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
        fireRocket = document.createElement('span');

    rocket.css({'animation':'topRocket 3s backwards normal ease-in'});

    rocket.append(fireRocket);

    setTimeout(function () {
        $('.scroll-top img').attr('src', 'img/starFlash.png');
    }, 2700);
    setTimeout(function () {
        fireRocket.remove();
        $('.scroll-top img').attr('src', 'img/rocket.png');
        rocket.css({'animation':'none'});
    }, 3100);
}

/*** Голосовое управление ***/
function speech(trueClick) {
    let browser = navigator.userAgent;

    if (browser.search(/Chrome/) != -1) {
        /*** Инициальзация голосовых модулей ***/
        let recognizer = new webkitSpeechRecognition();

        recognizer.lang = 'ru-Ru';
        recognizer.interimResults = true;

        if (trueClick) {
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
                    case ('узнать статистику'):
                        window.location.href = '//github.com/ONESucH';
                        break;
                    case ('посмотреть работы'):
                        window.location.href = '//github.com/ONESucH?tab=repositories';
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
    } else {
        alert('Голосовое управление это DEMO разработка и работает только в Chrome');
        return false;
    }
}

/** Узнаем Браузер пользователя и систему **/
$(document).ready(function () {
    let BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || 'Браузер не определен';
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || 'Версия не обнаружена';
            this.OS = this.searchString(this.dataOS) || 'Система не определена';
        },
        searchString: function (data) {
            for (let i=0;i<data.length;i++) {
                let dataString = data[i].string;
                let dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1)
                        return data[i].identity;
                } else if (dataProp)
                    return data[i].identity;
            }
        },
        searchVersion: function (dataString) {
            let index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
        },
        dataBrowser: [
            {
                string: navigator.userAgent,
                subString: 'Chrome',
                identity: 'Chrome'},
            {
                string: navigator.userAgent,
                subString: 'OmniWeb',
                versionSearch: 'OmniWeb/',
                identity: 'OmniWeb'},
            {
                string: navigator.vendor,
                subString: 'Apple',
                identity: 'Safari',
                versionSearch: 'Version'},
            {
                prop: window.opera,
                identity: 'Opera',
                versionSearch: 'Version'},
            {
                string: navigator.vendor,
                subString: 'iCab',
                identity: 'iCab'},
            {
                string: navigator.vendor,
                subString: 'KDE',
                identity: 'Konqueror'},
            {
                string: navigator.userAgent,
                subString: 'Firefox',
                identity: 'Firefox'},
            {
                string: navigator.vendor,
                subString: 'Camino',
                identity: 'Camino'},
            {
                /* Для более новых (6+) */
                string: navigator.userAgent,
                subString: 'Netscape',
                identity: 'Netscape'},
            {
                string: navigator.userAgent,
                subString: 'MSIE',
                identity: 'Internet Explorer',
                versionSearch: 'MSIE'},
            {
                string: navigator.userAgent,
                subString: 'Gecko',
                identity: 'Mozilla',
                versionSearch: 'rv'},
            {
                /* Для более старых (4-) */
                string: navigator.userAgent,
                subString: 'Mozilla',
                identity: 'Netscape',
                versionSearch: 'Mozilla'}
        ],
        dataOS : [
            {
                string: navigator.platform,
                subString: 'Win',
                identity: 'Windows'},
            {
                string: navigator.platform,
                subString: 'Mac',
                identity: 'Mac'},
            {
                string: navigator.userAgent,
                subString: 'iPhone',
                identity: 'iPhone/iPod'},
            {
                string: navigator.platform,
                subString: 'Linux',
                identity: 'Linux'}
        ],
    };
BrowserDetect.init();
document.getElementById('name').innerHTML = BrowserDetect.browser;
document.getElementById('version').innerHTML = BrowserDetect.version;
document.getElementById('os').innerHTML = BrowserDetect.OS;
});