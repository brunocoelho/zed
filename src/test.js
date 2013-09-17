window.onload = function WindowLoad(event) {
    console.log("page loaded.." + " version " + Zed.VERSION);
    var file = document.querySelector('input');

    Zed.crop(file);
};
