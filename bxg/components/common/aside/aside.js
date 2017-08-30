angular.module('aside', [])
  .directive('nglAside', [function () {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: '/bxg/components/common/aside/aside.html',
      replace: true,
      controller: ['$scope', function ($scope) {
        console.log('侧边栏')
      }]
    }
  }])