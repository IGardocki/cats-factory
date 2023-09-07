import {
    Cat,
    Romad,
    Mimi,
    catFactory,
    // RomadFactory,
    // MimiFactory,
  } from '../catFactory'; // Import your classes and interfaces here
  
  describe('catFactory', () => {
    it('should create Romad who screams for food', () => {
      // const romadFactory: CatFactory = new RomadFactory();
      const romad = catFactory('Romad');
      expect(romad.action()).toBe("scream for food");
    });
  
    it('should create Mimi who bites my toes at 3 am', () => {
      // const mimiFactory: catFactory = new MimiFactory();
      const mimi = catFactory('Mimi');
      expect(mimi.action()).toBe("bite my toes at 3 am");
    });

    it('should throw an error with a cat that is not Romad or Mimi', () => {
      // @ts-ignore
      expect(catFactory('notACat')).toThrowError('Invalid cat!!!');
    })
  });
  