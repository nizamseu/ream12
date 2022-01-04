import sum from "./sum";

it("when parameter are number", () => {
  const result = sum(1, 3);

  expect(result).toBe(4);
});

it("when parameter are number", () => {
  const result = sum("1", "3");

  expect(result).toBe(4);
});
