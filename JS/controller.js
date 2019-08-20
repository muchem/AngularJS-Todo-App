app.controller('appCtrl', function($scope){
    $scope.Todos = ['wash face'];
    $scope.addTodo = function(){
        $scope.Todos.push($scope.item);
        $scope.item = "";
    }
});