import { config } from "../configurator"; // Import your classes and interfaces here

describe("configuration", () => {
  it("return a configuration object", () => {
    expect(config.cat).toBe("Romad");
  });
});
