angular.module('jdp').directive('c3Chart',['$timeout',function($timeout){
    return {
        restrict:'E',
        template: '<div></div>',
        scope:{
            bindTo: '@',
            config: '=',
            data: '=',
            label: '='
        },
        compile: function(){      
            return { 
                post: function($scope,element,attrs){                
                    var chart = {};
                    
                    // set id to bind to
                    element.attr('id',$scope.bindTo);
                    
                    // generate chart
                    chart = c3.generate(angular.extend({
                        bindTo: '#'+$scope.bindTo,
                        data: {
                            columns:$scope.data
                        }
                    },$scope.config));
                
                    // bind to data changes
                    $scope.$watch('data',function(){
                        chart.load({
                            columns:$scope.data
                        });
                    });            
                }
            };
        }
    };
}]);
