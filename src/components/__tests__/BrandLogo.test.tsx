import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BrandLogo from "../BrandLogo";

describe("BrandLogo Component", () => {
  it("renders the professional brand name Ember & Oak", () => {
    render(<BrandLogo />);
    expect(screen.getByText("Ember & Oak")).toBeInTheDocument();
  });

  it("renders the subtitle Craft Kitchen & Woodfire Grill", () => {
    render(<BrandLogo />);
    expect(
      screen.getByText("Craft Kitchen & Woodfire Grill")
    ).toBeInTheDocument();
  });

  it("renders the custom SVG emblem", () => {
    const { container } = render(<BrandLogo />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("renders only icon when iconOnly is true", () => {
    render(<BrandLogo iconOnly />);
    expect(screen.queryByText("Ember & Oak")).not.toBeInTheDocument();
  });
});
