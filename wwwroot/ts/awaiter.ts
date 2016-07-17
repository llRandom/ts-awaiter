declare var __awaiter: Function;
(window as any).__awaiter = __awaiter; // set global __awaiter to avoid declaring default __awaiter in other files
async () => { } // dummy async function to generate __awaiter code for current file

angular.module('ts-awaiter', []).run(['$timeout', ($timeout: ng.ITimeoutService) => {
    function wrap(func: Function) {
        return function () {
            func.apply(this, arguments);
            $timeout(() => { }); // run angular digest
        };
    }
    
    var oldAwaiter = __awaiter;
    (window as any).__awaiter = (thisArg: any, _arguments: any, P: Function, generator: any) => {
        P = function (executor: Function) {
            return new Promise<any>((resolve, reject) => {
                resolve = wrap(resolve);
                reject = wrap(reject);
                executor(resolve, reject);
            });
        };
        return oldAwaiter(thisArg, _arguments, P, generator);
    };
}]);