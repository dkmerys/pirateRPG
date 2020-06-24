import { storeState, character1, returnState } from './../src/pirate-rpg.js';

describe('character', () => {
  
  test('should create character with a name', () => {
    const character1 = storeState({ name: "Jack" })
    const characterName = returnState()
    const giveName = character1(characterName)
    expect(giveName).toEqual({ name: "Jack" });
  });
});