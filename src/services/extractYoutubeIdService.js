angular.module('videoApp').service('extractYoutubeIdService', function ($http) {
  const YOUTUBE_REGEX = /^(https?:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/
  const YOUTUBE_BASE = 'https://www.youtube.com/embed/'

  this.extract = extract

  function extract (value) {
    if (YOUTUBE_REGEX.test(value)) {
      if (value.indexOf('v=') > -1) {
        return value.split('v=')[1].split('&')[0]
      } else if (value.indexOf('youtu.be') > -1) {
        return value.split('youtu.be/')[1].split('?')[0]
      }
      return ''
    }
  }
})
