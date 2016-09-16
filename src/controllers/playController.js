angular.module('videoApp').controller('playController', function (
  $scope,
  $sce,
  youtubeFactory,
  extractYoutubeIdService,
  autoplayStateService
) {
  var vm = this

  vm.query = ''
  vm.videoId = ''
  vm.valid = true
  vm.autoplay = false
  vm.autoplay = autoplayStateService.getState()

  vm.updateVideoSrc = updateVideoSrc
  vm.toggleAutoplay = toggleAutoplay

  function toggleAutoplay () {
    autoplayStateService.toggleState()
  }

  function updateVideoSrc (value) {
    var id = extractYoutubeIdService.extract(value)
    if (id && id.length === 11) {
      vm.valid = true
      vm.videoId = id
    } else {
      vm.valid = vm.query.length === 0 || false
    }
  }
})
