import calTotal from "../Utility/subtotal";

it("when subtotal ,text and shipping ", () => {
  const result = sum(1, 3, 3);

  expect(result).toBe(7);
});
