(function () {
    'use strict';

    angular
        .module('app.graph')
        .controller('GraphController', AdminController);

    AdminController.$inject = ['logger'];
    /* @ngInject */
    function AdminController(logger) {
        var vm = this;
        vm.title = 'Graph';
        
        var canvas = document.getElementById("graph");
        var context = canvas.getContext("2d");
        context.fillStyle = "#FF0000";
        context.fillRect(0, 0, 150, 75);

        activate();

        function activate() {
            logger.info('Activated Graph View');
        }
    }
})();
