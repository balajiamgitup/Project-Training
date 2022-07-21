var app =require( "./mathMain");
var  math =require( "./math");

// Set all module functions to jest.fn
jest.mock("./math.js");

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.divide).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});