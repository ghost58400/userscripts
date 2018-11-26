// ==UserScript==
// @name         jojo badge
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       jojo
// @match        https://www.facebook.com/*
// @match        https://www.messenger.com/*
// @match        https://partage.insa-cvl.fr/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/favico.js/0.3.10/favico.min.js
// ==/UserScript==

(function () {
    'use strict';

    window.myFavicon = new Favico({animation: 'none'});
    var number = 0;
    var numToUpdate = 5;
    setInterval(loop, 1000);

    function loop() {
        let newNum = getTitleCount();
        if (number !== newNum) {
            numToUpdate = 5;
        }
        number = newNum;
        if (numToUpdate > 0){
            window.myFavicon.badge(number);
            numToUpdate = numToUpdate - 1;
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