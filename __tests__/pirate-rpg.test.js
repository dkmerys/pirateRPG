import { storeState, character1, returnState } from './../src/pirate-rpg.js';

describe('character', () => {
  
  test('should create character with a name', () => {
    const character1 = storeState({ name: "Jack" })
    const characterStats = returnState()
    const giveStats = character1(characterStats)
    expect(giveStats).toEqual({ name: "Jack" });
  });

  test('should create character with name, hit points, rank, notoriety, infamy, level', () => {
    const character1 = storeState({ name: "Jack", hp: 10, rank: "Deck Hand", notoriety: 0, infamy: 0, level: 0})
    const characterStats = returnState()
    const giveStats = character1(characterStats)
    expect(giveStats).toEqual({ name: "Jack", hp: 10, rank: "Deck Hand", notoriety: 0, infamy: 0, level: 0})
  });
});