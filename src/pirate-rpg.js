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
const character1 = storeState({name: "Jack"})
const characterName = returnState()
const giveName = character1(characterName)



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

