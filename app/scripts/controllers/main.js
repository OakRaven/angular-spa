'use strict';

/**
 * @ngdoc function
 * @name buildingSpasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the buildingSpasApp
 */
angular.module('buildingSpasApp')
  .controller('TodoCtrl', function($scope, $filter){
    var self = this;
    
    self.newTask = '';
    self.taskList = [
      { description: 'Buy airplane tickets', done: false },
      { description: 'Make hotel reservations', done: false },
      { description: 'Chill', done: false },
    ];
    self.pendingCount = self.taskList.length;
    self.addTodo = function(){
      self.taskList.push({
        description: self.newTask,
        done: false 
      });
      self.newTask = '';
    };
    
    self.deleteTodo = function(index){
      self.taskList.splice(index,1);
    };
    
    $scope.$watch('vm.taskList', function(nv, ov){
      self.pendingCount = $filter('filter')(self.taskList, {done: false}).length; 
    }, true);
    
    self.clearCompleted = function(){
      self.taskList = $filter('filter')(self.taskList, {done: false});
    };
  })
  .controller('MainCtrl', function () {
  });
