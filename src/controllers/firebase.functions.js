import { auth, googleProvider, db } from "../config/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  query,
  where,
  doc,
} from "firebase/firestore";import { signInWithPopup } from "firebase/auth";

const storageColection = collection(db, "storage");

export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.error(error);
  }
};

export const signOut = () => {
  auth.signOut();
  window.location.href = "/";
};

export const getStorage = async (id) => {
    const stateQuery  = query(storageColection, where("authId", "==", id));
    let storage = await getDocs(stateQuery);
    const today = new Date().toISOString().split("T")[0];
    
    if (storage.empty) {
      createStorage(id, today);
      storage = await getDocs(stateQuery);
    } 
    else {
      checkDay({ ...storage.docs[0].data(), id: storage.docs[0].id }, today);
    } 
    storage = { ...storage.docs[0].data(), id: storage.docs[0].id }
    return storage
};

export const createStorage = async (id, today) => {
  try {
    await addDoc(storageColection, {
      authId: id,
      day: {
        number: 1, // 0 is the first case, 1 - 50
        lastDigit: 0,
        date: today,
        dailySpin: false,
      },
      numbers: new Array(50).fill(0).map((_, i) => i + 1),
    });
  } catch (error) {
    console.error(error);
  } finally {
    return;
  }
};

export const updateStorage = async (id, storage) => {
  try {
    console.log(id)
    await updateDoc(doc(storageColection, id), storage);
  } catch (error) {
    console.error(error);
  } finally {
    return;
  }
};

const checkDay = (storage, today, id, test = false) => {
  const { day, numbers } = storage;

  const todayDate = test
    ? textNextDay(new Date(today).toISOString().split("T")[0])
    : new Date(today).toISOString().split("T")[0];

  const storageDate = new Date(day.date).toISOString().split("T")[0];

  if (todayDate > storageDate && day.dailySpin === true) {
    const newStorage = {
      day: {
        number: day.number + 1,
        lastDigit: day.lastDigit,
        date: todayDate,
        dailySpin: false,
      },
      numbers: numbers,
    };
    updateStorage(storage.id, newStorage);
  }
};

// Function to pass to the next day
const textNextDay = (date) => {
  date = date.split("-");
  date[2] = String(Number(date[2]) + 1);
  date = date.join("-");
  return date;
};

export const calculationAlgorithm = (numbers, lastDigit) => {
  return lastDigit > 25 
  ? numbers[Math.floor(Math.random() * numbers.length / 2)]
  : numbers[Math.floor(Math.random() * numbers.length)]
}