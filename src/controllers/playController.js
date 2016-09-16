angular.module('videoApp').controller('playController', function (
  $scope,
  $sce,
  youtubeFactory,
  extractYoutubeIdService
) {
  var vm = this
  var YOUTUBE_BASE = 'https://www.youtube.com/embed/'
  //
  vm.query = ''
  vm.src = ''
  vm.updateVideoSrc = updateVideoSrc

  function updateVideoSrc(value) {
    var id = extractYoutubeIdService.extract(value)
    if (id) {
      vm.src = $sce.trustAsResourceUrl(YOUTUBE_BASE + id)
      $scope.$apply()
    }
  }
  // vm.query = ''
  // vm.selectedVideo = null
  //
  // vm.getMatches = getMatches;
  // vm.updateVideoSrc = updateVideoSrc;
  //
  // function updateVideoSrc () {
  //   vm.src = $sce.trustAsResourceUrl(YOUTUBE_BASE + vm.selectedVideo.id.videoId)
  // }
  //
  // function getMatches (searchText) {
  //   return youtubeFactory.getVideosFromSearchByParams({
  //     q: searchText,
  //     key: 'AIzaSyARxPJ01KohTSVSqFkf8BOrIzcdGI_VdDU',
  //   }).then(function (_data) {
  //     return _data.data.items
  //   }).catch(function (_data) {
  //     console.log(_data);
  //   });
  // }
})
