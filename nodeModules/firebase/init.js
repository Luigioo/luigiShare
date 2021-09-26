if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
var firebaseConfig = {
  "projectId": "luigishare-c9f65",
  "appId": "1:367854799025:web:57cdd8229e378881bdfa90",
  "databaseURL": "https://luigishare-c9f65-default-rtdb.europe-west1.firebasedatabase.app",
  "storageBucket": "luigishare-c9f65.appspot.com",
  "locationId": "europe-west",
  "apiKey": "AIzaSyCOG-nqL_-_CAvFa4nRb-QZoLYPm-ll0fE",
  "authDomain": "luigishare-c9f65.firebaseapp.com",
  "messagingSenderId": "367854799025"
};
if (firebaseConfig) {
  firebase.initializeApp(firebaseConfig);

  var firebaseEmulators = {};
  if (firebaseEmulators) {
    console.log("Automatically connecting Firebase SDKs to running emulators:");
    Object.keys(firebaseEmulators).forEach(function(key) {
      console.log('\t' + key + ': http://' +  firebaseEmulators[key].host + ':' + firebaseEmulators[key].port );
    });

    if (firebaseEmulators.database && typeof firebase.database === 'function') {
      firebase.database().useEmulator(firebaseEmulators.database.host, firebaseEmulators.database.port);
    }

    if (firebaseEmulators.firestore && typeof firebase.firestore === 'function') {
      firebase.firestore().useEmulator(firebaseEmulators.firestore.host, firebaseEmulators.firestore.port);
    }

    if (firebaseEmulators.functions && typeof firebase.functions === 'function') {
      firebase.functions().useEmulator(firebaseEmulators.functions.host, firebaseEmulators.functions.port);
    }

    if (firebaseEmulators.auth && typeof firebase.auth === 'function') {
      firebase.auth().useEmulator('http://' + firebaseEmulators.auth.host + ':' + firebaseEmulators.auth.port);
    }
  } else {
    console.log("To automatically connect the Firebase SDKs to running emulators, replace '/__/firebase/init.js' with '/__/firebase/init.js?useEmulator=true' in your index.html");
  }
}
