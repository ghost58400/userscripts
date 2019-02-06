// ==UserScript==
// @name         jojo zimbra
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       jojo
// @match        https://partage.insa-cvl.fr/*
// @grant        none
// @require      https://raw.githubusercontent.com/ghost58400/userscripts/master/jojo_badge.js
// ==/UserScript==

(function () {
    'use strict';

    setInterval(loop, 1000);

    function loop() {
        let inboxFolderLabel = '';

        let num = 0;
        try {
            inboxFolderLabel = document.getElementById('zti__main_Mail__2_textCell');
            if (inboxFolderLabel != null) {
                num = inboxFolderLabel.textContent.slice(inboxFolderLabel.textContent.indexOf('(') + 1, -1);
            }
            num = Number(num);
            if (isNaN(num)){
                num = 0;
            }
        }
        finally {
            JojoBadge.update(num);
        }
    }

    // https://shibboleth.insa-cvl.fr/idp/Authn/UserPassword

})();