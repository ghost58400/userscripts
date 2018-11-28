// ==UserScript==
// @name         jojo zimbra
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       jojo
// @match        https://partage.insa-cvl.fr/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/favico.js/0.3.10/favico.min.js

// @require      https://raw.githubusercontent.com/ghost58400/userscripts/master/jojo_badge.js
// ==/UserScript==

(function () {
    'use strict';

    setInterval(loop, 1000);

    function loop() {
        let inboxFolderLabel = document.getElementById('zti__main_Mail__2_textCell');
        let num = inboxFolderLabel.textContent.slice(inboxFolderLabel.textContent.indexOf('(')+1, -1);
        JojoBadge.update(num);
    }

    // https://shibboleth.insa-cvl.fr/idp/Authn/UserPassword

})();