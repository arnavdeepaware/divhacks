// import React, { useState } from 'react';
// import { signUp, logIn, logInWithGoogle } from '../auth'; // Import authentication functions

// const AuthComponent: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = async () => {
//     try {
//       await signUp(email, password);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleLogIn = async () => {
//     try {
//       await logIn(email, password);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       await logInWithGoogle();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Authentication</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleSignUp}>Sign Up</button>
//       <button onClick={handleLogIn}>Log In</button>
//       <button onClick={handleGoogleSignIn}>Log In with Google</button>
//     </div>
//   );
// };

// export default AuthComponent;
