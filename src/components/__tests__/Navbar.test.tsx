import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Navbar from "../Navbar";

// Mock CartContext
vi.mock("@/context/CartContext", () => ({
  useCart: () => ({
    totalItems: 2,
    setIsCartOpen: vi.fn(),
  }),
}));

describe("Navbar Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.scrollTo = vi.fn();
  });

  it("renders desktop and mobile navigation links", () => {
    render(<Navbar />);
    expect(screen.getAllByText("Story").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Menu").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Combos").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Order Booking").length).toBeGreaterThanOrEqual(1);
  });

  it("opens mobile menu drawer when mobile hamburger toggle button is clicked", () => {
    render(<Navbar />);

    const menuButton = screen.getByLabelText("Toggle Menu");
    expect(menuButton).toBeInTheDocument();

    // Click hamburger button to open mobile menu
    fireEvent.click(menuButton);

    // Links inside the drawer should now be accessible
    const storyLinks = screen.getAllByText("Story");
    expect(storyLinks.length).toBe(2); // 1 desktop + 1 mobile drawer
  });

  it("scrolls smoothly when mobile navigation link is clicked", () => {
    render(<Navbar />);

    // Create a mock target element with id="menu"
    const targetSection = document.createElement("section");
    targetSection.id = "menu";
    targetSection.getBoundingClientRect = vi.fn().mockReturnValue({ top: 500 });
    document.body.appendChild(targetSection);

    // Open mobile menu
    const menuButton = screen.getByLabelText("Toggle Menu");
    fireEvent.click(menuButton);

    // Find the mobile link and click it
    const menuLinks = screen.getAllByText("Menu");
    const mobileMenuLink = menuLinks[1]; // mobile drawer link
    fireEvent.click(mobileMenuLink);

    // Should invoke window.scrollTo with smooth behavior
    expect(window.scrollTo).toHaveBeenCalledWith(
      expect.objectContaining({
        behavior: "smooth",
      })
    );

    document.body.removeChild(targetSection);
  });
});
