/* jshint devel:true */
/* global moment */
/* global HeadlineModule */
HeadlineModule.streamHeadline = (function() {
    'use strict';
    $(document).ready(function() {
        var loading = false;
        var myOffset = 0;
        fetchData(HeadlineModule.config.limitSize, myOffset);
        $(window).scroll(function() {
            if (!loading && ($(window).scrollTop() > $(document).height() - $(window).height() - HeadlineModule.config.loadTriggerOffset)) {
                loading = true;
                myOffset = myOffset + HeadlineModule.config.limitSize;
                fetchData(HeadlineModule.config.limitSize, myOffset);
                loading = false; 
            }
        });
    });

    var fetchData = function(myLimit, myOffset) {
        $.getJSON(HeadlineModule.config.uri, {
            limit: myLimit,
            offset: myOffset
        }).done(function(data) {
            data.news.sort(function(a, b) {
                var c = new Date(a.published);
                var d = new Date(b.published);
                return d - c;
            });
            $.each(data.news, function(i, headline) {
                if (headline.published && headline.title) {
                    $('<li><div class="headline">' + moment(headline.published).format('dddd, MMMM Do YYYY, h:mm a') + '<h2>' + headline.title + '</h2></div></li>').appendTo('#headlines');
                }
            });
            data = null;
        })
	.fail(function(jqXHR, textStatus) {
		alert('Request failed with status: ' + textStatus);
	});
		
    };
}());
