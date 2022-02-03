import "./App.css";
import UploadForm from "./UploadForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { authentication } from "./firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { storage } from "./firebase-config";
import React, { useState } from "react";

function App() {
  // <Router>
  //   <Routes></Routes>
  // </Router>
  // let navigate = useNavigate();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
    // <Router>
    //   <Routes>
    //     <Route path="/main" element={<main />} />
    //     <Route path="/App" element={<App />} />
    //   </Routes>
    // </Router>;
  };
  // let navigate = useNavigate();
  // let [error, setError] = React.useState(null);
  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   let result = await submitForm(event.target);
  //   if (result.error) {
  //     setError(result.error);
  //   } else {
  //     navigate('success');
  //   }
  // }
  return (
    <div className="App">
      <h1>Please login to continue</h1>
      <button className="button-1" onClick={signInWithGoogle}>
        Login
      </button>
      {/* <div>
        <form>
          <input type="file" />
          <button type="submit">Upload</button>
        </form>
      </div> */}
      <UploadForm />
    </div>
  );
}

function main() {
  return (
    <div className="main">
      <h1>FireGram</h1>
      <center>
        <h2>Your Pictures</h2>
        <input type="file" />
        <button>Upload</button>
      </center>
    </div>
  );
}

export default App;
