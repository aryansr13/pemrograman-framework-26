/// <reference types="jest" />
import { render, screen } from "@testing-library/react";
import TampilanProduk from "@/pages/produk";
import { useRouter } from "next/router";
import useSWR from "swr";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

describe("Product Page", () => {
  it("renders product page correctly", () => {
    ;(useRouter as jest.Mock).mockReturnValue({
      query: {
        id: "1",
      },
    })

    const page = render(<TampilanProduk />)
    //expect(screen.getByTestId("title").textContent).toBe("Product Page")
    expect(page).toMatchSnapshot()
  })
})