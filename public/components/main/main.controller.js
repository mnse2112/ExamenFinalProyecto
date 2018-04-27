(() => {
    'use strict';
    angular
        .module('theStation')
        .controller('controladorMain', controladorMain);

        controladorMain.$inject = ['$state', 'loginService'];

    function controladorMain($state, loginService) {
        const vm = this;

        const userAuth = loginService.getAuthUser();


        if(!userAuth){
            $state.go('inicioSesion');
        }

        vm.user = userAuth;

        vm.userName = userAuth.getPrimerNombre();
    }
})();