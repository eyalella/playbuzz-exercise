angular.module('videoApp').service('youtubeSearchService', function ($http) {
  var YOUTUBE_REGEX = /^(https?:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/
  var YOUTUBE_API = 'https://www.googleapis.com/youtube/v3/search'
  var YOUTUBE_BASE = 'https://www.youtube.com/embed/'

  this.youtubeSearch = youtubeSearch

  function youtubeSearch (videoId) {
    $http({
      method: 'GET',
      url: YOUTUBE_API,
      params: {
        part: 'snippet',
        q: 'kings of leon'
      }
    }).then(function (res) {
      console.log(res);
    })
  }
})
