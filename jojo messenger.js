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
        let unread = document.getElementsByClassName('_1ht3').length;
        //avant premier message, rel="shortcut icon"
        //let test = $('link[rel="icon"]')[0]; // apres premier message
        let test = getIcon();
        if (test != null && test.type !== 'image/png') {
            test.href = 'https://static.xx.fbcdn.net/rsrc.php/y7/r/O6n_HQxozp9.ico';
            JojoBadge.updateFavico();
        }
        JojoBadge.update(unread);
    }

    function getIcon() {
        let links = document.getElementsByTagName('link');
        for (let link of links){
            if (link.rel === 'icon'){
                return link;
            }
        }
        return null;
    }

})();