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

    applycss('._3_hHr3kfEhbNYRFM5YJxH9{display:none !important;}'); // cache menu publicités
    Notification.requestPermission();
    const checkedFolder = 'Boîte de réception';
    const logo = 'https://ow2.res.office365.com/owamail/2019123003.05/resources/images/favicons/mail-seen.ico';
    let unreadMails = -1;

    setInterval(loop, 1000);

    function loop() {
        let newUnread = 0;
        try {
            newUnread = getUnreadMailsCount();
        } finally {
            if (newUnread > unreadMails && unreadMails !== -1) {
                onNewMail();
            }
            unreadMails = newUnread;
            JojoBadge.update(unreadMails);
        }
    }

    function onNewMail() {
        try {

            let firstIsUnread = document.getElementsByClassName('_1xP-XmXM1GGHpRKCCeOKjP')[0].getAttribute('aria-label').startsWith('Non lu');
            if (!firstIsUnread) {
                return;
            }
            
            let expediteur = document.getElementsByClassName('_3J_S6fOI4B5tFT8R6qMqT7')[0].firstElementChild.textContent;
            let sujet = document.getElementsByClassName('eMnO0knJStwnaHYEFIS0w')[0].firstElementChild.textContent;
            let contenu = document.getElementsByClassName('_1Cz6QWtbduTKlAyf910p0h')[0].textContent;

            let notification = new Notification(expediteur, {body: sujet + ' - ' + contenu, icon: logo});
            notification.onclick = function () {
                window.focus();
            };
        } catch (e) {
            console.log(e);
            let notification = new Notification('Outlook', {body: 'Nouveau mail\nExtension outdated', icon: logo});
            notification.onclick = function () {
                window.focus();
            };
        }

    }

    function getUnreadMailsCount() {
        let newUnread = 0;
        let treated = [];
        jQuery.each($("div[role*=treeitem][title*='" + checkedFolder + "']"), function (name, elem) {
            let $element = jQuery(elem);
            if (!treated.includes($element.title)) {
                newUnread += parseInt($element.find('span').find('span')[0].firstChild.data);
                treated.push($element.title);
            }
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
