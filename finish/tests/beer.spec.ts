import { getBeer } from "../src/beer";

it("returns the beer if the person is at least 18 years old", () => {
  const person = {
    name: "Jakub",
    age: 20,
  };

  expect(person.age).toBeGreaterThanOrEqual(18);
  expect(getBeer(person)).toBe("🍺");
});

it("throws an error when the person is under 18 years old", () => {
  const person = {
    name: "Maciek",
    age: 16,
  };

  expect(person.age).toBeLessThan(18);
  expect(() => getBeer(person)).toThrow("You're too young to buy a beer");
});
