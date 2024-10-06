// // src/auth.ts
// import { auth } from './firebaseConfig'; // Import the auth object
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore"; // Import Firestore functions
// import { db } from './firebaseConfig'; // Import Firestore instance


// // Function to log in users with email and password
// export const logIn = async (email: string, password: string) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;
//     console.log("User logged in: ", user);
//     return user;
//   } catch (error) {
//     console.error("Error logging in: ", error);
//     throw error;
//   }
// };

// // Function to log in with Google
// export const logInWithGoogle = async () => {
//   const provider = new GoogleAuthProvider();
//   try {
//     const result = await signInWithPopup(auth, provider);
//     const user = result.user;
//     console.log("User logged in with Google: ", user);
//     return user;
//   } catch (error) {
//     console.error("Error logging in with Google: ", error);
//     throw error;
//   }
// };

// export const signUp = async (email: string, password: string) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
  
//       // Save user data to Firestore
//       await setDoc(doc(db, "users", user.uid), {
//         email: user.email,
//         createdAt: new Date(),
//         // Add other user details as needed
//       });
  
//       console.log("User signed up and data saved: ", user);
//       return user;
//     } catch (error) {
//       console.error("Error signing up: ", error);
//       throw error;
//     }
//   };
