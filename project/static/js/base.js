var APP = {};

APP.init_placeholder = function() {
    // placeholder for old browsers
    $('input, textarea').placeholder();
};

APP.external_links = function() {
    // open external links in new window
    $('a[href*="http://"]:not([href*="' + location.hostname + '"]), a[href*="https://"]:not([href*="' + location.hostname + '"])')
        .addClass('external')
        .attr('target', '_blank')
        .attr('title', 'Open in nieuw venster');
};

APP.download_links = function() {
    // open download links in new window
    $('a[href$=".pdf"], a[href$=".doc"], a[href$=".docx"], a[href$=".xls"], a[href$=".xlsx"], a[href$=".zip"], a[href$=".gz"]')
        .addClass('download')
        .attr('target', '_blank');
};

$(function() {
    APP.init_placeholder();
    APP.external_links();
    APP.download_links();
});
