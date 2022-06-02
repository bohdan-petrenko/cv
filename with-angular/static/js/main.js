/**
 * Created by Petrenko on 04.03.2016.
 */

window.locale = "en";
window.application = angular.module("BohdanPatrenko", ['ngRoute']);
application.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/professional-skills', {
            templateUrl: 'static/views/professional-skills.html',
            controller: 'ProfessionalSkillsCtrl'
        }).
        when('/experience', {
            templateUrl: 'static/views/experience.html',
            controller: 'ExperienceCtrl'
        }).
        otherwise({
            redirectTo: '/professional-skills'
        });
    }]);
application.controller("L10nCtrl", function() {
    this.l10n = window.l10nEn;
    this.changeLanguage = function() {
        if (locale === "en") {
            window.locale = "ua";
            this.l10n = l10nUa;
        } else if (locale === "ua") {
            window.locale = "en";
            this.l10n = l10nEn;
        }
    }
});

application.controller("ProfessionalSkillsCtrl", function() {
    activateMenuItem("#professional-skills-item");
});

application.controller("ExperienceCtrl", ['$scope', function($scope) {
    activateMenuItem("#experience-item");
    var projects = [],
        isAllFull = window.isMobile() ? false : true;
    for (var i = 0; i < window.l10nEn.experience.projects.length; i++) {
        projects.push(isAllFull);
    }

    $scope.triggerFull = function(index) {
        projects[+index] = !projects[+index];
    };

    $scope.isFull = function(index) {
        if (projects[+index])
            return true;
        return false;
    };

    $scope.isAllFull = function() {
        return isAllFull;
    };

    $scope.triggerFullForAll = function() {
        isAllFull = !isAllFull;
        for (var i = 0; i < projects.length; i++)
            projects[i] = isAllFull;
    }
}]);


function activateMenuItem(itemName) {
    $('.menu-content>li>a').removeClass('active');
    $(itemName + ">a").addClass('active');
}

