(() => {
    'use strict';
    angular
        .module('theStation')
        .controller('controladorMain', controladorMain);

        controladorMain.$inject = ['$state', 'loginService'];

    function controladorMain($state, loginService) {

        const userAuth = loginService.getAuthUser();

        console.log(userAuth);

        if(!userAuth){
            $state.go('inicioSesion');
        }

    }
})();