// ==UserScript==
// @name         jojo messenger
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  try to take over the world!
// @author       jojo
// @match        https://www.messenger.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/favico.js/0.3.10/favico.min.js
// ==/UserScript==

(function() {
    'use strict';
    var unread = 0;
    setInterval(loop, 1000);

    function loop() {
        unread = document.getElementsByClassName('_1ht3').length;
        //avant premier message, rel="shortcut icon"
        var test = $('link[rel="icon"]')[0]; // apres premier message
        if (test != null && test.type !== 'image/png'){
            test.href = 'https://static.xx.fbcdn.net/rsrc.php/y7/r/O6n_HQxozp9.ico';
            window.myFavicon = new Favico({animation: 'none'});
            console.log('a');
        }
    }

    // https://shibboleth.insa-cvl.fr/idp/Authn/UserPassword

})();