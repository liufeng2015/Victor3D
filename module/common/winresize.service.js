/**
 * Created by zzjz-pc15 on 2016/10/18.
 */
victor3D.factory("windowResize",["$window", "$timeout",function($window, $timeout){
        return function ($scope) {
            var funcs = [];
            function callAll() {
                for (var i = 0; i < funcs.length; i++) {
                    funcs[i]();
                }
            }
            var currentWindow = angular.element($window);
            currentWindow.on("resize", callAll);
            $scope.$on("$destroy", function () {
                currentWindow.off("resize", callAll);
            });
            return {
                call: function (fn) {
                    funcs.push(fn);
                    $timeout(fn);
                    return this;
                }
            };
        };
    }])
    .factory("delayWait",["$timeout",function($timeout){
        return function (wait, fn, no_postpone) {
            var args, context, result, timeout;
            var executed = true;
            function ping() {
                result = fn.apply(context || this, args || []);
                context = args = null;
                executed = true;
            }
            function cancel() {
                if (timeout) {
                    $timeout.cancel(timeout);
                    timeout = null;
                }
            }
            function wrapper() {
                context = this;
                args = arguments;
                if (!no_postpone) {
                    cancel();
                    timeout = $timeout(ping, wait);
                } else if (executed) {
                    executed = false;
                    timeout = $timeout(ping, wait);
                }
            }
            function flushPending() {
                var pending = !!context;
                if (pending) {
                    cancel();
                    ping();
                }
                return pending;
            }
            wrapper.flush = function () {
                if (!flushPending() && !timeout) {
                    ping();
                }
                return result;
            };
            wrapper.flushPending = function () {
                flushPending();
                return result;
            };
            wrapper.cancel = cancel;
            return wrapper;
        };
    }]);