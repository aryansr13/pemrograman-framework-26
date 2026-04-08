/// <reference types="jest" />
import { render, screen } from "@testing-library/react";
import TampilanProduk from "@/pages/produk";
import { useRouter } from "next/router";
import useSWR from "swr";

// 1. Mock useRouter dengan __esModule
jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

// 2. Mock useSWR dengan __esModule
jest.mock("swr", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Product Page", () => {
  it("renders product page correctly", () => {
    // 3. Setup mock kembalian untuk useRouter
    ;(useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
      query: { id: "1" },
    });

    // 4. Setup mock kembalian untuk useSWR (simulasi data kosong dulu)
    ;(useSWR as jest.Mock).mockReturnValue({
      data: { data: [] },
      isLoading: false,
      error: null,
    });

    const page = render(<TampilanProduk />);

    // 5. Cek ekspektasi teks yang benar-benar ada di komponenmu ("Daftar Product")
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Daftar Product");
    expect(page).toMatchSnapshot();
  });
});