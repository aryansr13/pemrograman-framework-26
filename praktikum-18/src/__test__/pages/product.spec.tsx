/// <reference types="jest" />
import { render, screen } from "@testing-library/react";
import TampilanProduk from "@/pages/produk";
import { useRouter } from "next/router";

// Mocking Next.js Router
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Product Page", () => {
  it("renders product page correctly", () => {
    // Setup Mock Return Value
    (useRouter as jest.Mock).mockReturnValue({
      query: {
        id: "1",
      },
    });

    const page = render(<TampilanProduk />);

    // Contoh penggunaan toBe dan getByTestId jika sudah ditambahkan di komponen:
    // expect(screen.getByTestId("title").textContent).toBe("Daftar Product");

    // Snapshot Test
    expect(page).toMatchSnapshot();
  });
});