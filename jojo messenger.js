// ==UserScript==
// @name         jojo messenger
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       jojo
// @match        https://www.messenger.com/*
// @grant        none
// @require      https://raw.githubusercontent.com/ghost58400/userscripts/master/jojo_badge.js
// ==/UserScript==

(function () {
    'use strict';

    setInterval(loop, 1000);

    function loop() {
        let unread = 0;
        try {
            unread = document.getElementsByClassName('_1ht3').length;
            //avant premier message, rel="shortcut icon"
            //let test = $('link[rel="icon"]')[0]; // apres premier message
            let test = getIcon();
            if (test != null && test.type !== 'image/png') {
                test.href = 'https://static.xx.fbcdn.net/rsrc.php/yg/r/4_vfHVmZ5XD.ico';
                JojoBadge.updateFavico();
            }
        }
        finally {
            JojoBadge.update(unread);
        }

    }

    function getLinks() {
        let icons = [];
        let links = document.getElementsByTagName('head')[0].getElementsByTagName('link');
        for (let i = 0; i < links.length; i++) {
            if ((/(^|\s)icon(\s|$)/i).test(links[i].getAttribute('rel'))) {
                icons.push(links[i]);
            }
        }
        return icons;
    }

    function getIcon() {
        return getLinks()[0];
    }

})();
