import { render, screen } from "@testing-library/react";
import AppShell from "@/components/layouts/Appshell";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
}));

describe("AppShell Component", () => {
  it("renders correctly for guest user", () => {
    (useRouter as jest.Mock).mockReturnValue({ pathname: "/" });
    (useSession as jest.Mock).mockReturnValue({ data: null, status: "unauthenticated" });

    render(<AppShell><div>Konten Guest</div></AppShell>);
    expect(screen.getByText("Konten Guest")).toBeInTheDocument();
  });

  it("renders correctly for authenticated user", () => {
    (useRouter as jest.Mock).mockReturnValue({ pathname: "/" });
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { name: "Rifqi" } },
      status: "authenticated",
    });

    render(<AppShell><div>Konten Member</div></AppShell>);
    expect(screen.getByText("Konten Member")).toBeInTheDocument();
  });

  it("hides navbar on auth pages", () => {
    (useRouter as jest.Mock).mockReturnValue({ pathname: "/auth/login" });
    (useSession as jest.Mock).mockReturnValue({ data: null, status: "unauthenticated" });

    render(<AppShell><div>Halaman Login</div></AppShell>);
    const navbar = screen.queryByRole("navigation");
    expect(navbar).not.toBeInTheDocument();
  });
});