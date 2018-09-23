'use strict';

const coreUI = (function () {
    let settings = {};
    let uiElements = {};
    let currentDataIndex = 0;
    let data = [];
    let dataCountElements = 0;

    const catchEvent = (event) => {
        const direction = detectingDirection(event.target.id);
        
        setCurrentIndex(direction);
        changePhoto(currentDataIndex);
    }

    const detectingDirection = (entryParam) => {
        let result = false;
        for (var [prop, value] of Object.entries(settings)) {
            value === entryParam ? result = prop : false;
        }

        return result;
    }

    const changePhoto = () => {
        uiElements.view.currentPhoto.src = data[currentDataIndex]
    }

    const setCurrentIndex = (direction) => {
        switch (direction) {
            case 'next':
                currentDataIndex++;
                if(currentDataIndex >= dataCountElements) currentDataIndex = 0;
                break;
            case 'prev':
                currentDataIndex--;
                if(currentDataIndex < 0) currentDataIndex = (dataCountElements - 1);
                break;
        
            default:
                throw new Error('DOM элемент не найден');
                break;
        }
    }

    const getUiElements = (settingsObj) => {
        const prevBtnDomElement = document.getElementById(settingsObj.prev);
        const nextBtnDomElement = document.getElementById(settingsObj.next);
        const currentPhotoDomElement = document.getElementById(settingsObj.currentPhoto);

        return {
            'controls' : [prevBtnDomElement, nextBtnDomElement],
            'view' : {
                'currentPhoto' : currentPhotoDomElement
            }
        }
    }

    return {
        init: function (settingsObj, dataSet) {
            settings = settingsObj;
            data = dataSet;
            dataCountElements = data.length;
            uiElements = getUiElements(settingsObj);
            
            uiElements.controls.forEach((element) => element.addEventListener('click', catchEvent));
            changePhoto(0);
        }
    }
}());

const data = ['i/breuer-building.jpg', 'i/guggenheim-museum.jpg', 'i/headquarters.jpg', 'i/IAC.jpg', 'i/new-museum.jpg'];

coreUI.init({
    'prev' : 'prevPhoto',
    'next' : 'nextPhoto',
    'currentPhoto' : 'currentPhoto'
}, data);
