import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import ScrollVideoHero from "../ScrollVideoHero";

describe("ScrollVideoHero Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders video element without autoPlay attribute", () => {
    const { container } = render(<ScrollVideoHero />);
    const video = container.querySelector("video");

    expect(video).toBeInTheDocument();
    expect(video).not.toHaveAttribute("autoplay");
  });

  it("does not play automatically on mount (calls pause)", () => {
    const { container } = render(<ScrollVideoHero />);
    const video = container.querySelector("video") as HTMLVideoElement;

    expect(video).toBeInTheDocument();
    // HTMLMediaElement.pause should have been called on mount to ensure no automatic playback
    expect(video.pause).toHaveBeenCalled();
    // HTMLMediaElement.play should NOT have been called initially
    expect(video.play).not.toHaveBeenCalled();
  });

  it("does not render any button, pill, or badge overlay on top of the video", () => {
    const { container } = render(<ScrollVideoHero />);
    const video = container.querySelector("video") as HTMLVideoElement;
    const videoContainer = video.parentElement;

    expect(videoContainer).toBeInTheDocument();
    // Confirm there are no button elements inside or over the video container
    expect(videoContainer?.querySelectorAll("button").length).toBe(0);
    // Confirm there is no "Scroll to play" or "Playing" text overlay badge
    expect(videoContainer?.textContent).not.toMatch(/Scroll to play/i);
    expect(videoContainer?.textContent).not.toMatch(/Playing/i);
  });

  it("starts playing when user scrolls one time via window scroll event", () => {
    const { container } = render(<ScrollVideoHero />);
    const video = container.querySelector("video") as HTMLVideoElement;

    expect(video.play).not.toHaveBeenCalled();

    // Trigger one window scroll event
    window.dispatchEvent(new Event("scroll"));

    // Video should now start playing
    expect(video.play).toHaveBeenCalledTimes(1);
  });

  it("starts playing when user scrolls one time via wheel event", () => {
    const { container } = render(<ScrollVideoHero />);
    const video = container.querySelector("video") as HTMLVideoElement;

    expect(video.play).not.toHaveBeenCalled();

    // Trigger one wheel event
    window.dispatchEvent(new Event("wheel"));

    // Video should now start playing
    expect(video.play).toHaveBeenCalledTimes(1);
  });

  it("starts playing when user scrolls one time via touchmove event", () => {
    const { container } = render(<ScrollVideoHero />);
    const video = container.querySelector("video") as HTMLVideoElement;

    expect(video.play).not.toHaveBeenCalled();

    // Trigger one touchmove event
    window.dispatchEvent(new Event("touchmove"));

    // Video should now start playing
    expect(video.play).toHaveBeenCalledTimes(1);
  });

  it("cleans up event listeners when unmounted", () => {
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");
    const { unmount } = render(<ScrollVideoHero />);

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith("scroll", expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith("wheel", expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith("touchmove", expect.any(Function));
  });
});
