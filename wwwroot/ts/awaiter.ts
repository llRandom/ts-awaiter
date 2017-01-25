angular.module('ts-awaiter', []).run(['$window', '$q', ($window: ng.IWindowService, $q: ng.IQService) => {
    (<any>$window).Promise = $q;
}]);