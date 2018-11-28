// ==UserScript==
// @name         jojo outlook
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       jojo
// @match        https://outlook.live.com/mail/*
// @grant        none
// @require      https://raw.githubusercontent.com/ghost58400/userscripts/master/jojo_badge.js
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function () {
    'use strict';

    applycss('._2qPmszDwBfYpF7PO9Mn3KN{display:none !important;}');
    Notification.requestPermission();
    const checkedFolder = 'Boîte de réception';
    const logo = 'https://ow2.res.office365.com/owamail/20181112.03/resources/images/favicons/mail-seen.ico';
    var unreadMails = -1;

    setInterval(loop, 1000);

    function loop() {
        let newUnread = getUnreadMailsCount();
        if (newUnread > unreadMails && unreadMails !== -1) {
            onNewMail();
        }
        unreadMails = newUnread;
        JojoBadge.update(unreadMails)
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