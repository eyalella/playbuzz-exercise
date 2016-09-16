angular.module('videoApp').directive('navigationDirective', function (
  $state,
  $timeout
) {
  return {
    templateUrl: 'src/views/navigation.html',
    link: link
  }

  function link (scope) {
    $timeout(function() {
      scope.currentNavItem = $state.$current.name
    }, 0)
  }
})
