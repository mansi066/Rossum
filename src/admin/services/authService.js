import { 
  getAuth, 
  signInWithEmailAndPassword as firebaseSignIn,
  signOut as firebaseSignOut,
  onAuthStateChanged as firebaseOnAuthStateChanged
} from 'firebase/auth';
import { db } from '../../components/firebase';

export const auth = getAuth();

export const signInWithEmailAndPassword = async (email, password) => {
  return await firebaseSignIn(auth, email, password);
};

export const signOut = async () => {
  return await firebaseSignOut(auth);
};

export const onAuthStateChanged = (callback) => {
  return firebaseOnAuthStateChanged(auth, callback);
};