(function(){
    var fizzComponent = {
        template: '<input type="text" ng-model="number"><button ng-click = "go.test(number)">test</button> <p> {{}} </p>',
        restrict: "e",
        controller: "FizzNum as go",
        


    }
    angular
    .module("app")
    .component("fizzComponent",fizzComponent);
})();