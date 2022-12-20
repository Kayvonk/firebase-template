import React, { useState, useEffect } from "react";
import { useAuth, AuthProvider } from "../Contexts/AuthContext";
import { auth, provider } from "../firebase";

export const NavbarSignup = () => {
  const { currentUser, logout, signupWithGoogle, loggedIn } = useAuth();

  useEffect(() => {
    if (currentUser) {
      console.log("LOGGEDIN: " + loggedIn);
      console.log("Logged in as: " + currentUser.displayName);
      console.log("The UID for this user is: " + currentUser.uid);
    } 
    else {
      setTimeout(  console.log("LOGGEDIN: " + loggedIn), 500)
    }
  }, [loggedIn]);

  async function handleGoogleSignup() {
    if (!currentUser) {
      await signupWithGoogle();
    }
  }

  async function handleLogout() {
    await logout();
  
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <button onClick={() => handleGoogleSignup()}>SIGNUP</button>
        <button onClick={() => handleLogout()}>LOGOUT</button>
      </div>
    </>
  );
};

export default NavbarSignup;
