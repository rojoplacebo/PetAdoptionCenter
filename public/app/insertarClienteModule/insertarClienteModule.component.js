'use strict';
angular.module('insertarClienteModule',[]);
angular.module('insertarClienteModule')
    .component('insertarClienteModule', {
        templateUrl:'/app/insertarClienteModule/insertarClienteModule.html',
        controller: function($scope, $http) {
            console.log("Inicializando insertar-clientes-module")
        }
    }).controller('InsertarClienteController', function($scope, $http, $location, clienteRESTService){
        $scope.cliente = {};
        $scope.insertarCliente = function(){
            clienteRESTService.save($scope.cliente);
            /*$http.post('api/clientes', $scope.cliente).then(function(response){
                console.log(response);
            });*/
        }
    });