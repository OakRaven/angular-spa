'use strict';

/**
 * @ngdoc function
 * @name buildingSpasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the buildingSpasApp
 */
angular.module('buildingSpasApp')
  .controller('TodoCtrl', function(){
    var self = this;
    
    self.newTask = '';
    self.taskList = [
      { description: 'Buy airplane tickets', done: false },
      { description: 'Make hotel reservations', done: false },
      { description: 'Chill', done: false },
    ];
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
  })
  .controller('MainCtrl', function () {
  });
