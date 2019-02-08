const checkInit = setTimeout(function tick() {
    const triggers = document.querySelectorAll('.trigger');
    if (!triggers) {
        checkInit = setTimeout(tick, 100);
    } else {
        initModalUi();
    }    
}, 100);