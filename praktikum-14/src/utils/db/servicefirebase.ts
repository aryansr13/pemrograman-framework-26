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
    const q = query(
      collection(db, "users"),
      where("email", "==", userData.email)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return callback({
        status: "error",
        message: "User already exists",
      }); // ⛔ STOP TOTAL
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = {
      email: userData.email,
      fullName: userData.fullName,
      password: hashedPassword,
      role: "member",
    };

    await addDoc(collection(db, "users"), newUser);

    return callback({
      status: "success",
      message: "User registered successfully",
    }); // ⛔ STOP TOTAL
  } catch (error: any) {
    return callback({
      status: "error",
      message: error.message,
    });
  }
}