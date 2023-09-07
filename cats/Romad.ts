import { type Cat } from "./";

export class Romad implements Cat {
  action(): string {
    return "scream for food";
  }
}
