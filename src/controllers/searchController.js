angular.module('videoApp').controller('searchController', function (
  $scope,
  youtubeFactory,
  autoplayStateService
) {
  var vm = this

  vm.videoId = ''
  vm.query = ''
  vm.selectedVideo = null
  vm.autoplay = autoplayStateService.getState()

  vm.getMatches = getMatches
  vm.updateVideoSrc = updateVideoSrc
  vm.toggleAutoplay = toggleAutoplay

  function updateVideoSrc () {
    if (vm.selectedVideo && vm.selectedVideo.id) {
      vm.videoId = vm.selectedVideo.id.videoId
    }
  }

  function toggleAutoplay () {
    autoplayStateService.toggleState()
  }

  function getMatches (searchText) {
    return youtubeFactory.getVideosFromSearchByParams({
      q: searchText,
      key: 'AIzaSyARxPJ01KohTSVSqFkf8BOrIzcdGI_VdDU',
      maxResults: 20,
      order: 'relevance'
    }).then(function (_data) {
      return _data.data.items
    }).catch(function (_data) {
      console.log(_data)
    })
  }
})
