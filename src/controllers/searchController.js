angular.module('videoApp').controller('searchController', function (
  $scope,
  youtubeFactory
) {
  var vm = this

  vm.videoId = ''
  vm.query = ''
  vm.selectedVideo = null

  vm.getMatches = getMatches
  vm.updateVideoSrc = updateVideoSrc

  function updateVideoSrc () {
    vm.videoId = vm.selectedVideo.id.videoId
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
