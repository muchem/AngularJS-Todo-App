app.controller('appCtrl', function($scope){
    $scope.Todos = [];
    $scope.removeitem = function (index) {
        $scope.Todos.splice(index, 1);
    }
      $scope.addTodo = function () {
          $scope.Todos.push($scope.item);
          $scope.item = "";
      }
    
});