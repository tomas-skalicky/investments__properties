// ==UserScript==
// @name         nehnutelnosti_sk__sell__bratislava__filter_out_unwanted
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Filter out unwanted districts, ownerships and so on
// @author       Tomas Skalicky
// @match        https://www.nehnutelnosti.sk/bratislava/*predaj/*
// @icon         https://www.google.com/s2/favicons?domain=nehnutelnosti.sk
// @grant        none
// @require      https://code.jquery.com/jquery-latest.js
// ==/UserScript==

window.jQuery.noConflict();
window.jQuery(document).ready(function($) {
    'use strict';

    ['Čunovo',
     'Devín',
     'Dúbravka',
     'Podunajské Biskupice',
     'Rača',
     'Vajnory',
     'Vlčie Hrdlo',
     'Vrakuňa'].forEach(function (unwanted_district) {
        // i ... for case insensitive
        $(`.advertisement-item div.advertisement-item--content__info[title*='${unwanted_district}' i]`).closest('.advertisement-item').hide()
        console.log(`Filtered out district '${unwanted_district}'. Occurrences `
                    + $(`.advertisement-item div.advertisement-item--content__info[title*='${unwanted_district}' i]`).length);
    });

    ['družstevný',
     'nebytový priestor'].forEach(function (blacklisted_in_content) {
        // i ... for case insensitive
        $(`.advertisement-content-text:contains('${blacklisted_in_content}')`).closest('.advertisement').hide()
        console.log(`Blacklisted in content '${blacklisted_in_content}'. Occurrences `
                    + $(`.advertisement-content-text:contains('${blacklisted_in_content}')`).length);
    });
})(window.jQuery);
