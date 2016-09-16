angular.module('videoApp').directive('navigationDirective', function (
  $state,
  $timeout
) {
  return {
    scope: {},
    templateUrl: 'src/views/navigation.html',
    link: link
  }

  function link (scope) {
    $timeout(function () {
      updateCurrentNavItem()
    }, 0)

    PubSub.subscribe('state-change', function (name, data) {
      $state.go(data.state)
      updateCurrentNavItem(data.state)
    })

    function updateCurrentNavItem (state) {
      scope.currentNavItem = state || $state.$current.name
    }
  }
})
