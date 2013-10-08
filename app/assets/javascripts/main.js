window.onload = function WindowLoad(event) {
    console.log('page loaded.. version ' + Zed.VERSION);
    var inputFile = document.querySelector('input');

    Zed.crop(inputFile);
};