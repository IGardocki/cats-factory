// Cat interface
export interface Cat {
  action(): string;
}

// Concrete cats
export class Romad implements Cat {
  action(): string {
    return "scream for food";
  }
}

export class Mimi implements Cat {
  action(): string {
    return "bite my toes at 3 am";
  }
}

// Cat Factory interface
export interface CatFactory {
  createCat(): Cat;
}

// Concrete Cat Factories
export class RomadFactory implements CatFactory {
  createCat(): Cat {
    return new Romad();
  }
}

export class MimiFactory implements CatFactory {
  createCat(): Cat {
    return new Mimi();
  }
}

// Client code
const romadFactory: CatFactory = new RomadFactory();
const romad: Cat = romadFactory.createCat();
console.log('Romad likes to', romad.action()); 
// Romad screams for food

const mimiFactory: CatFactory = new MimiFactory();
const mimi: Cat = mimiFactory.createCat();
console.log('Mimi likes to', mimi.action()); 
// Mimi bites my toes at 3 am
