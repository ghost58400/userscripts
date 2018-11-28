// ==UserScript==
// @name         jojo badge
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       jojo
// @match        https://www.facebook.com/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/favico.js/0.3.10/favico.min.js

// @require      https://raw.githubusercontent.com/ghost58400/userscripts/master/jojo_badge.js
// ==/UserScript==

    (function () {
        'use strict';

        setInterval(loop, 1000);

        function loop() {
            let num = parseInt(document.title.replace(/^\D+/g, ''), 10);
            if (isNaN(num)){
                num = 0;
            }
            JojoBadge.update(num);
        }

    })();