/*!
 * monte v0.0.7 (http://www.luisrosar.io/lab/monte)
 * Copyright 2014-2015 luis rosario {zapo}
 * Licensed under MIT (https://github.com/aztec8/monte/blob/master/LICENSE)
 */

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

//# sourceMappingURL=main.js.map