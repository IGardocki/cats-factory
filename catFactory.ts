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

// type CatName = 'Mimi' | 'Romad'

// export interface CatFactory {
//   createCat(catname: CatName ): Cat {
//     if(catname === 'Romad'){
//       return new Romad()
//     }
//     else {
//       return new Mimi()
//     }
//   }
// };

// // Cat Factory interface
// export interface ICatFactory implements CatFactory{
//   createCat(name: CatName): Cat;
// }

// // // Concrete Cat Factories
// // export class RomadFactory implements CatFactory {
// //   createCat(): Cat {
// //     return new Romad();
// //   }
// // }

// // export class MimiFactory implements CatFactory {
// //   createCat(): Cat {
// //     return new Mimi();
// //   }
// // }

// // Client code
// ICatFactory.createCat('Roamd')
// const catFactory = new ICatFactory();
// const romad = catFactory.createCat('Romad');
// // const romadFactory: CatFactory = new RomadFactory();
// // const romad: Cat = romadFactory.createCat();
// console.log('Romad likes to', romad.action()); 
// // Romad screams for food

// // const mimiFactory: CatFactory = new MimiFactory();
// const mimi = catFactory.createCat('Mimi');
// console.log('Mimi likes to', mimi.action()); 
// // Mimi bites my toes at 3 am

// const notACat = catFactory.createCat('notACat');
// // console.log('Mimi likes to', mimi.action()); 
// // Mimi bites my toes at 3 am

type CatName = 'Mimi' | 'Romad'

export function catFactory(type: CatName): Cat {
  switch (type) {
    case 'Romad':
      return new Romad()
    case 'Mimi':
      return new Mimi();
    default:
      throw new Error('Invalid cat!!!');
  }
}

const romad = catFactory('Romad');
const mimi = catFactory('Mimi');
console.log(`Romad likes to ${romad.action()}`);
console.log(`Mimi likes to ${mimi.action()}`);
// const notACat = catFactory('notACat');