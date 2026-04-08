/// <reference types="jest" />
import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import "@testing-library/jest-dom";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// 1. Mock Next-Auth & Router
jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
}));

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Home Page", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  it("should render loading state correctly", () => {
    // Simulasi status loading
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "loading",
    });

    render(<Home />);
    expect(screen.getByText(/Memeriksa sesi.../i)).toBeInTheDocument();
  });

  it("should render welcome message for Guest (unauthenticated)", () => {
    // Simulasi user belum login
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "unauthenticated",
    });

    render(<Home />);
    expect(screen.getByText(/Selamat datang, Guest/i)).toBeInTheDocument();
    expect(screen.getByText(/Praktikum Next.js Pages Router/i)).toBeInTheDocument();
  });

  it("should render user fullname when authenticated", () => {
    // Simulasi user sudah login
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { fullname: "Aryan", role: "user" } },
      status: "authenticated",
    });

    render(<Home />);
    expect(screen.getByText(/Selamat datang, Aryan/i)).toBeInTheDocument();
  });

  it("should redirect to /admin if user is admin", () => {
    // Simulasi role admin
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { role: "admin" } },
      status: "authenticated",
    });

    render(<Home />);
    
    // Cek apakah router.push dipanggil ke arah /admin
    expect(mockPush).toHaveBeenCalledWith("/admin");
  });

  it("should redirect to /editor if user is editor", () => {
    // Simulasi role editor
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { role: "editor" } },
      status: "authenticated",
    });

    render(<Home />);
    
    // Cek apakah router.push dipanggil ke arah /editor
    expect(mockPush).toHaveBeenCalledWith("/editor");
  });
});