angular.module('videoApp').directive('iframeDirective', function ($sce) {
  var YOUTUBE_BASE = 'https://www.youtube.com/embed/'

  return {
    scope: {videoId: '@'},
    templateUrl: 'src/views/iframe.html',
    controller: controller,
    bindToController: true,
    controllerAs: 'vm'
  }

  function controller ($scope) {
    var vm = this

    init()

    function init () {
      setSecureSrc()
    }

    $scope.$watch('vm.videoId', function () {
      setSecureSrc()
    })

    function setSecureSrc () {
      if (vm.videoId) {
        var url = YOUTUBE_BASE + vm.videoId
        vm.scureSrc = $sce.trustAsResourceUrl(url)
      }
    }
  }
})
