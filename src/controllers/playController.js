angular.module('videoApp').controller('playController', function (
  $scope,
  $sce,
  youtubeFactory,
  extractYoutubeIdService
) {
  var vm = this

  vm.query = ''
  vm.videoId = ''
  vm.valid = true
  vm.updateVideoSrc = updateVideoSrc

  function updateVideoSrc (value) {
    var id = extractYoutubeIdService.extract(value)
    if (id && id.length === 11) {
      vm.valid = true
      vm.videoId = id
    } else {
      vm.valid = false
    }
  }
})
