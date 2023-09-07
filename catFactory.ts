import { type Cat, Romad, Mimi } from "./cats";
import { config } from "./configurator";

export class CatFactory {
  static createCat(type?: string): Cat {
    if (type === undefined) {
      type = config.cat;
    }

    switch (type) {
      case "Romad":
        return new Romad();
      case "Mimi":
        return new Mimi();
      default:
        throw new Error("Unknown cat type.");
    }
  }
}
