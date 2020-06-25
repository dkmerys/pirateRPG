 export  const storeState = (initalState) => {
   let currentState = initalState;
   console.log(initalState);
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
  console.log(prop);
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

export let character1 = storeState({ name: "", hp: 10, xp: 0, rank: "Deck Hand", notoriety: 0, infamy: 0, level: 0 })
console.log(storeState);
let characterStats = returnState();
let giveStats = character1(characterStats);
let changeName = changeString()();

