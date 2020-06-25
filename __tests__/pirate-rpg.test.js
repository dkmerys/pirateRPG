import { storeState, character1, returnState, changeString } from './../src/pirate-rpg.js';

describe('character', () => {
  
  test('should create character with a name', () => {
    let character1 = storeState({ name: "Jack" });
    let characterStats = returnState();
    let giveStats = character1(characterStats);
    expect(giveStats).toEqual({ name: "Jack" });
  });

  test('should create character with name, hit points, rank, notoriety, infamy, level', () => {
    let character1 = storeState({ name: "Jack", hp: 10, xp: 0, rank: "Deck Hand", notoriety: 0, infamy: 0, level: 0 });
    let characterStats = returnState();
    let giveStats = character1(characterStats);
    expect(giveStats).toEqual({ name: "Jack", hp: 10, xp: 0, rank: "Deck Hand", notoriety: 0, infamy: 0, level: 0 });
  });

  test('should change the name of a character', () => { 
    let changeName = changeString("name")("William");
    console.log(changeName);
    let giveStats = character1(changeName);
    expect(giveStats).toEqual({ name: "William", hp: 10, xp: 0, rank: "Deck Hand", notoriety: 0, infamy: 0, level: 0 });
    console.log(giveStats);
  });
  
  test('should change the name of a character again', () => { 
    let changeName = changeString("name")("Bill");
    console.log(changeName);
    let giveStats = character1(changeName);
    console.log(giveStats);
    expect(giveStats).toEqual({ name: "Bill", hp: 10, xp: 0, rank: "Deck Hand", notoriety: 0, infamy: 0, level: 0 });
  });

  test('should change the rank of a character', () => {
    let changeRank = changeString('rank')('Gunner');
    console.log(changeRank);
    let giveStats = character1(changeRank);
    expect(giveStats).toEqual({ name: "Bill", hp: 10, xp: 0, rank: "Gunner", notoriety: 0, infamy: 0, level: 0 });
  });
  
});