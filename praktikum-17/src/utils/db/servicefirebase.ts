import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  addDoc,
  where,
  updateDoc
} from "firebase/firestore";

import app from "./firebase";
import bcrypt from "bcrypt";

const db = getFirestore(app);



// ambil semua data collection
export async function retrieveProducts(
  collectionName: string
) {

  const snapshot = await getDocs(
    collection(db, collectionName)
  );

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;

}



// ambil data berdasarkan id
export async function retrieveDataByID(
  collectionName: string,
  id: string
) {

  const snapshot = await getDoc(
    doc(db, collectionName, id)
  );

  const data = snapshot.data();

  return data;

}



// login credentials
export async function signIn(
  email: string
) {

  const q = query(
    collection(db, "users"),
    where("email", "==", email)
  );

  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));


  if (data.length > 0) {

    return data[0];

  } else {

    return null;

  }

}



// register user biasa
export async function signUp(

  userData: {
    email: string;
    fullname: string;
    password: string;
    role?: string;
  },

  callback: Function,

) {

  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email)
  );

  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));


  // cek email sudah ada
  if (data.length > 0) {

    callback({

      status: "error",
      message: "Email already exists",

    });

  }

  else {

    // hash password
    userData.password = await bcrypt.hash(
      userData.password,
      10
    );

    // default role
    userData.role = "member";


    await addDoc(
      collection(db, "users"),
      userData
    )

    .then(() => {

      callback({

        status: "success",
        message: "Register success",

      });

    })

    .catch((error) => {

      callback({

        status: "error",
        message: error.message,

      });

    });

  }

}



// login google
// Ubah nama fungsi dari signInWithGoogle menjadi signInWithOAuth
export async function signInWithOAuth(
  userData: any,
  callback: any
) {
  try {
    const q = query(
      collection(db, "users"),
      where("email", "==", userData.email)
    );

    const querySnapshot = await getDocs(q);
    const data: any = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Jika user sudah terdaftar di Firestore
    if (data.length > 0) {
      // Pertahankan role yang sudah ada di database
      userData.role = data[0].role;

      await updateDoc(doc(db, "users", data[0].id), {
        fullname: userData.fullname,
        email: userData.email,
        image: userData.image, // Update foto profil jika ada perubahan dari provider
        type: userData.type,   // Catat login menggunakan apa (Google/Github)
      });

      callback({
        status: true,
        message: `Login ${userData.type} success`,
        data: userData,
      });
    } 
    // Jika user baru pertama kali login
    else {
      userData.role = "member"; // Default role untuk user baru

      await addDoc(collection(db, "users"), userData);

      callback({
        status: true,
        message: `Register ${userData.type} success`,
        data: userData,
      });
    }
  } catch (error: any) {
    callback({
      status: false,
      message: "Failed OAuth login",
      error: error.message,
    });
  }
}