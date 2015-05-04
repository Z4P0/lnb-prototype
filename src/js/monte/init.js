(function (window, document, undefined) {
    'use strict';

    window.lnb = {
        init: function() {
            console.log('hello from: main.js');
        }
    };

    $(document).ready(function () {
        $(document).foundation();
        lnb.init();
    });

}(window, window.document));
