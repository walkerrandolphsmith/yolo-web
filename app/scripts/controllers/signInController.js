define([], function() {
    return ['$scope', '$http', function($scope, $http) {
        // You can access the scope of the controller from here


        $scope.isNewMember = true;
        $scope.toggleForm = function() {
            this.isNewMember = !this.isNewMember;
        };

        $scope.children = function(){
            return { devices : $scope.$parent.sessionUser.get('children') } ;
        };

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
                    $scope.$parent.sessionUser = user;
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
                    $scope.$parent.sessionUser = user;
                    $scope.$apply();

                },
                error: function(user, error) {
                    alert("Unable to log in: " + error.code + " " + error.message);
                }
            });
        };

        $scope.remoteLock = function(channel) {

            var notification = "{"
                + "\"action\": \"com.example.UPDATE_STATUS\","
                +  "\"alert\": \"Your phone has been locked by Yolo. Contact Parent or Guardian.\""
                + "}";

            Parse.Push.send({
               channels: [channel],
                data: notification

            },{
                success: function() {
                    console.log("Success");
                },
                error: function(error){

                }
            });
        };

        $scope.updateAccount = function(){

        }

        $scope.deleteAccount = function(){

            $scope.$parent.sessionUser.destroy({
                success: function(obj){
                    $scope.isNewMemeber = true;
                    $scope.apply();
                },
                error: function(obj){

                }
            });

        };

        $scope.deleteChild = function(index){
            var children = $scope.$parent.sessionUser.get('children');
            children.splice(index, 1);
            $scope.$parent.sessionUser.save();
            console.log(children);
        }

        $scope.editChild = function(index){
           var child = $scope.$parent.sessionUser.get('children')[index];
            child["name"] = "Amy Smith";
           delete child.$$hashKey
            $scope.$parent.sessionUser.save();
        };
        /*
        $scope.logOut = function(form) {
            Parse.User.logOut();
            $scope.currentUser = null;
        };*/


        // because this has happened asynchroneusly we've missed
        // Angular's initial call to $apply after the controller has been loaded
        // hence we need to explicityly call it at the end of our Controller constructor
        $scope.$apply();
    }];
});