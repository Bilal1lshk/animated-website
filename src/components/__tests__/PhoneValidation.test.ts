import { describe, it, expect } from "vitest";
import { validatePhoneNumber } from "../ReservationSection";

describe("validatePhoneNumber", () => {
  it("rejects empty or whitespace-only inputs", () => {
    expect(validatePhoneNumber("").isValid).toBe(false);
    expect(validatePhoneNumber("   ").isValid).toBe(false);
    expect(validatePhoneNumber("").error).toMatch(/required/i);
  });

  it("rejects phone numbers with letters or illegal characters", () => {
    expect(validatePhoneNumber("123-abc-4567").isValid).toBe(false);
    expect(validatePhoneNumber("phone123456").isValid).toBe(false);
    expect(validatePhoneNumber("555#123#4567").isValid).toBe(false);
    expect(validatePhoneNumber("abc").isValid).toBe(false);
    expect(validatePhoneNumber("abc").error).toMatch(/invalid characters/i);
  });

  it("rejects numbers that are too short (fewer than 10 digits)", () => {
    expect(validatePhoneNumber("12345").isValid).toBe(false);
    expect(validatePhoneNumber("555-1234").isValid).toBe(false);
    expect(validatePhoneNumber("123456789").isValid).toBe(false);
    expect(validatePhoneNumber("12345").error).toMatch(/too short/i);
  });

  it("rejects numbers that are too long (more than 15 digits)", () => {
    expect(validatePhoneNumber("1234567890123456").isValid).toBe(false);
    expect(validatePhoneNumber("+1 123 456 789 012 3456").isValid).toBe(false);
    expect(validatePhoneNumber("1234567890123456").error).toMatch(/too long/i);
  });

  it("accepts valid standard 10-digit US/Canada formats", () => {
    expect(validatePhoneNumber("(555) 234-5678").isValid).toBe(true);
    expect(validatePhoneNumber("555-234-5678").isValid).toBe(true);
    expect(validatePhoneNumber("555.234.5678").isValid).toBe(true);
    expect(validatePhoneNumber("5552345678").isValid).toBe(true);
  });

  it("accepts valid international formats with country code", () => {
    expect(validatePhoneNumber("+1 (555) 234-5678").isValid).toBe(true);
    expect(validatePhoneNumber("+44 20 7946 0958").isValid).toBe(true);
    expect(validatePhoneNumber("+92-300-1234567").isValid).toBe(true);
    expect(validatePhoneNumber("03001234567").isValid).toBe(true);
  });
});
