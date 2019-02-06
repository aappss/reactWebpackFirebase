import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCXm5IROUJ_hviY2t2JdLI3yl-_4EP8RC8",
    authDomain: "myfirebaseproject-617ae.firebaseapp.com",
    databaseURL: "https://myfirebaseproject-617ae.firebaseio.com",
    projectId: "myfirebaseproject-617ae",
    storageBucket: "myfirebaseproject-617ae.appspot.com",
    messagingSenderId: "99214866652",
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');
}

export default Firebase;