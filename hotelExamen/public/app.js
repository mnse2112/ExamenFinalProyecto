(() => {
    'use strict';
    angular
    .module('hotelExamen', ['appRoutes', 'ngMessages', 'duScroll', 'ngFileUpload', 'ngAnimate', 'ngMap'])
    .value('duScrollDuration', 2000)
    .value('duScrollOffset', 30);

})();