import initializeFirebaseApp from "@/utils/initializeFirebaseApp";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";  // Firestore
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";  // Firebase Storage
import { toast } from "react-toastify";

// Initialize Firebase
const app = initializeFirebaseApp();
const auth = getAuth(app);

// Firestore and Storage initialization
const db = getFirestore(app);  // Firestore
const storage = getStorage(app);  // Storage

const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

// Register with Email and Password
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    toast.success("ההרשמה הצליחה");
    return user;
  } catch (error) {
    toast.warn(error?.message);
    throw error;
  }
};

// Login with Email and Password
const loginWithEmailAndPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    toast.success("הכניסה מוצלחת");
    return response;
  } catch (error) {
    toast.warn(error?.message);
    throw error;
  }
};

// Send Password Reset Email
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    toast.warn(error?.message);
    throw error;
  }
};

// Sign in with Google
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleAuthProvider);
    const user = res.user;
    return user;
  } catch (error) {
    throw error;
  }
};

// Sign in with Facebook
const signInWithFacebook = async () => {
  try {
    const res = await signInWithPopup(auth, facebookAuthProvider);
    const user = res.user;
    return user;
  } catch (error) {
    throw error;
  }
};

// Upload Profile Image and Save User Data to Firestore
const uploadProfileImage = async (userId, profileImg) => {
  try {
    const profileRef = ref(storage, `profileImages/${userId}`);
    const uploadProfile = await uploadBytesResumable(profileRef, profileImg);
    const profileImgUrl = await getDownloadURL(uploadProfile.ref);

    // Save user data to Firestore
    const userProfile = {
      id: userId,
      profileImage: profileImgUrl,
    };

    await setDoc(doc(db, "users", userId), userProfile);
    return profileImgUrl;
  } catch (error) {
    toast.warn("Error uploading profile image: " + error?.message);
    throw error;
  }
};

// Upload Cover Image and Save User Data to Firestore
const uploadCoverImage = async (userId, coverImg) => {
  try {
    const coverRef = ref(storage, `coverImages/${userId}`);
    const uploadCover = await uploadBytesResumable(coverRef, coverImg);
    const coverImgUrl = await getDownloadURL(uploadCover.ref);

    // Save user cover data to Firestore
    const userCoverData = {
      coverImage: coverImgUrl,
    };

    await setDoc(doc(db, "users", userId), userCoverData, { merge: true });
    return coverImgUrl;
  } catch (error) {
    toast.warn("Error uploading cover image: " + error?.message);
    throw error;
  }
};

export {
  auth,
  db,
  storage,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  signInWithFacebook,
  signInWithGoogle,
  uploadProfileImage,
  uploadCoverImage,
};
