'use strict';

const data = ['https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-jump.png', 'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-on-foot.png', 'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-playground.png', 'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-top-view.png', 'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax.png'];

const sliderDomElement = document.getElementById('slider');

(function mainFunc(slider, dataArr) {
    let idx = 0;
    let len = dataArr.length;
    iterator();

    function iterator() {
        const dataItem = dataArr[idx];
        idx++;
        idx < len ? changeNext() : idx = 0;
        setTimeout(iterator, 500);
    }

    function changeNext() {
        slider.src = dataArr[idx];
    }
})(sliderDomElement, data);
