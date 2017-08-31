angular.module('login', [])
  .directive('nglLogin', function () {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: '/bxg/components/login/login.html',
      replace: true,
      controller: 'nglLoginCtl'
    }
  })

  .controller('nglLoginCtl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
    $scope.user = {
      tc_name: '',
      tc_pass: '',
    }

    $scope.login = function () {
      $http({
          url: '/api/login',
          method: 'post',
          data: 'tc_name=' + $scope.user.tc_name + '&' + 'tc_pass=' + $scope.user.tc_pass,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then(function (resp) {
          var data = resp.data
          if (data.code == 200) {
            localStorage.setItem('userInfo', JSON.stringify(data.result));
            $location.path('/')
          } else {
            alert('服务器错误')
          }
        })
    }

  }])