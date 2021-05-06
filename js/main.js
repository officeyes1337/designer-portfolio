let text;
const trueLang = ['ru', 'eng']
$('.lang__link').click(function () {
    $('.lang__link').removeClass('lang__link_active')
    $(this).addClass('lang__link_active')
    text = $(this).text().toLowerCase()
    changeURLLanguage()
});

if (location.href.includes('#ru')) {
    $('.lang__link').removeClass('lang__link_active')
    $('.ru').addClass('lang__link_active');
}

function changeURLLanguage() {
    location.href = window.location.pathname + '#' + text
    location.reload();
}

function changeLang() {
    let hash = window.location.hash;
    hash = hash.slice(1)
    if (!trueLang.includes(hash)) {
        location.href = window.location.pathname + '#ru'
        location.reload()
    }
    $('.lang__link').removeClass('.lang__link_active')
    $('.' + hash).addClass('.lang__link_active')
    for (let i in langArray) {
        document.querySelector('.lng-' + i).innerHTML = langArray[i][hash]
    }
}
changeLang()

$('.header__burger').click(function () {
    $('.header__burger,.header__nav,.lang').toggleClass('active')
    $('body').toggleClass('lock')
});