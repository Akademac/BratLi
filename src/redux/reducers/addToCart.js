export const isInCart = (cartId, id) => {
  let existing = false;
  cartId.forEach((e) => {
    if(e === id) {
      existing = true;
    }
  })
  return existing;
}



const addToCartR = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      if (!state.includes(payload)) {
        return [...state, payload]
      }
      else {
        return [...state]
      }
      break;

    case "REMOVE_FROM_CART":
      return (state = state.filter((x) => {
        return x !== payload;
      }));
      break;

    default:
      return state
      break;
  }
}

export default addToCartR;