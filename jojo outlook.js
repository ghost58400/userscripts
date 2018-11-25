// ==UserScript==
// @name         jojo Outlook
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       jojo
// @match        *outlook.live.com/mail/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/favico.js/0.3.10/favico.min.js
// ==/UserScript==

(function () {
    'use strict';

    applycss('._2qPmszDwBfYpF7PO9Mn3KN{display:none !important;}');
    Notification.requestPermission();
    const checkedFolder = 'Boîte de réception';
    const logo = 'https://ow2.res.office365.com/owamail/20181112.03/resources/images/favicons/mail-seen.ico';
    var unreadMails = -1;
    var numToUpdate = 5;
    var favicon = new Favico({animation: 'none'});
    setInterval(loop, 1000);


    function loop() {
        let newUnread = getUnreadMailsCount();
        if (newUnread > unreadMails && unreadMails !== -1) {
            onNewMail();
        }
        if (newUnread !== unreadMails) {
            numToUpdate = 5;
        }
        unreadMails = newUnread;
        if (numToUpdate > 0) {
            applyBadge(newUnread);
            numToUpdate = numToUpdate - 1;
        }
    }


    function applyBadge(count) {
        if (count > 99) {
            //count = ':D';
        }
        console.log('Applying new bubble : ' + count);
        favicon.badge(count);
    }


    function onNewMail() {
        let expediteur = document.getElementsByClassName('JB7uCi4jMBH3ZOL7mTaYt')[0].firstChild.firstChild.textContent;
        let sujet = document.getElementsByClassName('_2oS4t0YANyzQh_CKsUMMbR')[0].firstChild.textContent;
        let contenu = document.getElementsByClassName('_3AS4zRv6-AOsdARqb5npCq')[0].textContent;

        let notification = new Notification(expediteur, {body: sujet + ' - ' + contenu, icon: logo});
        notification.onclick = function () {
            window.focus();
        };
    }


    function getUnreadMailsCount() {
        let newUnread = 0;
        jQuery.each($("div[role*=treeitem][title*='" + checkedFolder + "']"), function (name, elem) {
            let $element = jQuery(elem);
            newUnread += parseInt($element.find('span').find('span')[0].firstChild.data);
        });
        return newUnread;
    }


    function applycss(css) {
        let head = document.getElementsByTagName('head')[0];
        let s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.appendChild(document.createTextNode(css));
        head.appendChild(s);
    }

})();