angular.module('videoApp').service('autoplayStateService', function () {
  var state = false

  this.getState = getState
  this.toggleState = toggleState

  function getState () {
    return state
  }
  function toggleState () {
    state = !state
  }
})
