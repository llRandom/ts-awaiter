interface IMyService {
    get: ((userId: number) => Promise<string>)
}

function myService($q: ng.IQService, $http: ng.IHttpService): IMyService {
    return {
        get: async function (userId: number) {
            let response = await $http.get(`/posts?userId=${userId}`);
            let posts = <any[]>response.data;
            response = await $http.get(`/users/${userId}`);
            let user = <any>response.data;            
            return `user ${user.name} has ${posts.length} post(s)`;
        }
    };
}

function mainController($scope: ng.IScope & any, myService: IMyService, $timeout: ng.ITimeoutService, $q: ng.IQService) {
    $scope.getFirst = async function () {        
        $scope.response = 'waiting.';
        await $timeout(1000);
        $scope.response = 'waiting..';
        await $timeout(1000);
        $scope.response = 'waiting...';
        $scope.response = await myService.get(1);
    };

    $scope.getSecond = async function () {        
        $scope.response = 'waiting.';

        var response = await Promise.all<string, void>([
            myService.get(2), 
            $timeout(1000)
        ]);
        $scope.response = response[0];
    };
}

let module = angular.module('ts-async', ['ts-awaiter']);
module.controller('mainController', ['$scope', 'myService', '$timeout', '$q', mainController]);
module.factory('myService', ['$q', '$http', myService]);

