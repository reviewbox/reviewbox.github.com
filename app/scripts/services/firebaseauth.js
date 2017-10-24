'use strict';

/**
 * @ngdoc service
 * @name reviewboxApp.firebaseAuth
 * @description
 * # firebaseAuth
 * Factory in the reviewboxApp.
 */

angular.module('reviewboxApp')
  .factory('firebaseAuth', FirebaseSchema);

    function FirebaseSchema(Auth, $window, $rootScope, $firebaseObject, FBURL) {
      var userInfo;
      var myConnectionsRef;
      var lastOnlineRef;
      var connectedRef;
      var localConnection = false;
      var syncPresences;
      var userRef;
      return {
        runCheckPresenceStatus: function(user) {
          if(user !== undefined){
            userRef = new Firebase(FBURL+'/users/'+user.uid+'/attamptDoubleLogin')
            myConnectionsRef = new Firebase(FBURL+'/users/'+user.uid+'/connections');
            lastOnlineRef = new Firebase(FBURL+'/users/'+user.uid+'/lastOnline');
            connectedRef = new Firebase(FBURL+'/.info/connected');

            syncPresences = $firebaseObject(myConnectionsRef);

            connectedRef.on('value', function(snapshot) {
              //console.log(snapshot);
              localConnection = true;
              if (snapshot.val() === true) {
                var con = myConnectionsRef.push(true)
                $rootScope.connKey = con.key();
                con.onDisconnect().remove();
                lastOnlineRef.onDisconnect().set(Firebase.ServerValue.TIMESTAMP)
              }
            });

            myConnectionsRef.on('child_added', function(childSnapshot, prevChildKey) {
              //console.log('changed: ');
              //console.log(childSnapshot.val());
              //console.log(prevChildKey);
              //$rootScope
              //if(prevChildKey){
              //  console.log('logOut');
              //  alert('more than two connections');
              //  myConnectionsRef.child(prevChildKey).remove();
              //  //lastOnlineRef.set(Firebase.ServerValue.TIMESTAMP);
              //  localConnection = false;
              //
              //  userRef.transaction(function (current_value) {
              //    console.log('Tran: '+ current_value)
              //      if(!current_value){
              //        current_value = 0;
              //      }
              //      current_value++;
              //    return  current_value;
              //  });
              //
              //  Auth.$unauth();
              //  $window.location.href = '/';
              //
              //
              //  var data = $firebaseObject(userRef);
              //  console.log(data);
              //}
            })
            return syncPresences;
          }




        },
        removeLogin: function() {
          myConnectionsRef.remove();
          lastOnlineRef.set(Firebase.ServerValue.TIMESTAMP);
          localConnection = false;
        },
        getConnection: function() {
          return localConnection;
        },
        getNumConnection: function(){
          if(syncPresences)
            return syncPresences.length;
          else
            return 0;
        },
        testFunction: "dd"
      };
  };
