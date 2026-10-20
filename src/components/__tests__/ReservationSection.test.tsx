import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import ReservationSection from "../ReservationSection";

// Mock CartContext with 1 item in cart
vi.mock("@/context/CartContext", () => ({
  useCart: () => ({
    items: [
      {
        item: {
          id: "1",
          name: "Classic Burger",
          price: 15,
          category: "grill",
          image: "https://example.com/burger.jpg",
          tags: [],
          description: "Juicy burger",
        },
        quantity: 1,
      },
    ],
    addToCart: vi.fn(),
    updateQuantity: vi.fn(),
    removeFromCart: vi.fn(),
    clearCart: vi.fn(),
    subtotal: 15,
    tax: 1.5,
    total: 16.5,
  }),
}));

// Mock canvas-confetti
vi.mock("canvas-confetti", () => ({
  default: vi.fn(),
}));

describe("ReservationSection Component Form Validation", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("blocks order submission and displays error when phone number is invalid", () => {
    render(<ReservationSection />);

    const nameInput = screen.getByPlaceholderText(/Alex Johnson/i);
    const phoneInput = screen.getByPlaceholderText(/555.*234/i);
    const submitBtn = screen.getByRole("button", {
      name: /Confirm Order Booking/i,
    });

    // Enter name and an invalid phone number (too short / characters)
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(phoneInput, { target: { value: "12345" } });

    // Click submit
    fireEvent.click(submitBtn);

    // Verify error message is rendered
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText(/too short/i)).toBeInTheDocument();

    // Verify order was blocked (no success modal is shown)
    expect(
      screen.queryByText(/Order Placed Successfully/i)
    ).not.toBeInTheDocument();
  });

  it("blocks order submission and displays error when phone contains invalid characters", () => {
    render(<ReservationSection />);

    const nameInput = screen.getByPlaceholderText(/Alex Johnson/i);
    const phoneInput = screen.getByPlaceholderText(/555.*234/i);
    const submitBtn = screen.getByRole("button", {
      name: /Confirm Order Booking/i,
    });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(phoneInput, { target: { value: "555-abc-9999" } });

    fireEvent.click(submitBtn);

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText(/invalid characters/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/Order Placed Successfully/i)
    ).not.toBeInTheDocument();
  });

  it("clears phone error when valid phone number is entered", () => {
    render(<ReservationSection />);

    const phoneInput = screen.getByPlaceholderText(/555.*234/i);

    // First trigger invalid
    fireEvent.change(phoneInput, { target: { value: "123" } });
    fireEvent.blur(phoneInput);
    expect(screen.getByRole("alert")).toBeInTheDocument();

    // Now enter valid phone
    fireEvent.change(phoneInput, { target: { value: "(555) 234-5678" } });

    // Error should be removed
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});
