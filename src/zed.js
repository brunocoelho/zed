/**
 * Zed
 * Crop your media files
 *
 * Copyright 2013, Bruno Coelho and Rodrigo Alves
 *
 * @module Zed
*/

var Zed = {
    VERSION: "0.0.1"
};

Zed.crop = function (file) {
    "use strict";

    file.addEventListener('change', function (event) {

        // window.URL polyfill
        var link, URL = window.URL || window.webkitURL || window.msURL || window.oURL,
            file = this.files[0],
            audioUrl = URL.createObjectURL(file),
            audio = document.querySelector('audio'),
            slicedAudio,
            newAudio,
            blob,
            arrayBuffer,
            reader = new FileReader();

        audio.src = audioUrl;
        link = document.querySelector('a');
        link.href = audioUrl;

        reader.onloadend = function (evt) {
            if (evt.target.readyState === FileReader.DONE) { // DONE == 2
                arrayBuffer = evt.target.result;
                slicedAudio = new Blob([arrayBuffer]);
                audioUrl = URL.createObjectURL(slicedAudio);

                newAudio = document.getElementById('sliced-audio');
                newAudio.src = audioUrl;
            }
        };

        blob = file.slice(100000, 900000, file.type);
        reader.readAsArrayBuffer(blob);
    });
};
