(() => {
    'use strict';
    angular
    .module('theStation')
    .service('servicioImagen', servicioImagen);
  
    servicioImagen.$inject = ['$http'];
  
    function servicioImagen($http){
      const cloudObj = {
        url:'https://api.cloudinary.com/v1_1/dmsioqa3u/image/upload',
        data:{
          upload_preset: 'theStation',
          tags:'Any',
          context:'photo=test'
        }
      };
  
      const uploadAPI = {
        getConfiguration : _getConfiguration
      };
      return uploadAPI;
  
      function _getConfiguration() {
        return cloudObj;
      }
    };
  })();