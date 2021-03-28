const { assert, expect } = require('chai');

function lookupChar(string, index) {
  if (typeof string !== "string" || !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }

  return string.charAt(index);
}

describe("look up", () => {
  it("type of first parameters", () => {
    assert.equal(lookupChar(123, 1), undefined);
  });
  it("type of second parameters float", () => {
    expect(lookupChar("string", 1.2)).to.equal(undefined);
  });
  it("type of second parameters string", () => {
    expect(lookupChar("string", "asdad")).to.equal(undefined);
  });
  it("string length < index", () => {
    expect(lookupChar("string", 10)).to.equal("Incorrect index");
  });
  it("string length = index", () => {
    expect(lookupChar("string", 6)).to.equal("Incorrect index");
  });
  it("index < 0", () => {
    expect(lookupChar("string", -1)).to.equal("Incorrect index");
  });
  it("return char at index", () => {
    expect(lookupChar("string", 2)).to.equal("r");
  });
});