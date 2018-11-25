// ==UserScript==
// @name         jojo badge
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       jojo
// @match        https://www.facebook.com/*
// @match        *partage.insa-cvl.fr/*
// @match        https://www.messenger.com/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/favico.js/0.3.10/favico.min.js
// ==/UserScript==

(function () {
    'use strict';

    var favicon = new Favico({animation: 'none'});
    var oldNum = 0;
    var numToUpdate = 5;
    setInterval(loop, 1000);
    setTimeout(afterLoad, 4900);


    function loop() {
        let num = getTitleCount();
        if (oldNum !== num) {
            numToUpdate = 5;
        }
        oldNum = num;
        if (numToUpdate > 0){
            applyBadge(oldNum);
            numToUpdate = numToUpdate - 1;
        }
    }


    function applyBadge(count) {
        if (count > 99) {
            count = ':D';
        }
        //Tinycon.setBubble(count);
        console.log("applying " + count);
        favicon.badge(count);
    }
    
    
    function getTitleCount() {
        let num = parseInt(document.title.replace(/^\D+/g, ''), 10);
        if (isNaN(num)){
            num = 0;
        }
        return num;
    }
    
    
    function afterLoad() {
        let num = getTitleCount();
        if (num == 0){
            console.log('applying new favico');
            favicon = new Favico({animation: 'none'});
        }
        else {
            setTimeout(afterLoad, 1000);
        }
    }

})();