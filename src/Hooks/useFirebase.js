import initializeAuthentication from "../firebase/firebase.config";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";

initializeAuthentication();

const useFirebase = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const auth = getAuth();
  const GoogleProvider = new GoogleAuthProvider();

  // login with google
  const loginWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        setUser(result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  //update profile
  const profileUpdate = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: "https://i.ibb.co/17LfyKx/download.png",
    })
      .then(() => { })
      .catch((error) => {
        console.log(error);
      });
  };
  //create user using email and password

  const createUser = (data) => {
    setIsLoading(true);
    const { name, email, password } = data;
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        saveUser(email, name, 'POST')
        profileUpdate(name);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // login with email and password
  const login = (data) => {
    setIsLoading(true);
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //    log out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };
  // is admin
  useEffect(() => {
    fetch(`https://whispering-waters-68649.herokuapp.com/customers/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
  }, [user.email])

  console.log(user.email, admin, "emailkdjfldjf")
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  // Saving user info
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://whispering-waters-68649.herokuapp.com/customers', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then()
  }

  return { loginWithGoogle, isLoading, logOut, createUser, admin, user, login };
};

export default useFirebase;
