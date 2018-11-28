// ==UserScript==
// @name         jojo badge
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       jojo
// @match        https://www.facebook.com/*
// @match        https://www.messenger.com/*
// @match        https://partage.insa-cvl.fr/*
// @match        https://outlook.live.com/mail/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/favico.js/0.3.10/favico.min.js
// ==/UserScript==

(function () {
    'use strict';

    window.jojoFavicon = new Favico({animation: 'none'});
    window.jojoBadge = 0;
    var numToUpdate = 5;
    var updatesSkipped = 0;
    setInterval(loop, 1000);

    function loop() {
        let newNum = getTitleCount();
        if (window.jojoBadge !== newNum) {
            numToUpdate = 5;
        }
        if (updatesSkipped >= 4){
            numToUpdate = 1;
        }
        if (numToUpdate > 0){
            window.jojoFavicon.badge(newNum);
            console.log('badge updated to ' + newNum);
            numToUpdate = numToUpdate - 1;
            updatesSkipped = 0;
            window.jojoBadge = newNum;
        }
        else {
            updatesSkipped = updatesSkipped + 1;
        }
    }
    
    function getTitleCount() {
        let num = 0;
        if (window.location.href.includes('https://partage.insa-cvl.fr/') ){
            let inboxFolderLabel = document.getElementById('zti__main_Mail__2_textCell');
            num = inboxFolderLabel.textContent.slice(inboxFolderLabel.textContent.indexOf('(')+1, -1);
        }
        else {
            num = parseInt(document.title.replace(/^\D+/g, ''), 10);
            if (isNaN(num)){
                num = 0;
            }
        }

        return num;
    }

})();