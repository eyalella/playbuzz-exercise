angular.module('videoApp', [
  'ui.router',
  'jtt_youtube',
  'ngMaterial'
]).config(function($stateProvider) {
  var searchState = {
    name: 'search',
    url: '/search',
    templateUrl: 'src/views/searchView.html',
    controller: 'searchController',
    controllerAs: 'vm',
    bindToController: true
  }

  var playState = {
    name: 'play',
    url: '/play',
    template: '<h3>play!</h3>'
  }

  $stateProvider.state(searchState);
  $stateProvider.state(playState);
});
