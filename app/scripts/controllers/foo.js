'use strict';

angular.module('ymdosAngularApp')
  .controller('FooCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


angular.module('ymdosAngularApp')
  .controller('DropCtrl', function ($scope){
	$scope.selectedPerson = 0;
	$scope.selectedGenre = null;
	$scope.people = [
		{
			id: 0,
			name: 'Leon',
			music: [
				'Rock',
				'Metal',
				'Dubstep',
				'Electro'
			]
		},
		{
			id: 1,
			name: 'Chris',
			music: [
				'Indie',
				'Drumstep',
				'Dubstep',
				'Electro'
			]
		},
		{
			id: 2,
			name: 'Harry',
			music: [
				'Rock',
				'Metal',
				'Thrash Metal',
				'Heavy Metal'
			]
		},
		{
			id: 3,
			name: 'Allyce',
			music: [
				'Pop',
				'RnB',
				'Hip Hop'
			]
		}
	];
});

angular.module('ymdosAngularApp')
  .controller('FilterCtrl', function ($scope){
	$scope.selectedPerson = 0;
	$scope.selectedGenre = null;
	$scope.people = [
		{
			id: 0,
			name: 'Leon',
			music: [
				'Rock',
				'Metal',
				'Dubstep',
				'Electro'
			],
			live: true
		},
		{
			id: 1,
			name: 'Chris',
			music: [
				'Indie',
				'Drumstep',
				'Dubstep',
				'Electro'
			],
			live: true
		},
		{
			id: 2,
			name: 'Harry',
			music: [
				'Rock',
				'Metal',
				'Thrash Metal',
				'Heavy Metal'
			],
			live: false
		},
		{
			id: 3,
			name: 'Allyce',
			music: [
				'Pop',
				'RnB',
				'Hip Hop'
			],
			live: true
		}
	];
	$scope.newPerson = null;
    $scope.addNew = function() {
        if ($scope.newPerson != null && $scope.newPerson != "") {
            $scope.people.push({
                id: $scope.people.length,
                name: $scope.newPerson,
                live: true,
                music: []
            });
        }
    }
});