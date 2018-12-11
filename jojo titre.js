// ==UserScript==
// @name         jojo titre
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       jojo
// @match        *
// @grant        none
// @require      https://raw.githubusercontent.com/ghost58400/userscripts/master/jojo_badge.js
// ==/UserScript==

(function () {
    'use strict';

    setInterval(loop, 1000);

    function loop() {
        let num = 0;
        try {
            num = parseInt(document.title.replace(/^\D+/g, ''), 10);
            if (isNaN(num)) {
                num = 0;
            }
        }
        finally {
            JojoBadge.update(num);
        }
    }

})();