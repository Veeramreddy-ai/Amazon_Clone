import {
  ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY, CLEAR_CART, ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,TOGGLE_WISHLIST,MOVE_TO_CART
} from "../ActionsType";

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId
});

export const updateCartQuantity = (itemId, quantity) => ({
  type: UPDATE_CART_QUANTITY,
  payload: { itemId, quantity }
});

export const clearCart = () => ({
  type: CLEAR_CART
});

export const addToWishlist = (item) => ({
  type: ADD_TO_WISHLIST,
  payload: item
});

export const removeFromWishlist = (id) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: id
});

export const toggleWishlist = (item) => ({
    type: TOGGLE_WISHLIST,
    payload: item
});

export const moveToCart = (item) => ({
    type: MOVE_TO_CART,
    payload: item
});