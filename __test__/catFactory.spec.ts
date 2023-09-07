import { type Cat } from "../cats";
import { CatFactory } from "../catFactory"; // Import your classes and interfaces here

describe("catFactory should", () => {
  it("create Romad when Romad is specified", () => {
    const romad: Cat = CatFactory.createCat("Romad");
    expect(romad.action()).toBe("scream for food");
  });

  it("create Mimi who bites my toes at 3 am", () => {
    const mimi: Cat = CatFactory.createCat("Mimi");
    expect(mimi.action()).toBe("bite my toes at 3 am");
  });

  it("create cat specified in ini", () => {
    const configCat: Cat = CatFactory.createCat();
    expect(configCat.action()).toBe("scream for food");
  });
});
