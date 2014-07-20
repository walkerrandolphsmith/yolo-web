define([], function() {
    return ['$scope', '$http', function($scope, $http) {
        // You can access the scope of the controller from here
        $scope.welcomeMessage = 'hey this is myctrl2.js!';


        $scope.scenario = 'Sign up';
        $scope.currentUser = Parse.User.current();
        $scope.isNewMember = true;

        $scope.toggleForm = function() {
            this.isNewMember = !this.isNewMember;
        }

        $scope.signUp = function(form) {
            var user = new Parse.User();
            user.set("email", form.email);
            user.set("username", form.username);
            user.set("password", form.password);
            user.set("phone", form.phone);
            user.set("receivePushNotifications", false);
            user.set("receiveReceiveEmails", false);
            user.set("receiveSMS", false);
            user.set("frequency", 8640000);
            user.set("children", []);

            user.signUp(null, {
                success: function(user) {
                    $scope.currentUser = user;
                    $scope.$apply();
                },
                error: function(user, error) {
                    alert("Unable to sign up:  " + error.code + " " + error.message);
                }
            });
        };

        $scope.logIn = function(form) {
            Parse.User.logIn(form.username, form.password, {
                success: function(user) {
                    $scope.currentUser = user;
                    $scope.$apply();
                },
                error: function(user, error) {
                    alert("Unable to log in: " + error.code + " " + error.message);
                }
            });
        };

        $scope.logOut = function(form) {
            Parse.User.logOut();
            $scope.currentUser = null;
        };


        // because this has happened asynchroneusly we've missed
        // Angular's initial call to $apply after the controller has been loaded
        // hence we need to explicityly call it at the end of our Controller constructor
        $scope.$apply();
    }];
});