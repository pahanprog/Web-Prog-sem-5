const dictionary = {
    'hometitle': {ru: "СПБ теарт",en: "SPB theater"},
    'selected-lang': {ru: "РУС", en: "ENG"},
    'another-lang' : {ru: "ENG",en: "РУС"},
    'header_news': {ru: "Новости",en: "News"},
    'header_plays': {ru: "Афиша", en: "Plays"},
    'header_blog': {ru: "Блог", en: "Blog"},
    'header_rec': {ru: "Рекомендации", en: "Recommendations"},
    'header_theaters': {ru: "Театры", en: "Theaters"},
    'user_counter': {ru: "Пользователей онлайн", en: "Users online"},
    'slider_tag_news': {ru: "Новости", en: "News"},
    'slider_tag_blog': {ru: "Блог", en: "Blog"},
    'slider_news1': {ru: "Далеко-далеко за словесными горами в стране.", en: "Lorem ipsum dolor sit amet."},
    'slider_news2': {ru: "Далеко-далеко за словесными горами в стране гласных и согласных живут.", en: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    'slider_blog': {ru: "Далеко-далеко за словесными горами в стране гласных и согласных живут.", en: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
}

const lang  = ["ru","en"]
var userLang = navigator.language || navigator.userLanguage
var current_lang_index = userLang.split("-")[0] == lang[0] ? 0 : 1;

document.addEventListener('DOMContentLoaded',() => {
    translate();
})

function translate() {
    var elems = document.querySelectorAll('[data-translate]')
    Array.from(elems);
    elems.forEach(el => {
        el.innerHTML = dictionary[el.dataset.translate][lang[current_lang_index]]
    })
}

function change_lang() {
    current_lang_index = ++current_lang_index % 2
    translate();
}