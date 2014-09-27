angular.module('jdp').directive('c3Chart',function(){
    return {
        restrict:'E',
        template: '<div id="{{bindTo}}"></div>',
        scope:{
            bindTo: '@',
            config: '=',
            data: '=',
            label: '='
        },
        link: function($scope,element,attrs){
        
            var chart = c3.generate({
                bindTo: '#chart',
                data: {
                    columns:[['Polynomial Terms'].concat($scope.data)]
                }
            });
            
            // bind to data changes
            $scope.$watch('data',function(){
                chart.load({
                    columns:[['Polynomial Terms'].concat($scope.data)]
                });
            });
          
        }
    };
});
