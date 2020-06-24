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
const character1 = storeState({name: "Jack", hp: 10, rank: "Deck Hand", notoriety: 0, infamy: 0, level: 0})
const characterStats = returnState()
const giveStats = character1(characterStats)



// $(document).ready(function () {
//   $("form#form1").submit(function(event)) {

//   }
// })
/*
(someFunc) => {
    const newState = someFunc({name: "Jack"});
    currentState = { ...newState };
    return newState;
    
  };

  [1,2,3].map(function(element) {
    console.log(element)
    return element + 5
  })
  
*/

