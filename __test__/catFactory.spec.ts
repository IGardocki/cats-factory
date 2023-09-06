import {
    Cat,
    Romad,
    Mimi,
    CatFactory,
    RomadFactory,
    MimiFactory,
  } from '../catFactory'; // Import your classes and interfaces here
  
  describe('catFactory', () => {
    it('should create Romad who screams for food', () => {
      const romadFactory: CatFactory = new RomadFactory();
      const romad: Cat = romadFactory.createCat();
      expect(romad.action()).toBe("scream for food");
    });
  
    it('should create Mimi who bites my toes at 3 am', () => {
      const mimiFactory: CatFactory = new MimiFactory();
      const mimi: Cat = mimiFactory.createCat();
      expect(mimi.action()).toBe("bite my toes at 3 am");
    });
  });
  