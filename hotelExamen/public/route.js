(() => {
    'use strict'
    angular
        .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
        .config(routing);

    routing.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {
        $stateProvider
            .state('landingPage', {
                url: '/landingpage',
                templateUrl: './components/landingPage/landingPage.view.html',
                data: {
                    pageTitle: 'The Station'
                },
            })

            .state('InicioSesion', {
                url: '/InicioSesion',
                templateUrl: './components/InicioSesion/inicioSesion.view.html',
                data: {
                    pageTitle: 'Inicio de Sesión'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/InicioSesion/inicioSesion.controller.js')
                    }]
                },
                controller: 'inicioSesion',
                controllerAs: 'vm'
            })

            .state('listarHotel', {
                url: '/ListarHotel',
                templateUrl: './components/hoteles/ListarHotel/listarHotel.view.html',
                data: {
                    pageTitle: 'Lista de Hoteles'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/hoteles/ListarHotel/listarHotel.controller.js')
                    }]
                },
                controller: 'controladorListarHotel',
                controllerAs: 'vm'
            })

            .state('modificarHotel', {
                url: '/modificarHotel',
                templateUrl: './components/hoteles/modificarHotel/modificarHotel.view.html',
                data: {
                    pageTitle: 'Inicio de Sesión'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/hoteles/modificarHotel/modificarHotel.controller.js')
                    }]
                },
                controller: '',
                controllerAs: 'vm'
            })

            .state('PerfilHotel', {
                url: '/PerfilHotel',
                templateUrl: './components/hoteles/PerfilHotel/perfilHotel.view.html',
                data: {
                    pageTitle: 'Perfil'
                },
            })

            .state('registrarHotel', {
                url: '/registrarHotel',
                templateUrl: './components/hoteles/registrarHotel/registrarHotel.view.html',
                data: {
                    pageTitle: 'Registrar hotel'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/hoteles/registrarHotel/registrarHotel.controller.js')
                    }]
                },
                controller: 'ControladorRegistrarHotel',
                controllerAs: 'vm'
            })

            .state('main', {
                url: '/main',
                templateUrl: './components/main/main.view.html',
                data: {
                    pageTitle: 'Perfil'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/main/main.controller.js')
                    }]
                },
                controller: '',
                controllerAs: 'vm'
            })

            .state('modificarAdministradores', {
                url: '/modificarAdministradores',
                templateUrl: './components/usuarios/Administrador/modificarAdmin/modificarUsuario.view.html',
                data: {
                    pageTitle: 'Editar Perfil'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/usuarios/Administrador/modificarAdmin/modificarUsuario.controller.js')
                    }]
                },
                controller: '',
                controllerAs: 'vm'
            })

            .state('Perfil', {
                url: '/Perfil',
                templateUrl: './components/usuarios/Administrador/perfilAdmin/perfilUsuario.view.html',
                data: {
                    pageTitle: 'Editar Perfil'
                },
            })

            .state('registrarAdministradores', {
                url: '/registrarAdministradores',
                templateUrl: './components/usuarios/Administrador/registrarAdmin/registrarUsuario.view.html',
                data: {
                    pageTitle: 'Registrar Administrador'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/usuarios/Administrador/registrarAdmin/registrarUsuario.controller.js')
                    }]
                },
                controller: '',
                controllerAs: 'vm'
            })

            .state('listarClientes', {
                url: '/listarClientes',
                templateUrl: './components/usuarios/Cliente/listarCliente/listarCliente.view.html',
                data: {
                    pageTitle: 'Listar Clientes'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/usuarios/Cliente/listarCliente/listarCliente.controller.js')
                    }]
                },
                controller: '',
                controllerAs: 'vm'
            })


            .state('modificarClientes', {
                url: '/modificarClientes',
                templateUrl: './components/usuarios/Cliente/ModificarCliente/modificarCliente.view.html',
                data: {
                    pageTitle: 'Listar Clientes'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/usuarios/Cliente/ModificarCliente/modificarCliente.controller.js')
                    }]
                },
                controller: '',
                controllerAs: 'vm'
            })

            .state('perfilCliente', {
                url: '/perfilCliente',
                templateUrl: './components/usuarios/Cliente/PerfilCliente/perfilCliene.view.html',
                data: {
                    pageTitle: 'Listar Clientes'
                },
            })

            .state('registrarCliente', {
                url: '/registrarCliente',
                templateUrl: './components/usuarios/Cliente/registrarCliente/registrarCliente.view.html',
                data: {
                    pageTitle: 'Registrar'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/usuarios/Cliente/registrarCliente/registrarCliente.controller.js')
                    }]
                },
                controller: 'controladorRegistrarCliente',
                controllerAs: 'vm'
            })

        $urlRouterProvider.otherwise('/');
    }

})();