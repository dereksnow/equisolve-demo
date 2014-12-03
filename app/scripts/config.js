/* exported HeadlineModule */
var HeadlineModule = {
    config: {

        // Max number of items to fetch on each lazy load.
        limitSize: 10,

        // uri for JSON data
        uri: 'http://www.stellarbiotechnologies.com/media/press-releases/json',

        // Number of pixels between the bottom on the scrollbar and the bottom
        // of the window before lazy loading is triggered.
        loadTriggerOffset: 10
    }
};
