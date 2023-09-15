import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

export const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    }
    catch (error) {
      console.error(error);
    }
  };

export const signOut = () => {
  auth.signOut();
  window.location.href = "/";
};

export const checkLocalStorage = () => {
  let storage = localStorage.getItem('storage')
  let today = new Date().toISOString().split('T')[0]
  
  if (!storage) {
      createLocalStorage(today)
      storage = localStorage.getItem('storage')
  }
  else {
      checkDay(storage, today) // Add 1 to run the test
  }

  return JSON.parse(storage)
}

export const createLocalStorage = (today) => {
  localStorage.setItem('storage', JSON.stringify({
      day: {
          number: 1, // 0 is the first case, 1 - 50
          lastDigit: 0,
          date: today,
          dailySpin: false,
      },
      numbers: new Array(50).fill(0).map((_, i) => i + 1)
  }))
}