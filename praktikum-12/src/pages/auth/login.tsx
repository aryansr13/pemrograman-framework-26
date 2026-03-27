import { useRouter } from "next/router";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (username === "admin" && password === "123") {
      localStorage.setItem("login", "true");
      router.push("/produk");
    } else {
      alert("Username atau password salah");
    }
  };

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
      background: "#f5f5f5"
    }}>
      <form
        onSubmit={handleLogin}
        style={{
          padding: "30px",
          borderRadius: "10px",
          background: "white",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ display: "block", marginBottom: "10px", padding: "8px" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", marginBottom: "10px", padding: "8px" }}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            width: "100%",
            background: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;