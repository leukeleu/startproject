// namespace all code
var DFSP = {};

DFSP.init = function() {

	// call base methods
	DFSP.base.externalLinks();
	DFSP.base.downloadLinks();
};

DFSP.base = {};

DFSP.base.externalLinks = function() {
	// open external links in new window
	$('a[href*="http://"]:not([href*="' + location.hostname + '"]), a[href*="https://"]:not([href*="' + location.hostname + '"])')
		.addClass('external')
		.attr('target', '_blank')
		.attr('title', 'Open in nieuw venster');
};

DFSP.base.downloadLinks = function() {
	// open download links in new window
	$('a[href$=".pdf"], a[href$=".doc"], a[href$=".docx"], a[href$=".xls"], a[href$=".xlsx"], a[href$=".zip"], a[href$=".gz"]')
		.addClass('download')
		.attr('target', '_blank');
};

$(function() {
	DFSP.init();
});
