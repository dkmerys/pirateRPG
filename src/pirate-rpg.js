 export  const storeState = (initalState) => {
   let currentState = initalState;
  return (characterFunction) => {
    const newState = characterFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

export const returnState = () => {
  return (state) => ({
    ...state
  })
}

export const changeString = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: value
    })
  }
}

export const changeNumber = (prop) => {
  return (value) => {
    return (state) => ({
      ...state, 
      [prop] : (state[prop] || 0) + value
    })
  }
}
export const changeLevel = (characterState, character1, levelUp) => {
  console.log(characterState.xp)  
  if (characterState.xp % 10 === 0) {
      console.log(characterState)
      character1(levelUp)
      return true
    } else {
      return false
    }
}
  
export const adjustXP = changeNumber("xp")(10);
export let character1 = storeState({ name: "", hp: 10, xp: 0, rank: "Deck Hand", notoriety: 0, infamy: 0, level: 0 })
let characterStats = returnState();
let characterState = character1;
let changeName = changeString()();

export const levelUp = changeNumber("level")(1);