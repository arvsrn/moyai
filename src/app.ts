// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { appdata } from "./store";
import { v4 as uuid } from "uuid";
import { doc, setDoc, getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANP81nlbJwXn-GccCyaET9NDaBWTcNB1Y",
  authDomain: "moyai-711b3.firebaseapp.com",
  projectId: "moyai-711b3",
  storageBucket: "moyai-711b3.appspot.com",
  messagingSenderId: "499415809364",
  appId: "1:499415809364:web:3bbdd30b2e502e29a25cc1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export const createUser = async (email: string | null) => {
    const userId = uuid();
    const userName = uuid();

    // Add a new document for the user in collection "users"
    await setDoc(doc(db, "users", "amogus"), {
        name: "amogus",
        handle: userId,
        email,
        about: "Egestas sed tempus urna et pharetra. Sit amet massa vitae tortor condimentum lacinia quis vel.",
        posts: []
    });
}

export const createPost = () => {
    const postId = uuid();
}

export const signIn = () => { 
    signInWithPopup(auth, provider)
        .then(async (result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...

            appdata.set({ loggedIn: true });
            createUser(result.user.email).catch(e => console.log(e));
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...

            console.log(errorCode, errorMessage)
        });
}