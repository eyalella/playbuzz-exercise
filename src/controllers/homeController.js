angular.module('videoApp').controller('homeController', function () {
  this.goToLink = goToLink

  function goToLink (value) {
    PubSub.publish('state-change', {state: value})
  }
})
