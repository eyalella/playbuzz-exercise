angular.module('videoApp').controller('searchController', function ($sce, youtubeFactory) {
  var vm = this
  vm.src = 'asd'
  vm.getMatches = getMatches;
  console.log('asdsd');
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
