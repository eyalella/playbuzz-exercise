angular.module('videoApp').controller('searchController', function (
  $scope,
  $sce,
  youtubeFactory
) {
  var vm = this
  var YOUTUBE_BASE = 'https://www.youtube.com/embed/'

  vm.src = ''
  vm.query = ''
  vm.selectedVideo = null

  vm.getMatches = getMatches;
  vm.updateVideoSrc = updateVideoSrc;

  function updateVideoSrc () {
    vm.src = $sce.trustAsResourceUrl(YOUTUBE_BASE + vm.selectedVideo.id.videoId)
  }

  function getMatches (searchText) {
    return youtubeFactory.getVideosFromSearchByParams({
      q: searchText,
      key: 'AIzaSyARxPJ01KohTSVSqFkf8BOrIzcdGI_VdDU',
    }).then(function (_data) {
      return _data.data.items
    }).catch(function (_data) {
      console.log(_data);
    });
  }
})
