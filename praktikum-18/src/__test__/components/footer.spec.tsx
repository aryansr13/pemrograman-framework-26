import { render, screen } from "@testing-library/react"
import Footer from "@/components/footer"

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(() => ({
    data: null,
    status: "unauthenticated",
  })),
}))

describe("Footer Component", () => {
  it("renders footer correctly", () => {
    const { container } = render(<Footer />)
    
    //expect(screen.getByText("© 2026 Praktikum Framework")).toBeInTheDocument()
    
    expect(container).toMatchSnapshot()
  })
})