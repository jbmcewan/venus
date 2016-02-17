(function() {
    'use strict';

    angular
        .module('app.graph')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'graph',
                config: {
                    url: '/graph',
                    templateUrl: 'app/graph/graph.html',
                    controller: 'GraphController',
                    controllerAs: 'vm',
                    title: 'Graph',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Graph'
                    }
                }
            }
        ];
    }
})();
