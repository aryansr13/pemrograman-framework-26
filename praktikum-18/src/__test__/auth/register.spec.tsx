/// <reference types="jest" />
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TampilanRegister from "@/pages/auth/register";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

// Mock Router
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// Mock Fetch
global.fetch = jest.fn();

describe("Register Page", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    jest.clearAllMocks();
  });

  it("should render register page correctly", () => {
    render(<TampilanRegister />);
    expect(screen.getByText(/Halaman Register/i)).toBeInTheDocument();
  });

  it("should show error if email is empty", async () => {
    const { container } = render(<TampilanRegister />);
    const form = container.querySelector("form");

    if (form) {
      fireEvent.submit(form, {
        target: {
          email: { value: "" },
          fullname: { value: "" },
          password: { value: "" },
        },
      });
    }

    expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
  });

  it("should show error if password is less than 6 characters", async () => {
    const { container } = render(<TampilanRegister />);
    const form = container.querySelector("form");

    if (form) {
      fireEvent.submit(form, {
        target: {
          email: { value: "aryan@test.com" },
          fullname: { value: "Aryan" },
          password: { value: "123" }, // Kurang dari 6
        },
      });
    }

    expect(await screen.findByText(/Password must be at least 6 characters/i)).toBeInTheDocument();
  });

  it("should redirect to login page on successful registration", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      status: 200,
      json: async () => ({ status: true }),
    });

    const { container } = render(<TampilanRegister />);
    const form = container.querySelector("form");

    if (form) {
      fireEvent.submit(form, {
        target: {
          email: { value: "aryan@mail.com" },
          fullname: { value: "Aryan Ganteng" },
          password: { value: "password123" },
          reset: jest.fn(), // Penting karena kodemu panggil event.target.reset()
        },
      });
    }

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("login");
    });
  });

  it("should show error message when email already exists", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      status: 400,
    });

    const { container } = render(<TampilanRegister />);
    const form = container.querySelector("form");

    if (form) {
      fireEvent.submit(form, {
        target: {
          email: { value: "aryan@mail.com" },
          fullname: { value: "Aryan" },
          password: { value: "password123" },
        },
      });
    }

    expect(await screen.findByText(/Email already exists/i)).toBeInTheDocument();
  });
});