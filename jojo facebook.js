// ==UserScript==
// @name         jojo facebook
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       jojo
// @match        https://www.facebook.com/*
// @grant        none
// @require      https://raw.githubusercontent.com/ghost58400/userscripts/master/jojo_badge.js
// ==/UserScript==

(function () {
    'use strict';

    setInterval(loop, 1000);

    function loop() {
        let num = 0;
        try {
            num = parseInt(document.getElementById('notificationsCountValue').innerText, 10);
        }
        finally {
            JojoBadge.update(num);
        }
    }

})();