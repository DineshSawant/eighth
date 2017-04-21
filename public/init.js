var app = angular.module("myApp", ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/partials/landing.html",
        controller :  "landingCtrl"
    })
    .when("/about", {
        templateUrl : "templates/partials/views/about.html",
        // controller :  "aboutCtrl"
    })
    .when("/schedule", {
        templateUrl : "templates/partials/views/schedule.html",
        // controller :  "aboutCtrl"
    })
    .when("/course-details", {
        templateUrl : "templates/partials/views/course-details.html",
        // controller :  "aboutCtrl"
    })
    .when("/gallery", {
        templateUrl : "templates/partials/views/gallery.html",
        // controller :  "aboutCtrl"
    })
    .when("/faqs", {
        templateUrl : "templates/partials/views/faqs.html",
        // controller :  "aboutCtrl"
    })
    .when("/contactus", {
        templateUrl : "templates/partials/views/contactus.html",
        // controller :  "aboutCtrl"
    })
    $routeProvider.otherwise({redirectTo :'/'});
});


app.run(function($rootScope, $location, $window, $templateCache) {
    
    $rootScope.$on('$routeChangeStart', function(event,current,next)  {
        $rootScope.isRouteLoading = true;
    });
     
    $rootScope.$on('$routeChangeSuccess', function() {
        $rootScope.isRouteLoading = false;
    });
});