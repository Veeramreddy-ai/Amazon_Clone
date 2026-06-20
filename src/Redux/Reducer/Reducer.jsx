import {
  ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY, CLEAR_CART, ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST, TOGGLE_WISHLIST, MOVE_TO_CART
} from "../ActionsType";

const initialState = {
  items: [],
  wishlist: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.itemId ? { ...item, quantity: action.payload.quantity } : item
        )
      };
    case CLEAR_CART:
      return {
        ...state,
        items: []
      };
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload]
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(
          item => item.id !== action.payload
        )
      };
    case TOGGLE_WISHLIST:
      const exists = state.wishlist.find(
        (p) => p.id === action.payload.id
      );

      if (exists) {

        return {
          ...state,
          wishlist: state.wishlist.filter(
            (p) => p.id !== action.payload.id
          )
        };
      } else {

        return {
          ...state,
          wishlist: [...state.wishlist, action.payload]
        };
      }
    case MOVE_TO_CART:
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => String(item.id) !== String(action.payload.id)
        ),
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
}

export default cartReducer;
