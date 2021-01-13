import React from 'react';
import 'firebase/firestore';
import 'firebase/auth';

const auth = firebase.auth();
const firestore = firebase.firestore();

function SignInPage() {
    const signInWithGoogle = () => { 
        const provider = new firebase.auth.GoogleAuthProvider();
    }; auth.signInWithPopup(provider);
    return (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    );
}

export default SignInPage;