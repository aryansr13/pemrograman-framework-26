/// <reference types="jest" />
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginPage from "@/pages/login"; // Sesuaikan path ke file login kamu
import { useRouter } from "next/router";
import { signIn, getSession } from "next-auth/react";
import "@testing-library/jest-dom";

// 1. Mocking Router
jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

// 2. Mocking Next-Auth
jest.mock("next-auth/react", () => ({
  __esModule: true,
  signIn: jest.fn(),
  getSession: jest.fn(),
  useSession: jest.fn(() => ({ data: null, status: "unauthenticated" })),
}));

describe("Login Page", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
      query: {},
    });
  });

  it("renders login page correctly", () => {
    const { container } = render(<LoginPage />);

    // Cek elemen utama
    expect(screen.getByText(/Halaman Login/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("email@example.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("****")).toBeInTheDocument();

    // Cek tombol-tombol
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
    expect(screen.getByText(/Sign in with Google/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign in with GitHub/i)).toBeInTheDocument();

    // Syarat: Snapshot test
    expect(container).toMatchSnapshot();
  });

  it("should handle successful login for Admin role", async () => {
    // Simulasi login sukses
    (signIn as jest.Mock).mockResolvedValue({ error: null });
    // Simulasi session role admin
    (getSession as jest.Mock).mockResolvedValue({
      user: { email: "aryan@test.com", role: "admin" },
    });

    render(<LoginPage />);

    fireEvent.change(screen.getByPlaceholderText("email@example.com"), {
      target: { value: "aryan@test.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("****"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith("credentials", expect.any(Object));
      expect(mockPush).toHaveBeenCalledWith("/admin");
    });
  });

  it("should handle successful login for Editor role", async () => {
    (signIn as jest.Mock).mockResolvedValue({ error: null });
    (getSession as jest.Mock).mockResolvedValue({
      user: { email: "aryan@test.com", role: "editor" },
    });

    render(<LoginPage />);

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/editor");
    });
  });

  it("should show error message when credentials are wrong", async () => {
    // Simulasi login gagal
    (signIn as jest.Mock).mockResolvedValue({ error: "CredentialsSignin" });

    render(<LoginPage />);

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(screen.getByText(/Email atau password salah/i)).toBeInTheDocument();
    });
  });

  it("should handle OAuth login (Google)", () => {
    render(<LoginPage />);
    
    const googleBtn = screen.getByText(/Sign in with Google/i);
    fireEvent.click(googleBtn);

    expect(signIn).toHaveBeenCalledWith("google", { callbackUrl: "/" });
  });
});