// ==UserScript==
// @name         nehnutelnosti_sk__filter_out_unwanted_advertisement_ids_and_keywords
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Filter out unwanted advertisement IDs and Keywords
// @author       Tomas Skalicky
// @match        https://www.nehnutelnosti.sk/*
// @icon         https://www.google.com/s2/favicons?domain=nehnutelnosti.sk
// @grant        none
// @require      https://code.jquery.com/jquery-latest.js
// ==/UserScript==

window.jQuery.noConflict();
window.jQuery(document).ready(function($) {
    'use strict';

    const unwanted_advertisement_ids = ['4352439', '4448178', '4450681', '4447042', '4357014', '4357015',
                                        '4357013', '4357012', '4450682', '4357016', '4431747', '4416923',
                                        '4399813', '4363655', '4423781', '1324', '4355028', '4433079',
                                        '4451621', '4408510', '4445975', '1346', '4259435', '4269149',
                                        '3877570', '4399280', '4416545', '4372418', '4355300', '4453124'];

    // https://www.nehnutelnosti.sk/moje-hladania/?
    unwanted_advertisement_ids.forEach(function (unwanted_advertisement_id) {
        const selector = `li.inzerat a.advertisement-box-image-top[href*='${unwanted_advertisement_id}']`;
        $(selector).closest('li.inzerat').hide();
        console.log(`https://www.nehnutelnosti.sk/moje-hladania/?: Filtered out unwanted advertisement with ID '${unwanted_advertisement_id}'. Occurrences ` + $(selector).length);
    });

    // https://www.nehnutelnosti.sk/predaj/*
    unwanted_advertisement_ids.forEach(function (unwanted_advertisement_id) {
        const id = `#adv-${unwanted_advertisement_id}`;
        $(id).hide();
        console.log(`https://www.nehnutelnosti.sk/predaj/*: Filtered out unwanted advertisement with ID '${unwanted_advertisement_id}'. Occurrences ` + $(id).length);
    });

    const unwanted_keywords = ['REZERVOVAN']

    // https://www.nehnutelnosti.sk/moje-hladania/?
    unwanted_keywords.forEach(function (unwanted_keyword) {
        // i  ... case insensitive
        const selector = `li.inzerat img[alt*='${unwanted_keyword}' i]`;
        $(selector).closest('li.inzerat').hide();
        console.log(`https://www.nehnutelnosti.sk/moje-hladania/?: Filtered out unwanted keywords '${unwanted_keyword}'. Occurrences ` + $(selector).length);
    });

    // https://www.nehnutelnosti.sk/predaj/*
    unwanted_keywords.forEach(function (unwanted_keyword) {
        const selector = `div.advertisement-item a.advertisement-item--content__title:contains('${unwanted_keyword}')`;
        $(selector).closest('div.advertisement-item').hide();
        console.log(`https://www.nehnutelnosti.sk/predaj/*: Filtered out unwanted keywords '${unwanted_keyword}'. Occurrences ` + $(selector).length);
    });
})(window.jQuery);
