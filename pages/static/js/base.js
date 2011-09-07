// namespace all code
var DFE = {};

DFE.init = function() {
	// call all base methods
	for (var basefn in this.base) {
		if (this.base.hasOwnProperty(basefn)) {
			this.base[basefn]();
	    }
	}
};

DFE.base = {};

DFE.base.externalLinks = function() {
	// open external links in new window
	$('a[href*="http://"]:not([href*="' + location.hostname + '"]), a[href*="https://"]:not([href*="' + location.hostname + '"])')
		.addClass('external')
		.attr('target', '_blank')
		.attr('title', 'Open in nieuw venster');
};

DFE.base.downloadLinks = function() {
	// open download links in new window
	$('a[href$=".pdf"], a[href$=".doc"], a[href$=".docx"], a[href$=".xls"], a[href$=".xlsx"], a[href$=".zip"], a[href$=".gz"]')
		.addClass('download')
		.attr('target', '_blank');
};

$(function() {
	DFE.init();
});
