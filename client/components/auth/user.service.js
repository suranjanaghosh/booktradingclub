'use strict';

angular.module('fccbookoutpostApp').factory('User', function($resource) {
  return $resource('/api/users/:id/:controller', {
    id: '@_id'
  }, {
    get: {
      method: 'GET', params: {
        id: 'me'
      }
    },
    changeProfile: {
      method: 'PUT', params: {
        id: '@_id'
      }
    }
  });
});
