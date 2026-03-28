import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  addDoc,
  where,
} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcrypt";

const db = getFirestore(app);

// 🔥 GET ALL PRODUCTS
export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

// 🔥 GET DATA BY ID
export async function retrieveDataByID(
  collectionName: string,
  id: string
) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}

// 🔐 SIGN UP (SUDAH PAKAI BCRYPT)
export async function signUp(
  userData: {
    email: string;
    fullName: string;
    password: string;
    role?: string;
  },
  callback: Function
) {
  try {
    // 🔍 cek email sudah ada atau belum
    const q = query(
      collection(db, "users"),
      where("email", "==", userData.email)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // ❌ user sudah ada
      callback({
        status: "error",
        message: "User already exists",
      });
    } else {
      // ✅ hash password
      const hashedPassword = await bcrypt.hash(
        userData.password,
        10
      );

      // ✅ set data baru
      const newUser = {
        email: userData.email,
        fullName: userData.fullName,
        password: hashedPassword,
        role: "user",
      };

      await addDoc(collection(db, "users"), newUser);

      callback({
        status: "success",
        message: "User registered successfully",
      });
    }
  } catch (error: any) {
    callback({
      status: "error",
      message: error.message,
    });
  }
}