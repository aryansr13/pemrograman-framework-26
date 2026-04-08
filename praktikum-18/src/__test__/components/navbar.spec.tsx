import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/components/layouts/navbar";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(() => ({ pathname: "/" })),
}));

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
  signIn: jest.fn(),
  signOut: jest.fn(),
}));

describe("Navbar Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should handle login interaction", () => {
    (useSession as jest.Mock).mockReturnValue({ 
      data: null, 
      status: "unauthenticated" 
    });

    render(<Navbar />);

    const loginBtn = screen.getByRole("button", { name: /login|sign in/i });
    fireEvent.click(loginBtn);

    expect(signIn).toHaveBeenCalled();
  });

  it("should handle logout interaction", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: { 
        user: { 
          name: "Rifqi",
          image: "/avatar.png" 
        } 
      },
      status: "authenticated",
    });

    render(<Navbar />);

    const logoutBtn = screen.getByRole("button", { name: /logout|sign out/i });
    fireEvent.click(logoutBtn);

    expect(signOut).toHaveBeenCalled();
  });

  it("should render fullname and image alt when fullname is available", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: { 
        user: { 
          fullname: "Rifqi Muhammad", 
          name: "Rifqi",
          image: "/profile.png" 
        } 
      },
      status: "authenticated",
    });

    render(<Navbar />);

    expect(screen.getByText(/Welcome, Rifqi Muhammad/i)).toBeInTheDocument();
    
    const img = screen.getByAltText(/Rifqi Muhammad/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", expect.stringContaining("profile.png"));
  });
});