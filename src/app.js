angular.module('videoApp', [
  'ui.router',
  'jtt_youtube',
  'ngMaterial'
]).config(function($stateProvider) {
  var homeRoute = {
    name: 'home',
    url: '/',
    templateUrl: 'src/views/homeView.html'
  }

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
    templateUrl: 'src/views/playView.html',
    controller: 'playController',
    controllerAs: 'vm',
    bindToController: true
  }


  $stateProvider.state(homeRoute);
  $stateProvider.state(searchState);
  $stateProvider.state(playState);
});
