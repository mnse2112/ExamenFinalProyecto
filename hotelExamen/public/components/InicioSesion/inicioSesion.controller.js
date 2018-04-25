(() => {
    angular
        .module('hotelExamen')
        .controller('inicioSesion', inicioSesion);

        inicioSesion.$inject = ['$state', 'loginService'];

    function inicioSesion($state, loginService) {
        const vm = this;

        vm.datos = {};

        vm.login = (datos) => {
            let success = loginService.logIn(datos);

            if (success == true) {
                $state.go('main');
            } else {
                swal({
                    title: "Inicio de sesión fallido",
                    text: "Los datos ingresados son incorrectos",
                    icon: "error",
                    button: "Aceptar",
                });
            }
        }
    }
})();