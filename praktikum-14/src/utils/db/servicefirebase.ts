import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  addDoc,
} from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export async function signUp(
  userData: {
    email: string;
    fullName: string;
    password: string;
  },
  callback: Function
) {
  // 🔍 cek apakah email sudah ada
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email) // ✅ WAJIB "=="
  );

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    // ✅ user belum ada → boleh daftar
    await addDoc(collection(db, "users"), userData);

    callback({
      status: "success",
      message: "User registered successfully",
    });
  } else {
    // ❌ user sudah ada
    callback({
      status: "error",
      message: "User already exists",
    });
  }
}