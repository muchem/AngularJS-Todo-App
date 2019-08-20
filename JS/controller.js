app.controller('appCtrl', function($scope){
    $scope.Todos = [];
    $scope.addTodo = function(){
        $scope.Todos.push($scope.item);
        $scope.removeitem = function(x){
            $scope.Todos.splice($index,1);
        }
        $scope.item = "";
    }
});