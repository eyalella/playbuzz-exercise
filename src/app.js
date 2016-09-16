angular.module('videoApp', [
  'ui.router',
  'jtt_youtube',
  'ngMaterial'
]).config(function ($stateProvider, $urlRouterProvider) {
  var homeRoute = {
    name: 'home',
    url: '/',
    templateUrl: 'src/views/homeView.html',
    controller: 'homeController',
    controllerAs: 'vm',
    bindToController: true
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

  $stateProvider.state(homeRoute)
  $stateProvider.state(searchState)
  $stateProvider.state(playState)

  $urlRouterProvider.otherwise('/')
})
